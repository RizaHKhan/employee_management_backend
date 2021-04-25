import { Path, GET } from "typescript-rest";
import { resOK } from "../helpers";
import { version } from "../../package.json";

@Path("/")
export class Health {
  @GET
  index(): { status: string; version: string } {
    return resOK({
      status: "ok",
      version,
    });
  }
}
