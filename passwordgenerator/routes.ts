import { Router } from 'express'
import { PasswordGeneratorController } from './d_controllers/PasswordGeneratorController'

const routes = Router()

// instances
const passwordGeneratorController = new PasswordGeneratorController()

// routes
routes.get('/helloworld', passwordGeneratorController.handle.bind(passwordGeneratorController))

export default routes