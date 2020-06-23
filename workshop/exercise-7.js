// Exercise 7
// ----------

let foodPairings = {
  burgers: 'beer',
  fish: 'white wine',
  beef: 'red wine',
  strawberries: 'cream',
};

// Declare recommendations array
let recommendations = [];

// createRecommendations function
const createRecommendations = (obj) => {

  // Create array of keys (foods)
  let foods = Object.keys(obj);
  // Create array of values (pairings)
  let liquids = Object.values(obj);

  // Create array of sentences
  for (let i = 0; i < foods.length; i++) {
    recommendations[i] = `- With ${foods[i]}, it is best to have ${liquids[i]}.`;
  }
};

// printRecommendations function
const printRecommendations = () => {
  for (let i = 0; i < recommendations.length; i++) {
    console.log(recommendations[i]);
  }
};

// function call (done)
printRecommendations(createRecommendations(foodPairings));
