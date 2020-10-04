class RetObject {
  make(status, result) {
    return {
      status: status,
      message: "Powered by gimenz.id",
      result: result,
    };
  }
}

export default RetObject;
