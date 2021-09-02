// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//   -- For Loop --

// Standard
for (let i = 0; i < companies.length; i++){
    console.log(companies[i])
}

// -- ForEach --

// Arrow function
// forEach((element) => { ... } )

// Callback function
// forEach(callbackFn)
// forEach(callbackFn, thisArg)

// Inline callback function
// forEach(function callbackFn(element) { ... })
// forEach(function callbackFn(element, index, array) { ... }, thisArg)

companies.forEach(function(company){
    console.log(company)
})

// -- Filter --

// Standard ES5

const canDrink = ages.filter(function(age) {
    if(age >= 21)
        return true
    })
console.log(canDrink)

// Arrow function
// filter((element) => { ... } )

const canDrink = ages.filter(age => age >= 21)
console.log(canDrink)

// Callback function
// filter(callbackFn)
// filter(callbackFn, thisArg)

// Inline callback function
// filter(function callbackFn(element) { ... })
// filter(function callbackFn(element, index, array) { ... }, thisArg)

// -- Map --

// Arrow function
// map((element) => { ... } )

const company = companies.map(company =>  company.name)
console.log(company)

// Callback function
// map(callbackFn)
// map(callbackFn, thisArg)

// Inline callback function
// map(function callbackFn(element) { ... })
// map(function callbackFn(element, index, array) { ... }, thisArg)

// -- Sort --

// Functionless
// sort()

// Arrow function
// sort((firstEl, secondEl) => { ... } )

const sortCompanies = companies.sort((a,b) => (a.start < b.start ? -1 : 1))
console.log(sortCompanies)

// Compare function
// sort(compareFn)

// Inline compare function
// sort(function compareFn(firstEl, secondEl) { ... })

const sortCompanies = companies.sort(function(a, b){
    // a is less than b by some ordering criterion
    if (a.start < b.start) {
            return -1;
        }
        //a is greater than b by the ordering criterion
        if (a.start>b.start) {
            return 1;
        }
        // a must be equal to b
        return 0;
});
console.log(sortCompanies)

// -- Reduce --

// Callback function
// reduce(callbackFn)
// reduce(callbackFn, initialValue)

// Inline callback function
// reduce(function callbackFn(previousValue, currentValue) { ... })
// reduce(function callbackFn(previousValue, currentValue, currentIndex, array) { ... }, initialValue)

const ageSum = ages.reduce(function(previousValue, currentValue){
    return previousValue+=currentValue
}, 0)
console.log(ageSum)

// arrow function
// reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue)

const ageSum = ages.reduce((previousValue, currentValue) =>  previousValue+=currentValue,0)
console.log(ageSum)
