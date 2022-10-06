import { Router } from "express";

import eventRouter from "./eventRouter.js";

const router = Router();

router.use(eventRouter);

export default router;