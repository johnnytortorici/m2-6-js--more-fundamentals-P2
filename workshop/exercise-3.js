// Exercise 3
// ----------

let mostPopularFood = [
  'bean burritos',
  'poke bowl',
  'chicken sliders',
  'pork baby back ribs',
  'chicken burritos',
  'chicken sandwich',
  'cauliflower rice bowl',
  'chicken and waffle sliders',
  'parmesan chicken',
  'buffalo-flavored cauliflower',
];

const orderAlpha = (arr) => {

  // Copy and sort array alphabetically
  const sortedFood = [...arr].sort();

  // Log sorted list with original ranking
  for (let i = 0; i < arr.length; i++) {
    console.log(`${sortedFood[i]} (${arr.indexOf(sortedFood[i]) + 1})`);
  }
};

// Call function and pass array
orderAlpha(mostPopularFood);
