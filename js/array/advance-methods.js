const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

console.log(inventors);

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


// MAP Method
// Used apply a function on every element in array.
// A new array is returned with same length

// Q. Give array of inventors ' first and last name '
    //const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

    const fullNames = inventors.map((inventor) => `${inventor.first} ${inventor.last}`)

    //console.log(fullNames);

// Filter Method
// Used to apply filter methodology on an array
// returns a new array and length mostly less than original array

// Q. Filter the list of inventors for those who were born in the 1500's

    let fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
    //let fifteen = inventors.filter((inventor) => {
      //  return inventor.year >= 1500 && inventor.year < 1600
   // })
    //console.log(fifteen);

// Sort method
// Accepts one optionally campare method
// Sorts values according to the returned value(negative, zero, positive )

// 3. Sort the inventors by birthdate, oldest to youngest
    const ordered = inventors.sort((a,b) => a.year > b.year ? -1 : 1);
    //console.log(ordered);


// Reduce Method
// Used to apply a function to each element in the array to reduce the array to a single value

// Q. How many years did all the inventors live?

    const totalYear = inventors.reduce(
        (total, inventor) => {
            return total + (inventor.passed - inventor.year);
        },
        0
    );

//console.log(totalYear);




