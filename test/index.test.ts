import { formatCurrency } from "../src/index";

const mockRates = {
  CAD: 1.3148195546,
  HKD: 7.7529221056,
  ISK: 140.0051190171,
  PHP: 48.3892159372,
  DKK: 6.3532121833,
  HUF: 309.2056991724,
  CZK: 22.8487330433,
  GBP: 0.7674601143,
  RON: 4.1528026619,
  SEK: 8.8320109206,
  IDR: 14412.2003242044,
  INR: 74.3925432984,
  BRL: 5.6957597475,
  RUB: 78.8900264483,
  HRK: 6.4439894207,
  JPY: 104.3511645764,
  THB: 31.0297756164,
  CHF: 0.9107584677,
  EUR: 0.8531695248,
  MYR: 4.1679890794,
  BGN: 1.6686289566,
  TRY: 8.4495350226,
  CNY: 6.6579643375,
  NOK: 9.3492876034,
  NZD: 1.4965446634,
  ZAR: 16.0472655917,
  USD: 1.0,
  MXN: 21.0284105452,
  SGD: 1.3587577852,
  AUD: 1.3945909052,
  ILS: 3.4106304923,
  KRW: 1132.3607200751,
  PLN: 3.8706595,
};

test("#on succesful conversion", async () => {
  const formattedPrice: string = formatCurrency({
    amount: 1500,
    from: "USD",
    country: "IN",
    rates: mockRates,
  });
  expect(formattedPrice).toEqual("₹111,589");
});

test("#on no conversion found", async () => {
  const formattedPrice: string = formatCurrency({
    amount: 0.99,
    from: "USD",
    to: "COP",
    rates: mockRates,
  });
  expect(formattedPrice).toEqual("$0.99");
});

test("#on invalid currency conversion", async () => {
  const formattedPrice: string = formatCurrency({
    amount: 0.99,
    from: "USD",
    to: "ZZZ",
    rates: mockRates,
  });
  expect(formattedPrice).toEqual("$0.99");
});
