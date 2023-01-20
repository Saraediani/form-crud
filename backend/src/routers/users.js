import express from "express";

import usersController from "../controllers/users.js";

const router = express.Router();

router.get("/users", usersController.getUsers);
router.post("/user", usersController.createUser);
router.get("/user/:id", usersController.getUser);
router.delete("/user/:id", usersController.deleteUser);
router.put("/user/:id", usersController.updateUser);



export default router; 