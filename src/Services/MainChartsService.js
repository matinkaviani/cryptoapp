import http from "../Api";
import addresses from "../Api/addresses";
import Response from "../Api/Response";


export default class MainChartsService {
    static async getLinechart(data) {
        let call = await http.get(addresses.history_indices, data);
        let res = Response.parse(call);
        return res;
    }
}
