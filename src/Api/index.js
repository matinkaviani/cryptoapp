import Axios from "axios";
import config from "../Config";
import Response from "./Response";

const createAxiosResponse = (
    data,
    status = 500,
    statusText = "unknownError"
) => ({
    data: data,
    status: status,
    statusText: statusText,
    headers: null,
    config: null,
    request: null,
});
// const errorHandler = async (data) => {
//   if (data) {
//     let refreshTokenResult = await AuthenticationService.refreshToken()
//     if (!refreshTokenResult.isSuccessful) {
//       AuthenticationService.clearAuthStorage()
//       window.location.href = '/'
//     } else window.location.reload()
//   } else {
//     AuthenticationService.clearAuthStorage()
//     window.location.href = '/'
//   }
// }
let instance = Axios.create({
    baseURL: config.BaseAPIURL,
    withCredentials: true,
    timeout: config.requestTimeout,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "*",
    },
});

//instance.interceptors.request.use(
//    (conf) => {
//        let jwt = AuthenticationService.getToken();
//        if (jwt) conf.headers.Authorization = `Bearer ${jwt}`;
//        return conf;
//    },
//    (error) => {
//        if (process.env.NODE_ENV === "production") {
//            //Sentry.captureException(error);
//        }
//        localStorage.setItem("requestError", JSON.stringify(error));
//        console.log("request error:", error);
//        return new Response(null, false, "unknownError");
//    }
//);

instance.interceptors.response.use(
    async (response) => response,
    (error) => {
        console.log("error", error);
        if (process.env.NODE_ENV === "production") {
            //Sentry.captureException(error);
        }
        if (error.response) {
            // const { data } = error.response
            console.log("response error:", error.response);
            localStorage.setItem("responseError", JSON.stringify(error.response));
            if (error.response.status === 404) {
                return createAxiosResponse(
                    new Response(null, false, "notFoundError"),
                    404,
                    "notFoundError"
                );
            }

            // switch (error.response.status) {
            //   case 401:
            //     //errorHandler(data)
            //     window.location.href = '/'
            //     error.response.data = new Response(null, false, data.error.message)
            //     break
            //   case 404:
            //     error.response.data = new Response(
            //       null,
            //       false,
            //       i18next.t('notFoundError'),
            //     )
            //     break
            //   default:
            //     error.response.data = new Response(null, false, data.error.message)
            //     break
            // }
            return error.response;
        } else {
            // let res = {
            //   data: new Response(null, false, i18next.t('unknownError')),
            //   status: 200,
            //   statusText: 'unknown error',
            //   headers: null,
            //   config: {},
            // }
            return createAxiosResponse(
                new Response(null, false,"unknownError"), 500);
        }
    }
);

export default instance;
