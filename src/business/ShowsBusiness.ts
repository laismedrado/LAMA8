import { invalidAuthenticatorData } from "../error/AuthenticatorError";
import { BaseError } from "../error/BaseError";
import { invalidShowDate, invalidToken } from "../error/InvalidInfos";
import { MissingFieldsToComplete } from "../error/MissingFieldsToComplete";
import { Shows, ShowsInputDTO } from "../model/Show";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { ShowRepository } from "./ShowsRepository";

const authenticator = new Authenticator()
const idGenerator = new IdGenerator()


export class ShowsBusiness {
    constructor(private showsDataBase: ShowRepository) { }

    async createShow(inputShow: ShowsInputDTO) {
        try {
            const { weekDay, startTime, endTime, bandId, token } = inputShow

            if (!token) {
                throw new invalidToken()
            }

            if (!weekDay || !startTime || !endTime || !bandId) {
                throw new MissingFieldsToComplete()
            }

            const authenticatorData = authenticator.getData(token)
            if (!authenticatorData.id) {
                throw new invalidAuthenticatorData()
            }

            const id = idGenerator.generate()

            const newShow: Shows = {
                id,
                weekDay,
                startTime,
                endTime,
                bandId
            }

            await this.showsDataBase.createShow(newShow)

        } catch (error: any) {
            throw new BaseError(error.statusCode, error.sqlMessage || error.message);

        }
    }

    async getShowByDate(date: string, token: string) {
        try {
            if (!token) {
                throw new invalidToken()
            }
            const authenticatorData = new Authenticator().getData(token)

            if (!authenticatorData.id) {
                throw new invalidAuthenticatorData()
            }
            const show = await this.showsDataBase.getShowsByDate(date)

            if (!show) {
                throw new invalidShowDate()
            }

            return show
        } catch (error: any) {
            throw new BaseError(error.statusCode, error.sqlMessage || error.message)
        }
    }
}
