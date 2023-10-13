import db from "../database";
import { IUser } from "../types/user";
import knex from "knex";

export const getUsers = async (): Promise<IUser[]> => {
  return await db("users").select("*");
};
