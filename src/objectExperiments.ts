const hunter = {
  firstName: "Alice",
  lastName: "the Rabbit Hunter",
};

console.log("Value of Object hunter: ", hunter);
// Value of Object hunter:  { firstName: 'Alice', lastName: 'the Rabbit Hunter' }

// create a (shallow!) copy
const niceGirl = {
  ...hunter,
};
niceGirl.lastName = "The nice girl";

// this now works as expected
console.log("Value of Object hunter: ", hunter);
console.log("Value of Object niceGirl: ", niceGirl);
// Value of Object hunter:  { firstName: 'Alice', lastName: 'the Rabbit Hunter' }
// Value of Object niceGirl:  { firstName: 'Alice', lastName: 'The nice girl' }

// now we create an object that has a nested object:
const cast = {
  hunter,
  prey: "The Rabbit",
};

console.log("Value of Object hunter: ", hunter);
console.log("Value of Object cast: ", cast);
// Value of Object hunter:  { firstName: 'Alice', lastName: 'the Rabbit Hunter' }
// Value of Object cast:  {
//   hunter: { firstName: 'Alice', lastName: 'the Rabbit Hunter' },
//   prey: 'The Rabbit'
// }

// let's mutate our hunter
hunter.firstName = "bob";

console.log("Value of Object hunter: ", hunter);
console.log("Value of Object cast: ", cast);
// Value of Object hunter:  { firstName: 'bob', lastName: 'the Rabbit Hunter' }
// Value of Object cast:  {
//   hunter: { firstName: 'bob', lastName: 'the Rabbit Hunter' },
//   prey: 'The Rabbit'
// }
