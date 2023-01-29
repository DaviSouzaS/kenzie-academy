import { Request, Response } from "express";
import { Client, ClientRequiredKeys } from "./interfaces";

const validateData = (payload: any): Client => {
  const payloadKeys: string[] = Object.keys(payload);
  const requiredKeys: ClientRequiredKeys[] = ["name","birthYear", "cpf"];

  const hasRequiredKeys: boolean = requiredKeys.every((key: string) => payloadKeys.includes(key)
  );

  if (!hasRequiredKeys) {
    const joinedKeys: string = requiredKeys.join(", ")
    throw new Error (`Required keys are: ${joinedKeys}.`)
  }

  return payload
};

const createClient = (request: Request, response: Response): Response => {
  try {
    const validatedData: Client = validateData(request.body);
    return response.status(201).json(validateData);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return response.status(400).json({message: error.message});
    }

    console.error(error)
    return response.status(500).json({ message: error });
  }
};

export { createClient };
