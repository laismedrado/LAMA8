import { Request, Response } from "express";
import { ShowsBusiness } from "../business/ShowsBusiness";
import { ShowsInputDTO } from "../model/Show";

export class ShowsController {
  constructor(private showBusiness: ShowsBusiness) { }

  async createShows(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string

      const { weekDay, startTime, endTime, bandId } = req.body

      const show: ShowsInputDTO = {
        weekDay,
        startTime,
        endTime,
        bandId,
        token
      }

      await this.showBusiness.createShow(show)

      res.status(201).send({message: "Show agendado com sucesso!"})
    } catch (error:any) { 
      console.log(error);
      
      res.status(400).send({ error: error.message })
    }
  }

  async getShowByDateController(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;
      const { date } = req.params;

      const show = await this.showBusiness.getShowByDate(date, token);

      res.status(200).send(show);
    } catch (error: any) {
      res.status(error.statusCode).send(error.message);
    }
  }
}
