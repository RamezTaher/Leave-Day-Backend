import { login, register } from "../controllers/auth.controllers.js"
import express from "express"

const router = express.Router()

router.post("/login", login)
router.post("/register", register)

export default router
