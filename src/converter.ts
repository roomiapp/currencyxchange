import { Currency } from "./utils/currency/currency";
import CacheService from "./utils/cache/cache";
import { TTL, DEFAULT_BASE } from "./constants";
import { supportedCurrencies } from "./data/data";

// Create a new currency service instance
const currency = new Currency();
// Create a new cache service instance
const cache = new CacheService(TTL);

export async function getCurrencyRate(base: string = DEFAULT_BASE, apiKey: string): Promise<any> {
  const cuurencyRate = await cache.get(`rate_${base}`, () =>
    currency.getConversion(base, apiKey)
  );
  return cuurencyRate;
}

export async function getCurrencyRateList(apiKey: string): Promise<any> {
  const cuurencyRateList = supportedCurrencies.map((base) =>
    getCurrencyRate(base, apiKey)
  );
  return Promise.all(cuurencyRateList).then((list) => list);
}
