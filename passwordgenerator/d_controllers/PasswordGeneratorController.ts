import { NextFunction, Request, Response } from 'express';
import { escape } from 'lodash'
import { PasswordGeneratorValidation } from '../b_validations/PasswordGeneratorValidation';
import { PasswordGeneratorService } from '../c_services/PasswordGeneratorService';

export class PasswordGeneratorController {

  async handle(

    req: Request,
    res: Response,
    next: NextFunction

  ): 
  
  Promise<void> 
  
  {

    try {

      // validation
      const validatingData =  PasswordGeneratorValidation(req).parse(req.query)

      // data object
      const validatedData = {
        length: validatingData.length
      }

      const callExecute = new PasswordGeneratorService(req.t);
      const response = await callExecute.execute(validatedData);

      //response
      res.status(response.code).json(response)

    } catch (error) {

      next(error)

    }

  }
}