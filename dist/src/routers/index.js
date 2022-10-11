import { Router } from "express";
import eventRouter from "./eventRouter.js";
var router = Router();
router.use(eventRouter);
export default router;
