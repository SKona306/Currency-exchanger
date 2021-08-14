export class searchExchangeRate {
  static getRate(targetCurrency, amount) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${targetCurrency}/${amount}`)
      .then(function(response) {
        if(!response.ok) {
          throw Error(response.statusText);
          
        }
        return response.json();
      })
      .catch(function(error) {
        console.log(error);
        return error;
      });
  }
}