import { Band } from "../model/Band";

export interface BandRepository {
  createBand( band: Band): Promise<void>
  getDetailBand( name: string): Promise<Band>
}