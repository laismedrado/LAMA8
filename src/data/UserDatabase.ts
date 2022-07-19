import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";
import { UserRepository } from "../business/UserRepository";
import { BaseError } from "../error/BaseError";

export class UserDatabase extends BaseDatabase implements UserRepository {
  private static TABLE_NAME = "LAMA_USUARIOS";

  public async createUser(signup: User): Promise<void> {
    try {
      await this.getConnection().insert(signup).into(UserDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new BaseError(error.statusCode, error.sqlMessage || error.message);
    }
  }

  public async findUserEmail(email: string): Promise<User> {
    try {
      const user = await this.getConnection()
        .select(`*`)
        .where({ email })
        .into(UserDatabase.TABLE_NAME);

      return user[0];
    } catch (error: any) {
      throw new BaseError(error.statusCode, error.sqlMessage || error.message);
    }
  }
}
