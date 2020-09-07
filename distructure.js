const person = { name: 'jack willam', age : 17, job: "facebooker", gfName: "ema watson", address : "Dhanmondi", phone : 01711338153, friend: ['tom hankin', 'muttakin', 'shawon'] };

const {phone, gfName, salary, address} = person;

// console.log(phone, gfName, salary, address);

const friends = ["shakin Khan", "arman Khan", "amir kan", "salman khan","sharukh khan"];
const [chotoFrnd, nextFrnd,...restFrnds] = friends;
// console.log(chotoFrnd, nextFrnd);
// console.log(restFrnds);


const complexObject = {
    name: 'abe',
    info: {
        address: 'kolabangan',
        leader: 'tigger',
    }
}
const {leader} = complexObject.info;
console.log(leader);