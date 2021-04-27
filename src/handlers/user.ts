import { GET, Path, POST, PathParam, PUT, DELETE } from "typescript-rest";
import { User } from "../entity/User";
import { resOK, resError } from "../helpers";
import { getRepository } from "typeorm";

@Path("/user")
export class UserController {
  @GET
  async getUsers() {
    try {
      const users = await getRepository(User).find();
      return resOK({ users });
    } catch (e) {
      return resError(e.message);
    }
  }

  @Path("/:email")
  @GET
  async getUserByEmail(@PathParam("email") email: string) {
    try {
      const user = await getRepository(User)
        .createQueryBuilder("user")
        .select("user")
        .where("user.email = :email", { email })
        .getOne();
      return resOK({ user });
    } catch (e) {
      return resError(e.message);
    }
  }

  @PUT
  @Path("/:email")
  async updateUser(
    @PathParam("email") email: string,
    data: User
  ): Promise<object> {
    try {
      const user = await getRepository(User)
        .createQueryBuilder()
        .update(User)
        .set({ ...data })
        .where("email = :email", { email })
        .execute();
      return resOK({ user });
    } catch (e) {
      return resError(e.message);
    }
  }

  @DELETE
  @Path("/:email")
  async deleteUser(@PathParam("email") email: string): Promise<object> {
    try {
      await getRepository(User)
        .createQueryBuilder()
        .delete()
        .from(User)
        .where("email = :email", { email })
        .execute();
      return resOK({});
    } catch (e) {
      return resError(e.message);
    }
  }

  @POST
  async index(user: User) {
    try {
      await getRepository(User)
        .createQueryBuilder()
        .insert()
        .into(User)
        .values(user)
        .execute();
      return resOK({ user });
    } catch (e) {
      return resError(e.message);
    }
  }
}
