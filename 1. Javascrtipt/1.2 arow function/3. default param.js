// use params = false. ex: deleteFile = false
const readFile = (fileName, deleteFile = false) => {
  // 1. do read file
  console.log("Do read File");

  // 2. delete optional
  if (deleteFile) console.log("And Delete File");
};

readFile("My File.txt");
//=> Do read File

readFile("My File.txt", true);
//=> Do read File.
//=> And Delete File
