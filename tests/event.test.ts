import { faker } from "@faker-js/faker";
import supertest from "supertest";

import app from "../src/app.js";
import { prisma } from "../src/database.js";
import eventFactory from "./factories/eventFactory.js";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE events`;
});

const agent = supertest(app);

afterAll(async () => {
  await prisma.$disconnect();
});

describe('Tests POST /create ', () => {
  it('Should return status code 201, if a correctly formatted event is created', async () => {
    const event = await eventFactory();

    const result = await supertest(app).post('/create').send(event);

    expect(result.status).toBe(201);
  });
});