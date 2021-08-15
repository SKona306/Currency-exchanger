# Rapid Currency

### A webpage that will show exchange rates between various currencies.

### By Shaun Kent

## Technologies Used

* HTML5
* CSS
* Bootstrap
* Javascript
* JQuery
* Jest
* Node Package Manager (npm)
* webpack
* ESlint
* Popper
* Dotenv
* Exchange-rate API

## Description

A webpage that will allow the user to see the exchange rate of six different currencies (United States Dollar, South Korean Won, Mexican Peso, Japanese Yen, Jordanian Dinar, Burundian Franc). The user is given a drop down menu for the base currency and an amount field where they input how much of the selected currency they wish to use, the user is also given a drop down menu for the currency they wish to exchange too. Once base currency, amount, and exchanged currency has been selected the user can submit to see the exchange rate ( 1 base currency: exchanged currency ) and the exchange result (exchange rate * amount of base currency). Any errors will display a message below the exchange calculator.

## Setup/Instillation Requirements

* Open command line in directory where you want the project stored.

* In the command line enter: `git clone https://github.com/SKona306/Currency-exchanger.git`

* In command line enter: `code .`

* Navigate to root level of directory and in command line enter: `npm install` to download all dependencies

* If using a Mac, find .gitignore file and add: `.DS_Store/`

* In `.gitignore` file add `.env`

* In root directory create file named `.env`

* Go to `https://www.exchangerate-api.com/` to create an api key

* Enter your email address and click the blue button `Get Free Key!`, this will prompt you to enter an email and password. Once completed accept the terms and create your API key.

* copy API key

* go into `.env` file and at the top insert `API_KEY=[copied API key]`

* To run build in command line enter: `npm run build`

* To see a live server/use the application enter `npm run start` in command line

## Known Bugs

* Was not optimized for mobile type screens.

## License 

[MIT](https://choosealicense.com/licenses/mit/)

## Contact Information

* shaunkent81@gmail.com
