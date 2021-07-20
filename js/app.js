'use strict';
console.log('Are you still here?');

// INSTRUCTIONS FOR SALMON COOKIES:
// 1. Stores the min/max hourly customers, and the average cookies per customer, in object properties
// 2. Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

const storeSeattle = {
    storeLoc: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookiePerCust: 6.3,
    getAvgCustPerHr: function() {
        this.avgCustPerHr = randomCustPerHr(23, 65) + ' average customers/hr in Seattle';
        console.log(this.avgCustPerHr);
    },
    salesPerHr: [],
    results: []
}
// storeSeattle.getAvgCustPerHr();
  
function randomCustPerHr(a, b) {
    let avgCustPerHr = Math.floor(Math.random() * (b - a + 1) + a);
    return avgCustPerHr;
}

const storeToyko = {
    storeLoc: 'Toyko',
    minCust: 3,
    maxCust: 24,
    avgCookiePerCust: 1.2,
    getAvgCustPerHr: function() {
        this.avgCustPerHr = randomCustPerHr(3, 24) + ' average customers/hr in Tokyo';
        console.log(this.avgCustPerHr);
    },
    salesPerHr: [],
    results: []
}
// storeToyko.getAvgCustPerHr();

const storeDubai = {
    storeLoc: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookiePerCust: 3.7,
    getAvgCustPerHr: function() {
        this.avgCustPerHr = randomCustPerHr(11, 38) + ' average customers/hr in Dubai';
        console.log(this.avgCustPerHr);
    },
    salesPerHr: [],
    results: []
}
// storeDubai.getAvgCustPerHr();

const storeParis = {
    storeLoc: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookiePerCust: 2.3,
    getAvgCustPerHr: function() {
        this.avgCustPerHr = randomCustPerHr(20, 38) + ' average customers/hr in Paris';
        console.log(this.avgCustPerHr);
    },
    salesPerHr: [],
    results: []
}
// storeParis.getAvgCustPerHr();

const storeLima = {
    storeLoc: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookiePerCust: 4.6,
    getAvgCustPerHr: function() {
        this.avgCustPerHr = randomCustPerHr(2, 16) + ' average customers/hr in Lima';
        console.log(this.avgCustPerHr);
    },
    salesPerHr: [],
    results: []
}
// storeLima.getAvgCustPerHr();

// INSTRUCTIONS (cont'd):
// 3. Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// [In other words: take the random number we generated within the object, and multiply that times average number of cookies per hour]
let hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

function cookiesPerHour(storeLoc) {
    for (let i=0; i<hoursArray.length; i++) {
        storeLoc.getAvgCustPerHr();
        let cookiesPH = parseInt(storeLoc.avgCookiePerCust) * parseInt(storeLoc.avgCustPerHr);
        console.log(cookiesPH);
        storeLoc.salesPerHr.push(cookiesPH);
    } 
}

const storeLocations = [storeSeattle, storeToyko, storeDubai, storeParis, storeLima];

// INSTRUCTIONS (cont'd):
// 4. Store the results for each location in a separate array… perhaps as a property of the object representing that location
for (let i=0; i < storeLocations.length; i++) {
    cookiesPerHour(storeLocations[i]);
    storeLocations[i].results.push(cookiesPerHour);
}

// INSTRUCTIONS (cont'd):
// 5. Display the values of each array as unordered lists in the browser
const profileDivElem = document.getElementById('store');

function renderStore(store) {
    store.getAvgCustPerHr();
    let sectionElem = document.createElement('section');
    profileDivElem.appendChild(sectionElem)

    let h3Elem = document.createElement('h3');
    h3Elem.textContent = store.storeLoc;
    sectionElem.appendChild(h3Elem);
    
    let ulElem = document.createElement('ul');
    sectionElem.appendChild(ulElem);

    for (let i = 0; i < store.salesPerHr.length; i++) {
        let liElem = document.createElement('li');
        liElem.textContent = `${store.salesPerHr[i]} cookies sold at (hour)`;
        ulElem.appendChild(liElem);
    }
}

for (let i = 0; i < storeLocations.length; i++) {
    renderStore(storeLocations[i]);
}

/// ****CODE REVIEW: add a function that will combine the two arrays? nested for loop? ****

// getAvgCustPerHr: function() {
//     this.avgCustPerHr = randomCustPerHr(23, 65) + ' average customers/hr in Seattle';
//     console.log(this.avgCustPerHr);


//   for (let i = 0; i < kittenArray.length; i++) {
//     renderKitten(kittenArray[i]);
 
//   const kittenArray = [frankie, jumper, serena];
  
//   // put frankie on the page!!
//   // find the place on the page we want to add frankie
//   // kittenProfiles - lets get a refernce
//   const profileDivElem = document.getElementById('kittenProfiles');
  
//   // create some elements to put content in
//   // <!-- <article>
//   //           <h2></h2>
//   //           <p></p>
//   //           <ul>
//   //             <li></li>
//   //           </ul>
//   //           <img>
//   //         </article> -->
//   // name
//   //age
//   //interests


//   function renderKitten(kitten) {
//     let articleElem = document.createElement('article');
//     // parentElem.appendChild(childElem)
//     profileDivElem.appendChild(articleElem);
//     let imgElem = document.createElement('img');
//     imgElem.src = kitten.photo;
//     articleElem.appendChild(imgElem);
//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = kitten.name;
//     articleElem.appendChild(h2Elem);
//     let pElem = document.createElement('p');
//     pElem.textContent = `age: ${kitten.age}`;
//     articleElem.appendChild(pElem);
//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);
//     for (let i = 0; i < kitten.interests.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = kitten.interests[i];
//       ulElem.appendChild(liElem)
//     }
//   }
  
//   for (let i = 0; i < kittenArray.length; i++) {
//     renderKitten(kittenArray[i]);