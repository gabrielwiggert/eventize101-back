import { faker } from "@faker-js/faker";
import { CreateEventData } from "../../src/services/eventService";

export default function eventFactory(): CreateEventData {
  return {
    title: faker.lorem.words(3),
    host: faker.lorem.words(2),
    dateTime: faker.lorem.words(1),
    location: faker.lorem.words(4),
    description: faker.lorem.words(50)
  };
}