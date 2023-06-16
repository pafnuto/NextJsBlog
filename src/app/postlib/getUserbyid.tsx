import { IUser } from "../interfaces/";
import getAllUsers from "./getAllusers";

export default async function getUserById(userId: number): Promise<IUser> {
  const users: IUser[] = await getAllUsers();
  const user = users.find((user) => user.id === userId);

  if (!user) {
    throw new Error("Пользователь не найден");
  }

  return user;
}