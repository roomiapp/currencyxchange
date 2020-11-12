import { ConversionType } from "./types";
import { formattedPrice, supportedCurrencies } from "./data/data";
import { currencies } from './data/currencies';

export function formatCurrency(data: ConversionType): string {
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
    return formattedPrice(from, amount)
  }
  if (from === to) {
    return formattedPrice(from, amount)
  }
  if (rates && rates[to]) {
    const convertedAmount = new Intl.NumberFormat("en-US", {
      style: "decimal",
      maximumFractionDigits,
    }).format(amount * rates[to]);
    return formattedPrice(to, parseInt(convertedAmount));
  }
  return formattedPrice(from, amount);
}
