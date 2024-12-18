import { z } from 'zod'
import { Request } from 'express'

export const PasswordGeneratorValidation = (req: Request) => {
    return z.object({

        length: z.number()
            .int(req.t("just_numbers"))
            .min(32, req.t("length_too_short"))
            .max(500, req.t("length_too_long"))

    })
}

export type PasswordGeneratorValidationType = z.infer<ReturnType<typeof PasswordGeneratorValidation>> 
