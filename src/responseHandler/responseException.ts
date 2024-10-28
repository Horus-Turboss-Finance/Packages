export default class extends Error {
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

    return this.send()
  }

  MethodNotAllowed = () => {
    this.title = "METHOD NOT ALLOWED"
    this.status = 405

    return this.send()
  }

  PaymentRequired = () => {
    this.title = "PAYMENT REQUIRED"
    this.status = 402

    return this.send()
  }

  ToManyRequest = () => {
    this.title = "TO MANY REQUEST"
    this.status = 429

    return this.send()
  }

  Unauthorized = () => {
    this.title = "UNAUTHORIZED"
    this.status = 401

    return this.send()
  }

  BadRequest = () => {
    this.title = "BAD REQUEST"
    this.status = 400

    return this.send()
  }

  IMATeapot = () => {
    this.title = "I'M A TEAPOT"
    this.status = 41

    return this.send()
  }

  Forbidden = () => {
    this.title = "FORBIDDEN"
    this.status = 403

    return this.send()
  }

  NotFound = () => {
    this.title = "NOT FOUND"
    this.status = 404

    return this.send()
  }

  OK = () => {
    this.title = "OK"
    this.status = 201

    return this.send()
  }

  Success = () => {
    this.title = "SUCCESS"
    this.status = 200

    return this.send()
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