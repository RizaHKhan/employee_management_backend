import { GET, Path, POST, PathParam } from "typescript-rest";
import { User } from "../entity/User";
import { resOK, resError } from "../helpers";
import { getRepository } from "typeorm";

@Path("/user")
export class UserController {
  @GET
  async getUsers() {
    try {
      const userRepo = getRepository(User);
      const users = await userRepo.find();
      return resOK({ users });
    } catch (e) {
      return resError(e.message);
    }
  }

  @Path("/:email")
  @GET
  async getUserByEmail(@PathParam("email") email: string) {
    try {
      const userRepo = getRepository(User);
      const user = await userRepo
        .createQueryBuilder("user")
        .where("user.email = :email", { email })
        .getOne();
      return resOK({ user });
    } catch (e) {
      return resError(e.message);
    }
  }

  @POST
  async index(user: User) {
    try {
      const userRepo = getRepository(User);
      await userRepo.save(user);
      return resOK({ user });
    } catch (e) {
      return resError(e.message);
    }
  }
}
