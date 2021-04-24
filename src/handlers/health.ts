import { Path, GET } from "typescript-rest";
import { resOK } from "../helpers";
import { version } from "../../package.json";

@Path("/")
class Health {
  /**
   *
   * For test purposes when deploying new versions
   *
   */

  @GET
  index(): { status: string; version: string } {
    return resOK({
      status: "ok",
      version,
    });
  }
}
