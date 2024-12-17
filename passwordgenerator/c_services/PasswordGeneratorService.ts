
import { PasswordGeneratorValidationType } from "../b_validations/PasswordGeneratorValidation";
import { StandardResponse } from "../f_utils/StandardResponse"
import { randomBytes } from 'crypto'

export class PasswordGeneratorService {

    private t: (key: string) => string;
    constructor(t: (key: string) => string) {
        this.t = t;
    }

    async execute(
        validatedData:PasswordGeneratorValidationType
    ): Promise<StandardResponse> {

        const generatePassword = (length: number = 12): string => {
            const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?'
            
            const randomValues = randomBytes(length)

            const password = Array.from(randomValues).map(byte => charset[byte % charset.length]).join('')

            return password
        }

        const passwordSec = generatePassword(validatedData.length)

        return {
            "status": 'success',
            "code": 200,
            "message": `#####`,
            "data": [
                {
                    "password": `${passwordSec}`
                }
            ],
            "links": {
                "self": '/helloworld/helloworld',
            }
        }

    }
}