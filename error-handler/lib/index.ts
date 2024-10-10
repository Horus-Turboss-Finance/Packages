export class ResponseException extends Error {
  private reason: string;
  private status: number;
  private title: string;

  constructor(reason = ""){
    super()

    this.reason = reason
    this.title = "INTERNAL SERVER ERROR"
    this.status = 500
  }

  UnknownError = () => {
    this.title = "INTERNAL SERVER ERROR"
    this.status = 500
  }

  MethodNotAllowed = () => {
    this.title = "METHOD NOT ALLOWED"
    this.status = 405
  }

  PaymentRequired = () => {
    this.title = "PAYMENT REQUIRED"
    this.status = 402
  }

  ToManyRequest = () => {
    this.title = "TO MANY REQUEST"
    this.status = 429
  }

  Unauthorized = () => {
    this.title = "UNAUTHORIZED"
    this.status = 401
  }

  BadRequest = () => {
    this.title = "BAD REQUEST"
    this.status = 400
  }

  IMATeapot = () => {
    this.title = "I'M A TEAPOT"
    this.status = 41
  }

  Forbidden = () => {
    this.title = "FORBIDDEN"
    this.status = 403
  }

  NotFound = () => {
    this.title = "NOT FOUND"
    this.status = 404
  }

  OK = () => {
    this.title = "OK"
    this.status = 201
  }

  Success = () => {
    this.title = "SUCCESS"
    this.status = 200
  }


  send = () => {
    const success = this.status < 400;
    return {
      success : success,
      title : this.title,
      status : this.status,
      data : this.reason
    }
  }
}