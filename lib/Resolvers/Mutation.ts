import {
  // @ts-ignore
  MutationResolvers,
  // @ts-ignore
  MutationAddTodoArgs,
  // @ts-ignore
  User,
  // @ts-ignore
  MutationAuthArgs,
} from "*.graphqls";
import db from "../../data/config";
import jwt from "jsonwebtoken";
import { SignOptions } from "jsonwebtoken";
import bcrypt from "bcryptjs";

interface Payload {
  id: string;
}

// Generate a JSON web token 🌹
function genToken(user: User): string {
  const payload: Payload = {
    id: user.id,
  };

  const secret: string = String(process.env.SECRET);

  const options: SignOptions = {
    expiresIn: "1h",
  };

  return jwt.sign(payload, secret, options);
}

export const Mutation: Required<MutationResolvers> = {
  async addTodo(_: any, { data }: MutationAddTodoArgs): Promise<any> {
    if (data) {
      await db("todos").insert(data);
      const { name } = data;
      console.log(name);
      const todo = await db("todos")
        .where({ name })
        .first();
      console.log(todo);
      return todo;
    }
  },
  async register(_: any, { data }: MutationAuthArgs) {
    const { username } = data;
    return await db("users")
      .where({ username })
      .first();
  },
  async login(user: User, { data }: MutationAuthArgs) {
    const { username, password } = data;
    const userResponse = await db("users")
      .where({ username })
      .first();
    if (userResponse && bcrypt.compareSync(password, user.password)) {
      const token = genToken(user);
      return token;
    }
  },
};
