import type {NextApiRequest, NextApiResponse} from "next";
import db from "@/prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {

  const users = await db.users.findMany();

  res.status(200).json({users})
}
