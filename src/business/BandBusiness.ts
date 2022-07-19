import { invalidAuthenticatorData, invalidToken } from "../error/AuthenticatorError";
import { invalidBand } from "../error/BandError";
import { BaseError } from "../error/BaseError";
import { MissingFieldsToComplete } from "../error/MissingFieldsToComplete";
import { Band, BandInputDTO } from "../model/Band";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { BandRepository } from "./BandRepository";

const idGenerator = new IdGenerator()
const authenticator = new Authenticator()

export class BandBusiness {
  constructor(private bandDatabse: BandRepository) { }


  async createBand(inputBand: BandInputDTO) {
    try {
      const { name, musicGenre, responsible, token } = inputBand

      if (!token) {
        throw new invalidToken()
      }

      if (!name || !musicGenre || !responsible) {
        throw new MissingFieldsToComplete()
      }

      const authenticatorData = authenticator.getData(token)

      if (!authenticatorData.id) {
        throw new invalidAuthenticatorData()
      }

      if (authenticatorData.role !== "ADMIN") {
        throw new Error("Acesso não permitido");
      }

      const id = idGenerator.generate()

      const newBand: Band = {
        id,
        name,
        musicGenre,
        responsible
      }

      await this.bandDatabse.createBand(newBand)
    }
    catch (error: any) {
      throw new BaseError(error.statusCode, error.sqlMessage || error.message);
    }
  }
  async bandByNameBusiness(name: string, token: string) {
    try {
      
      if (!token) {
        throw new invalidToken()
      }

      const authenticatorData = new Authenticator().getData(token)

      if (!authenticatorData.id) {
        throw new invalidAuthenticatorData()
      }

      const band = await this.bandDatabse.getDetailBand(name)

      if(!band) {
        throw new invalidBand()
      }

      return band
    } catch (error: any) {
      throw new BaseError(error.statusCode, error.sqlMessage || error.message);
    }
  }
}
