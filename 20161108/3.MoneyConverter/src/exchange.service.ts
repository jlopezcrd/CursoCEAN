export class ExchangeService 
{
    supportCurrencies = ['EUR', 'GBP','USD'];

    private exchangeRates = {
        "EUR/GBP": 0.8007,
        "EUR/USD": 1.1397,
        "GBP/EUR": 1.2478,
        "GBP/USD": 1.4225,
        "USD/EUR": 0.8778,
        "USD/GBP": 0.7029
    };

    getExchangeRate(baseCurrency:string, targetCurrency: string)
    {
        if(baseCurrency === targetCurrency)
            return 1;
            
        return this.exchangeRates[baseCurrency+"/"+targetCurrency];
    }
}