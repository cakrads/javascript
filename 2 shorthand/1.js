// 1. The Ternary Operator

// "🙂", "😀", "😨", "😑"

// longhand
const emoji = "🙂";
let isHappy;

if (emoji === "🙂") {
    isHappy = "Yes";
} else {
    isHappy = "No";
}

// shorthand
const isHappy = emoji === "🙂" ? "Yes" : "No";

// consep conditional shorthand
// condition ? true : false;
// condition ? true : condition ? true : false;
// condition ? condition ? true : false : false;
// condition ?
//     condition ?
//         condition ? true
//             : false :
//         false
//     : false;