//Variables to make the Foundation of the Script
var math = require("mathjs");
var finance = require("financejs");

var ticker;
var tickersDate;
var annualizedReturn;
var tickerAdjClose;
var tickerInvestment;
var $ = django.jQuery;

//API ticker object Adj.Close
ticker = [18.209999,
    18.209999,
    18.530001,
    19.09,
    18.98,
    18.389999,
    18.48,
    18.299999,
    18.49,
    18.110001,
    18.639999,
    18.799999,
    18.360001,
    18.91,
    19.26,
    19.719999,
    19.629999,
    19.780001,
    19.620001,
    21.51]

//API ticker object Date
tickersDate = [12/16/19,
    12/17/19,
    12/18/19,
    12/19/19,
    12/20/19,
    12/23/19,
    12/24/19,
    12/26/19,
    12/27/19,
    12/30/19,
    12/31/19,
    1/2/20,
    1/3/20,
    1/6/20,
    1/7/20,
    1/8/20,
    1/9/20,
    1/10/20,
    1/13/20,
    1/14/20]


var skew = function skew(){
    3*(math.mean(ticker)-math.median(ticker))/math.std(ticker)
    }

tickersObject = {
    tickermin:math.min(ticker),
    tickermax:math.max(ticker),
    tickerskew:skew(ticker)
}

annualizedReturn = (ticker[1]-ticker[0])/ticker[0];

$(document).ready(function() {
  tickerInvestment = $('tickerInvestment').
}); 

var skew = function skew(){
  3*(math.mean(ticker)-math.median(ticker))/math.std(ticker)
}
//Functions to make Value at Risk
function randn_bm() {
    var u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );

    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) num = randn_bm(ticker.min,ticker.max,ticker.skew); // resample between 0 and 1 if out of range
    num = Math.pow(num, skew); // Skew
    num *= ticker.max - ticker.min; // Stretch to fill range
    num += ticker.min; // offset to min
    return num;
}

function valueAtRisk(tickerInvestment){
    return annualizedReturn*(1.96*math.sqrt(annualizedReturn))*tickerInvestment
}

//Render On Screen
