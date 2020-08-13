const person = { name: 'jack william', age: 17, job: 'developer', gfName: 'Ema Watson', phone: 01717112211, address: 'new York',};
const { phone, gfName, address, salary } = person;
// const gfName = person.gfName;
// const phone = person.phone;
// console.log(gfName, phone, salary, address);

const friends = ['sakib khan', 'salman khan', 'amir khan', 'arman khan', 'sharukh khan', 'habib khan',];
const [chotoFriend, nextFriend, ...othersFriend] = friends;
console.log(chotoFriend, nextFriend, othersFriend);