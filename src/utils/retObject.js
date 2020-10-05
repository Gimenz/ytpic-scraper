class RetObject {
  constructor(status, result, message) {
    this.status = status;
    this.message = message || "Powered by gimenz.id";
    this.result = result;
  }
}

export default RetObject;
