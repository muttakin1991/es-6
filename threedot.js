const ages = [11, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];
const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages, 5, ...ages2, ...ages3]
// console.log(allAges2);

const business = 650;
const minister = 600;
const sochib = 500;
// const maximum = Math.max(business, minister, sochib);
const takaPoisa = [650, 550, 500];
const maximum = Math.max(...takaPoisa);
console.log(maximum);