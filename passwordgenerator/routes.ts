import { Router } from 'express'
import { PasswordGeneratorController } from './d_controllers/PasswordGeneratorController'

const routes = Router()

// instances
const passwordGeneratorController = new PasswordGeneratorController()

// routes
routes.get('/generate', passwordGeneratorController.handle.bind(passwordGeneratorController))

export default routes