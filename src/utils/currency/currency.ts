import { ApiClient } from "./api-client";
import { ResponseData } from "../../types";
import { API, LATEST } from '../../constants'

export class Currency extends ApiClient {
  public constructor() {
    super(API);
  }

  public getConversion = async (base: string, apiKey: string) => {
    try {
      return this.instance.get<ResponseData>(`${LATEST}?access_key=${apiKey}&base=${base}`);
    } catch (error) {
      console.log(error.message);
      return undefined;
    }
  };
}
