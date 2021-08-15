import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { searchExchangeRate } from './staticexchange';


function displayData(response) {
  if(response.result === 'success') {
    $('#exchange-result').text(`Your is worth ${response.conversion_result} ${response.target_code}`);
    $('#exchange-rate').text(`The conversion rate is ${response.conversion_rate}`);
  }else if(response instanceof Error) {
    $('#show-errors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('#convert').click(function(event) {
    event.preventDefault();
    let amount = $('#amount').val();
    let baseCurrency = $('#base-currency').val();
    let targetCurrency = $('#exchanged-currency').val();
    searchExchangeRate.getRate(targetCurrency, baseCurrency, amount)
      .then(function(response) {
        displayData(response);
      });
  });
});