let emoji = "🙂";

console.log("Old way to show variable emoji" + emoji);
//=> Old way to show variable emoji 🙂

console.log(`New way to show variable emoji ${emoji}`);
//=> New way to show variable emoji 🙂

// You need \ if using ' or " in String
let oldWay = 'You can\'t use singgle quote easyly';
let oldWayToo = "World said \"Don't use Plastic anymore\" ";

let newWay = `It will easly use ' or "`;