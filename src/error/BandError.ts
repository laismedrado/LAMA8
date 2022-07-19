import { BaseError } from "./BaseError"

export class invalidBand extends BaseError {
  constructor() {
    super("Banda não encontrada!", 404)
  }
}