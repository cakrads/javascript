// usually we get object like this from server
const getFromServer = () => {
  return {
    status: "OK",
    data: "Thank's not using plastic anymore"
  };
};

// and we usually do like this
const result = getFromServer();
const myData = result.data;
console.log(myData); //=> "Thank's not using plastic anymore"

// actually we can
const { data } = getFromServer();
console.log(data); //=> "Thank's not using plastic anymore"
