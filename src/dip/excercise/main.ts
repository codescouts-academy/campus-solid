#!/usr/bin/env node
/* eslint-disable no-console */

import { createInterface } from 'readline'
import { IProductInfo } from './Core/IProductInfo';
import { Market } from './Core/Market';
import { DetailPricePrinter } from './Printers/DetailPricePrinter';
import { FullPrinter } from './Printers/FullPrinter';
import { TotalPricePrinter } from './Printers/TotalPricePrinter';
import { ProductFactory } from './Products/ProductFactory';
import { TaxFactory } from './Taxes/TaxFactory';

const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
})

let market: Market;
console.log("Create a new Market");
console.log("-------------------");
readline.question("In what country? (DE | US | UK) ", (countryCode) => {
  readline.question("What type of tax? (Limit-100 | WeekDay) ", (typeOfTax) => {
    market = new Market(countryCode, TaxFactory.getInstance(typeOfTax));
    let product1: IProductInfo;
    readline.question("Introduce First Product ID ", (id) => {
      readline.question("Introduce First Product title ", (title) => {
        readline.question("Introduce First Product price ", (price) => {
          readline.question("Introduce First Product type (Title | Price) ", (productType) => {
            product1 = ProductFactory.getInstance(productType, +id, +price, title);
            let product2: IProductInfo;
    readline.question("Introduce Second Product ID ", (id) => {
      readline.question("Introduce Second Product title ", (title) => {
        readline.question("Introduce Second Product price ", (price) => {
          readline.question("Introduce Second Product type (Title | Price) ", (productType) => {
            product2 = ProductFactory.getInstance(productType, +id, +price, title);
            readline.question("Introduce Ids (separated by ',') ", (ids) => {
              const idList = ids.split(",").map(id => +id);
              const products = [product1, product2];
              const printer = new FullPrinter(new DetailPricePrinter(products), new TotalPricePrinter(products));
              const result = printer.Print(idList, market);
              console.log(result);
            })
          });
        });
      });
    });
          });
        });
      });
    });
  });
});