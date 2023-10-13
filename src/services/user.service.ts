import * as UserRepository from "../repositories/user.repository";
import { IUser } from "../types/user";

const getUsers = async (): Promise<IUser[]> => {
  const users = await UserRepository.getUsers();

  return users;
};

export { getUsers };
