// no parameters
const x = () => ["😀"];

// single parameters
const y = param1 => [param1, param1];

// one or more parameterss
const z = (param1, param2) => [param1, param2];

console.log(x());            //=> [ "😀" ]
console.log(y("😀"));        //=> [ "😀", "😀" ]
console.log(z("😀", "✅")); //=> [ "😀", "✅" ]
