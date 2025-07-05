import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2).max(50),
  isDelete: z.boolean().optional(),
  createdAt: z.date().optional(),
  updateAt: z.date().optional(),
  deletedAt: z.date().optional(),
  version: z.number(),
});

export type UserDTO = z.infer<typeof UserSchema>;
