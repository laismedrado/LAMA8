import { BandBusiness } from "../business/BandBusiness";
import { Request, Response } from "express";
import { Band, BandInputDTO } from "../model/Band";
import { invalidBand } from "../error/BandError";

export class BandController {
  constructor(private bandBusiness: BandBusiness){}

  async createBandController(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string

      const { name, musicGenre, responsible } = req.body

      const band: BandInputDTO = {
        name,
        musicGenre,
        responsible,
        token
      }

      await this.bandBusiness.createBand(band)

      res.status(201).send({ message: "Banda registrada com sucesso"})
    } catch (err: any) {
      res.status(err.statusCode).send(err.message)
    }
  }

  async getDetailBandController(req: Request, res: Response) {
    try{
      const token = req.headers.authorization as string
      const { name } = req.params

      const band = await this.bandBusiness.bandByNameBusiness(name, token)

      if(!band) {
        throw new invalidBand()
      }

      res.status(200).send(band)
    } catch(error: any) {
      res.status(error.statusCode).send(error.message)
    }
  }
}

// constructor(private bandBusiness: BandBusiness){}


// async getDetailBandController(req: Request, res: Response) {
//   try {
//     const token = req.headers.authorization as string

//     const { name, musicGenre, responsible } = req.body

//     const band: BandInputDTO = {
//       name,
//       musicGenre,
//       responsible,
//       token
//     }

//     await this.bandBusiness.createBand(band)

//     res.status(201).send({ message: "Banda registrada com sucesso"})
//   } catch (err: any) {
//     res.status(err.statusCode).send(err.message)
//   }
// }
// }
