const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody } = require("../../middlwares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

module.exports = router;
