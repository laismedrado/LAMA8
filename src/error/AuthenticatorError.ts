import { BaseError } from "./BaseError";

export class invalidToken extends BaseError {
  constructor() {
    super("O token precisa ser passado no header!", 400)
  }
}

export class invalidAuthenticatorData extends BaseError {
  constructor() {
    super("Usuário não autorizado!", 400)
  }
}