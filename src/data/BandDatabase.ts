import { BandRepository } from "../business/BandRepository";
import { BaseError } from "../error/BaseError";
import { Band } from "../model/Band";
import { BaseDatabase } from "./BaseDatabase";


export class BandDatabase extends BaseDatabase implements BandRepository {

  private static TABLE_NAME = "LAMA_BANDAS"

  public async createBand(
    band: Band
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id: band.id,
          name: band.name,
          music_genre: band.musicGenre,
          responsible: band.responsible
        })
        .into(BandDatabase.TABLE_NAME);
    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getDetailBand(name: string): Promise<Band>{
    try{
      const [band] = await this.getConnection()
      .select('name', 'music_genre', 'responsible')
      .where({name})
      .into(BandDatabase.TABLE_NAME)

      return band
    } catch(error: any) {
      throw new BaseError(error.statusCode, error.sqlMessage || error.message);
      
    }
  }
}