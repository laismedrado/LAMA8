import { ShowRepository } from "../business/ShowsRepository";
import { BaseError } from "../error/BaseError";
import { Shows } from "../model/Show";
import { BaseDatabase } from "./BaseDatabase";

export class ShowDataBase extends BaseDatabase implements ShowRepository {
  private static TABLE_NAME = "LAMA_SHOWS";

  async createShow(show: Shows): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id: show.id,
          week_day: show.weekDay,
          start_time: show.startTime,
          end_time: show.endTime,
          band_id: show.bandId
        })
        .into(ShowDataBase.TABLE_NAME);
    } catch (error: any) {
      throw new BaseError(error.statusCode, error.sqlMessage || error.message);
    }
  }

  async getShowsByDate(date: string): Promise<Shows> {
    try {
      const [shows] = await this.getConnection()
        .select(
          "id",
          "week_day as weekDay",
          "start_time as startTime",
          "end_time as endTime",
          "band_id as bandId"
        )
        .where({ date })
        .into(ShowDataBase.TABLE_NAME);

      return shows;
    } catch (error: any) {
      throw new BaseError(error.statusCode, error.sqlMessage || error.message);
    }
  }
}
