export default class Response {
  constructor(data, isSuccess, errorMessage = "") {
    this.data = data;
    this.isSuccess = isSuccess;
    this.errorMessage =
      errorMessage || (this.isSuccess);
  }
  static parse(response) {
    let inst = new this();
    if (!response.data.isSuccess) {
      inst.data = null;
      inst.isSuccess = false;
      if (response.data) {
        inst.errorMessage =
          response.data.error.message;
      }

    } else {
      inst.data = response.data.data;
      inst.isSuccess = response.data.isSuccess;
      inst.errorMessage = response.data.errorMessage;
    }
    // if (!response.data.success) {
    //   inst.data = null;
    //   inst.isSuccess = false;
    //   inst.errorMessage =
    //     response.data.error?.message || i18n.t("unknownError");
    // } else {
    //   inst.data = response.data.result?.data;
    //   inst.isSuccess = response.data.result
    //     ? response.data.result.isSuccess
    //     : false;
    //   inst.errorMessage = response.data.result?.errorMessage;
    // }
    return inst;
  }
}
