import { Router } from "express";
import eventController from "../controllers/eventController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { eventSchema } from "../schemas/eventSchema.js";
var eventRouter = Router();
eventRouter.post("/create", validateSchemaMiddleware(eventSchema), eventController.createEvent);
eventRouter.get("/events/:id", eventController.getEventById);
export default eventRouter;
