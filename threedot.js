// const ages = [11, 14, 16, 13, 17];
// const ages2 = [15, 16, 12];
// const ages3 = [25, 36, 22, 29];
// const allAges = ages.concat(ages2).concat(ages3);
// const allAges2 = [...ages, 5, ...ages2, ...ages3]
// console.log(allAges2);

// const business = 650;
// const minister = 600;
// const sochib = 500;
// const maximum = Math.max(business, minister, sochib);
// const takaPoisa = [650, 550, 500];
// const maximum = Math.max(...takaPoisa);
// console.log(maximum);

const ages = [12, 15, 17, 20, 25];
const ages2 = [12, 15, 17, 20, 25];
const ages3 = [12, 15, 17, 20, 25];
const allAges = ages.concat(ages2).concat([15555, 5555]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5555, ...ages3];
// console.log(allAges2);


const business = 550;
const minister = 460;
const sochib = 777;
const borolok = [business, minister, sochib];
const takaPoisa = [ 555, 787, 4789, 4559,];
const maximum = Math.max(...borolok);
console.log(maximum);