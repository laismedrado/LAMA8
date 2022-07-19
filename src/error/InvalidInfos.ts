import { BaseError } from "./BaseError";

export class invalidEmail extends BaseError {
  constructor() {
    super("E-mail inválido!", 400);
  }
}

export class invalidPassword extends BaseError {
  constructor() {
    super("Senha inválida!", 400);
  }
}

export class invalidUserEmail extends BaseError {
  constructor() {
    super("E-mail já cadastrado!", 400);
  }
}
export class invalidToken extends BaseError {
  constructor() {
    super("Token inválido!", 400);
  }
}
export class invalidShowDate extends BaseError {
  constructor() {
    super("Nenhum show agendado para essa data!", 400);
  }
}
