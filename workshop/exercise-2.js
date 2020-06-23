// Exercise 2
// ----------

const lateComers = ['Felicia', 'Charles', 'Terry'];
const earlyBirds = ['Ellen', 'Jerry', 'Jasmine'];

const printGuestOrder = (early, late) => {
    let guests = early.concat(late);
    for (let i = 0; i < guests.length; i++) {
        console.log(`${i+1}. ${guests[i]}`);
    }
};

printGuestOrder(earlyBirds, lateComers);
