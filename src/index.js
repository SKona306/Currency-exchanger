import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { searchExchangeRate } from './staticexchange';

function displayData(response) {
  if(response.result === "success") {
    $('#exchange-result').text(`Your USD is worth ${response.conversion_result} ${response.target_code}`);
    $('#exchange-rate').text(`The conversion rate is ${response.conversion_rate}`);
  }else {
    $('#show-errors').text(`There was an error: ${response.message}`);
  }
}


$(document).ready(function() {
  $('#conversion').click(function(event) {
    event.preventDefault();
    let amount = $('#amount').val();
    let targetCurrency = $('#currency').val();
    searchExchangeRate.getRate(targetCurrency, amount)
      .then(function(response) {
        displayData(response);
      });
  });
});