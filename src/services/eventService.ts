import { Event } from "@prisma/client";
import dotenv from "dotenv";
import { nanoid } from 'nanoid'
import * as eventRepository from "../repositories/eventRepository.js";
import * as errors from "../utils/errors.js";
dotenv.config();

export type CreateEventData = Omit<Event, 'id' | 'nanoid'>;
export type CreateEventDataProcessed = Omit<Event, 'id' >;

async function createEvent(event: CreateEventData) {
  const generatedNanoid = nanoid();
  await eventRepository.createEvent({ ...event, nanoid: generatedNanoid });
  return generatedNanoid;
}

const eventService = {
  createEvent
}

export default eventService;
