import { BaseError } from "./BaseError";

export class MissingFieldsToComplete extends BaseError {
  constructor() {
    super("Campos ausentes para concluir!", 400)
  }
}