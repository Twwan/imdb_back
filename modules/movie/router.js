import { Router } from "express";
import { Validator } from "../../core/validation.js";
import SimpleController from "./controller.js";
import { messageDto } from "./dto/message-dto.js";

const router = new Router();

router.get("/:id", Validator.validate(messageDto), SimpleController.simpleController);

export default router;