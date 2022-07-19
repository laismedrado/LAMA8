import { UserInputDTO, LoginInputDTO, User } from "../model/User";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { UserRepository } from "./UserRepository";
import { MissingFieldsToComplete } from "../error/MissingFieldsToComplete";
import {
  invalidEmail,
  invalidPassword,
  invalidUserEmail,
} from "../error/InvalidInfos";
import { BaseError } from "../error/BaseError";
import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness {
  constructor(private userDatabase: UserRepository) { }

  async createUser(signup: UserInputDTO) {
    try {
      const { name, email, password, role } = signup;

      if (!name || !email || !password || !role) {
        throw new MissingFieldsToComplete();
      }
      if (!email.includes("@")) {
        throw new invalidEmail();
      }
      if (password.length < 6) {
        throw new invalidPassword();
      }

      const findEmail = await this.userDatabase.findUserEmail(email);
      if (findEmail) {
        throw new invalidUserEmail();
      }

      const idGenerator = new IdGenerator();
      const id = idGenerator.generate();

      const hashManager = new HashManager();
      const hashPassword = await hashManager.hash(password);

      // const userDatabase = new UserDatabase();
      // await userDatabase.createUser(id, email, name, hashPassword, role);
      //PARTE DO CÓDIGO DO BOILERPLATE QUE EU SUBSTITUÍ PELO MODELO DO COOKENU

      const newSignup: User = {
        id,
        email,
        name,
        password: hashPassword,
        role,
      };

      await this.userDatabase.createUser(newSignup);

      const authenticator = new Authenticator();
      const accessToken = authenticator.generate({ id, role: role });

      return accessToken;
    }
    catch (error: any) {

      throw new BaseError(error.statusCode, error.sqlMessage || error.message);
    }
  }


  async userLogin(login: LoginInputDTO) {

    try {

      const { email, password } = login;

      if (!email || !password) {
        throw new MissingFieldsToComplete();
      }
      if (!email.includes("@")) {
        throw new invalidEmail();
      }
      if (password.length < 6) {
        throw new invalidPassword();
      }


      const user = await this.userDatabase.findUserEmail(email);
      if (!user) {
        throw new invalidUserEmail();
      }

      const hashManager = new HashManager();
      const hashCompare = await hashManager.compare(
        password,
        ( 
        await user
      ).password
      )

      // const userDatabase = new UserDatabase();
      // const userFromDB = await userDatabase.getUserByEmail(login.email);


      const authenticator = new Authenticator();
      const accessToken = authenticator.generate({
        id: (await user).id,
        role:(await user).role,
      });

      if (!hashCompare) {
        throw new Error("Invalid Password!");
      }


      return accessToken;
    }
    catch (error: any) {
      throw new BaseError(error.statusCode, error.sqlMessage || error.message);
    }
  }
}



