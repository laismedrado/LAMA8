import { User } from "../model/User";

export interface UserRepository {
  createUser(signup: User): Promise<void>;
  findUserEmail(email: string): Promise<User>;
}
