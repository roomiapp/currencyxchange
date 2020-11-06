import { Conversion } from "./utils/conversion";
import { ConversionType } from "./utils/types";
import { formattedPrice, supportedCurrencies } from "./data/data";
import { currencies } from './data/currencies';
import { get, set } from "./utils/cache/cache";

const converion = new Conversion();

export function formatCurrency(data: ConversionType) {
  const {
    amount,
    country,
    maximumFractionDigits = 0,
    rates = {},
  } = data;
  let { from = 'USD', to = 'USD' } = data
  if (country) to = currencies[country]
  from = from.toUpperCase()
  to = to.toUpperCase()
  if (
    !supportedCurrencies.includes(from) ||
    !supportedCurrencies.includes(to)
  ) {
    return formattedPrice(from, amount.toString())
  }
  if (from === to) {
    return formattedPrice(from, amount.toString())
  }
  if (rates && rates[to]) {
    const convertedAmount = new Intl.NumberFormat("en-US", {
      style: "decimal",
      maximumFractionDigits,
    }).format(amount * rates[to]);
    const price = formattedPrice(to, convertedAmount);
    return price;
  }
  return formattedPrice(from, amount.toString());
}

export async function getConversions(base: string) {
  const currencyConversion: any = await converion.getConversion(base);
  if (!get("rates")) set("rates", currencyConversion);
  const rates = currencyConversion.rates;
  return rates;
}
