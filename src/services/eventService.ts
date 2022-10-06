import { Event } from "@prisma/client";
import dotenv from "dotenv";
import * as eventRepository from "../repositories/eventRepository.js";
import * as errors from "../utils/errors.js";
dotenv.config();

export type CreateEventData = Omit<Event, 'id' | 'nanoid'>;
export type CreateEventDataProcessed = Omit<Event, 'id' >;

async function createEvent(event: CreateEventData) {
  await eventRepository.createEvent({ ...event, nanoid: "XTVbyP20" });
}

const eventService = {
  createEvent
}

export default eventService;
