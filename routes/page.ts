import { Request, Response } from "express";

export const pagePath = __dirname + "/page.html";

export default function (req: Request, res: Response) {
  res.sendFile(pagePath);
}
