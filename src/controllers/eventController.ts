import { Request, Response } from "express";
import eventService from "../services/eventService.js";

async function createEvent(req: Request, res: Response) {
  const event = req.body;
  const id = await eventService.createEvent(event);
  res.status(201).send(id);
}

const eventController = {
  createEvent
}

export default eventController;
