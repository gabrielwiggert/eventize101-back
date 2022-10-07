import { prisma } from "../database.js";
import { CreateEventDataProcessed } from './../services/eventService.js';

export async function createEvent(event: CreateEventDataProcessed) {
  return prisma.event.create({
    data: event
  });
}

export async function getEventById(id: string) {
  return await prisma.event.findFirst({
    where: {
      nanoid: id
    }
  });
}