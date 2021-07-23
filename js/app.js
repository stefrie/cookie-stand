'use strict';
console.log('Are you still there?');

function Store(location, minCust, maxCust, cookiesPerCust) {
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.cookiesPerCust = cookiesPerCust;
    this.salesPerHr = [];
    this.cookieTotals = 0;
    this.getCookiesPerHour = function() {
        for (let i = 0; i < storeHours.length; i++) {
            let custPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
            this.salesPerHr[i] = Math.floor(custPerHour * this.cookiesPerCust);   
        }
    };
    this.getCookieTotals = function() {
        for (let i = 0; i < this.salesPerHr.length; i++) {
            this.cookieTotals = this.cookieTotals + this.salesPerHr[i];
        }
    };
}

Store.prototype.renderStore = function(tBodyElem) {
    const rowElem = makeElement('tr', tBodyElem, null);
    makeElement('th', rowElem, this.location)
    for (let i = 0; i < this.salesPerHr.length; i++) {
        makeElement('td', rowElem, this.salesPerHr[i]);
    }
    makeElement('td', rowElem, this.cookieTotals);
};

function storeData () {
    for (let i = 0; i < allStores.length; i++) {
        allStores[i].getCookiesPerHour();
        allStores[i].getCookieTotals();
    }
}

function randomCustPerHr(a, b) {
    let avgCustPerHr = Math.floor(Math.random() * (b - a + 1) + a);
    return avgCustPerHr;
}

function makeElement(tagName, parent, textContent) {
    let element = document.createElement(tagName);
    if (textContent) {
        element.textContent = textContent;
    }
    parent.appendChild(element);
    return element;
}

function makeTable() {
    const divElem = document.getElementById('store');
    const tableElem = makeElement('table', divElem, null);
    makeTHead(tableElem);
    makeTBody(tableElem);
    makeTFoot(tableElem);
}

function makeTHead(tableElem) {
    const tHeadElem = makeElement('thead', tableElem, null);
    const rowElem = makeElement('tr', tHeadElem, null);
    makeElement('th', rowElem, null);
    for (let i = 0; i < storeHours.length; i++) {
        makeElement('th', rowElem, storeHours[i]);
    }
    makeElement('th', rowElem, 'Daily Location Totals');
}

function makeTBody(tableElem) {
    const tBodyElem = makeElement('tbody', tableElem, null);
    for (let i = 0; i < allStores.length; i++) {
        allStores[i].renderStore(tBodyElem);   
    }
}

function makeTFoot(tableElem) {
    const tFootElem = makeElement('tfoot', tableElem, null);
    const rowElem = makeElement('tr', tFootElem, null);
    makeElement('th', rowElem, 'Totals');
    renderHourTotals(rowElem);
}

function renderHourTotals(rowElem) {
    let dailyTotal = 0;
    for (let hourIndex = 0; hourIndex < storeHours.length; hourIndex++) {
        let hourlyTotal = 0;
        for (let storeArrayIndex = 0; storeArrayIndex < allStores.length; storeArrayIndex++) {
            hourlyTotal = hourlyTotal + allStores[storeArrayIndex].salesPerHr[hourIndex];
        }
        makeElement('td', rowElem, hourlyTotal);
        dailyTotal = dailyTotal + hourlyTotal;
    }
    makeElement('td', rowElem, dailyTotal);
}

// // Store.AllStores[i].cookiesPerHour[hourIndex]

function addStores(location, minCust, maxCust, cookiesPerCust) {
    const newStore = new Store(location, minCust, maxCust, cookiesPerCust);
    allStores.push(newStore);
}

const allStores = [];
const storeHours = ['6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p'];
addStores('Seattle', 23, 65, 6.3);
addStores('Toyko', 3, 24, 1.2);
addStores('Dubai', 11, 38, 3.7);
addStores('Paris', 20, 38, 2.3);
addStores('Lima', 2, 16, 4.6);
storeData();
makeTable();

const formElem = document.getElementById('addStoreForm');
 
function handleSubmit(e) {
    e.preventDefault();
}

console.log(e);
let storeLocation = e.target.storeLocation.value;
let minCust = e.target.minCust.value;
let maxCust = e.target.maxCust.value;
let avgCookies = e.target.avgCookies.value;
 
let newStore = new Store(location, minCust, maxCust, cookiesPerCust);
newStore.getAge();
newStore.renderStore();

formElem.addEventListener('submit', handleSubmit)

