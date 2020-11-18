export const formattedPrice = (currency: string, amount: string): string => {
  switch (currency) {
    case "INR":
      return `₹${amount}`;
    case "USD":
      return `$${amount}`;
    case "MXN":
      return `$${amount} MXN`;
    case "AUD":
      return `$${amount} AUD`;
    case "CAD":
      return `$${amount} CAD`;
    case "EUR":
      return `€${amount}`;
    case "GBP":
      return `£${amount}`;
    case "ILS":
      return `₪${amount}`;
    case "COP":
      return `$${amount} COP`;
    case "CLP":
      return `$${amount} CLP`;
    case "BRL":
      return `R$${amount}`;
    case "ARS":
      return `$${amount} ARS`;
    case "PEN":
      return `S/.${amount}`;
    case "HKD":
      return `$${amount} HKD`;
    case "THB":
      return `฿${amount}`;
    case "CZK":
      return `Kč${amount}`;
    case "CHF":
      return `${amount} CHF`;
    case "PLN":
      return `${amount} zł`;
    case "SGD":
      return `$${amount} SGD`;
    case "VND":
      return `₫${amount}`;
    case "BGN":
      return `лв${amount}`;
    case "UYU":
      return `$U${amount}`;
    case "TRY":
      return `${amount} ₺`;
    case "SEK":
      return `${amount} kr SEK`;
    case "KRW":
      return `₩${amount}`;
    case "ZAR":
      return `R${amount} ZAR`;
    case "SAR":
      return `SR${amount}`;
    case "RUB":
      return `${amount}₽`;
    case "RON":
      return `lei ${amount}`;
    case "PHP":
      return `₱${amount}`;
    case "NOK":
      return `${amount} kr NOK`;
    case "NZD":
      return `$${amount} NZD`;
    case "TWD":
      return `$${amount} TWD`;
    case "MAD":
      return `MAD${amount}`;
    case "MYR":
      return `RM ${amount}`;
    case "JPY":
      return `¥${amount}`;
    case "HUF":
      return `Ft${amount}`;
    case "AED":
      return `${amount}ﺩ.ﺇ`;
    case "DKK":
      return `${amount} kr DKK`;
    case "HRK":
      return `${amount} kn`;
    case "CRC":
      return `₡${amount}`;
    case "CNY":
      return `￥${amount}`;
    default:
      return '';
  }
};

export const supportedCurrencies: string[] = [
  "INR",
  "USD",
  "MXN",
  "AUD",
  "CAD",
  "EUR",
  "GBP",
  "ILS",
  // "COP",
  // "CLP", 
  "BRL",
  // "ARS",
  // "PEN",
  "HKD",
  "THB",
  "CZK",
  "CHF",
  "PLN",
  "SGD",
  // "VND",
  "BGN",
  // "UYU",
  "TRY",
  "SEK",
  "KRW",
  "ZAR",
  // "SAR",
  "RUB",
  "RON",
  "PHP",
  "NOK",
  "NZD",
  // "TWD",
  // "MAD",
  "MYR",
  "JPY",
  "HUF",
  // "AED",
  "DKK",
  "HRK",
  // "CRC",
  "CNY",
];