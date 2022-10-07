import { Request, Response } from "express";
import eventService from "../services/eventService.js";

async function createEvent(req: Request, res: Response) {
  const event = req.body;
  const id = await eventService.createEvent(event);
  res.status(201).send(id);
}

async function getEventById(req: Request, res: Response) {
  const id = String(req.params.id);
  const result = await eventService.getEventById(id);
  res.status(200).send(result);
}


const eventController = {
  createEvent,
  getEventById
}

export default eventController;
