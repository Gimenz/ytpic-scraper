class ErrorResponse {
  constructor(status, error, message) {
    this.status = status;
    this.message = message || "Powered by gimenz.id";
    this.error = error;
  }
}

export default ErrorResponse;
