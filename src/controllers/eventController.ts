import { Request, Response } from "express";
import eventService from "../services/eventService.js";

async function createEvent(req: Request, res: Response) {
  const event = req.body;
  await eventService.createEvent(event);
  res.sendStatus(201);
}

const eventController = {
  createEvent
}

export default eventController;
