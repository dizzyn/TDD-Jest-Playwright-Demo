import { Request, Response } from "express";
import {
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  headerCase,
  noCase,
  paramCase,
  pascalCase,
  pathCase,
  sentenceCase,
  snakeCase,
} from "change-case";

export function transform(str: string, caseName: "camel" | "snake") {
  if (caseName === "snake") {
    return snakeCase(str);
  }

  return camelCase(str);
}

export default function api(req: Request, res: Response) {
  const caseName = req.query.case;
  const str = req.query.str;

  if (typeof str !== "string") {
    res.status(400);
    res.send(`Str not given`);
    return;
  }

  if (!caseName) {
    res.status(400);
    res.send(`Case name not given`);
    return;
  }

  if (caseName === "camel" || caseName === "snake") {
    res.send(transform(str, caseName));
  } else {
    res.status(400);
    res.send(`Unsupported transformation '${caseName}'`);
    return;
  }
}
