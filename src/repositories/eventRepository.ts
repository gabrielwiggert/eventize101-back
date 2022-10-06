import { prisma } from "../database.js";
import { CreateEventDataProcessed } from './../services/eventService.js';

export async function createEvent(event: CreateEventDataProcessed) {
  return prisma.event.create({
    data: event
  });
}