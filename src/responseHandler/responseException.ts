export class ResponseException extends Error {
  private reason: string;
  private status: number;

  constructor(reason = ""){
    super()

    this.reason = reason
    this.status = 500
  }

  UnknownError = () => {
    return this.send();
  }
  
  "500" = () => {
    return this.send();
  }

  MethodNotAllowed = () => {
    this.status = 405;

    return this.send();
  }

  "405" = () => {
    this.status = 405;

    return this.send();
  }

  PaymentRequired = () => {
    this.status = 402;

    return this.send();
  }

  "402" = () => {
    this.status = 402;

    return this.send();
  }

  ToManyRequest = () => {
    this.status = 429;

    return this.send();
  }

  "429" = () => {
    this.status = 429;

    return this.send();
  }

  Unauthorized = () => {
    this.status = 401;

    return this.send();
  }

  "401" = () => {
    this.status = 401;

    return this.send();
  }

  BadRequest = () => {
    this.status = 400;

    return this.send();
  }

  "400" = () => {
    this.status = 400;

    return this.send();
  }

  IMATeapot = () => {
    this.status = 418;

    return this.send();
  }

  "418" = () => {
    this.status = 418;

    return this.send();
  }

  Forbidden = () => {
    this.status = 403;

    return this.send();
  }

  "403" = () => {
    this.status = 403;

    return this.send();
  }

  InvalidToken = () => {
    this.status = 498;

    return this.send();
  }

  "498" = () => {
    this.status = 498;

    return this.send();
  }

  NotFound = () => {
    this.status = 404;

    return this.send();
  }

  "404" = () => {
    this.status = 404;

    return this.send();
  }

  OK = () => {
    this.status = 201;

    return this.send();
  }

  "201" = () => {
    this.status = 201;

    return this.send();
  }

  Success = () => {
    this.status = 200;

    return this.send();
  }

  "200" = () => {
    this.status = 200;

    return this.send();
  }

  send = () => {
    const success = this.status < 400;
    
    return {
      success : success,
      status : this.status,
      data : this.reason
    }
  }
}