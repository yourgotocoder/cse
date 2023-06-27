import { prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";

export class Student {
  @prop({ default: () => nanoid(9) })
  _id: string;

  @prop()
  NAME: string;

  @prop()
  REGNO: number;

  @prop()
  CGPA: number;

  @prop()
  CURRENT_SEM: number;
}
