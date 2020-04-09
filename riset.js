let a =
  "#developer #developers #webdeveloper #javascriptdeveloper #fullstackdeveloper #softwaredveloper #frontenddeveloper #webdevelopers #code #coder #learntocode #worldcode #codeuniverse #coding #webdev #websitedevelopment #webdevelopment #softwareengineer #softwareengineering #softwaredevelopment #newsletters #programming #programmings #webprogramming #newsletter #frontend #frontwebdeveloper #frontenddevelopment #frontendevelopers";
let tmp1 = a.split(" ");
// tmp1.forEach(x => console.log(x));

let b =
  "#ikausik #codinganddecoding #Webdevelopmentcompany #webdevlopmentagency #codingislife #webprogramming #webapplication #WordPresswebsite #mobiledevelopment #cplusplus #thedevlife #codelife #androiddeveloper #instacode #pythoncode #vuejs #DAILYUI #learntocode #websitedevelopment #coders #frontenddeveloper #softwareengineer #buildtheweb #webdevelopers #developer #WordPress #code";
let tmp2 = b.split(" ");
tmp2.forEach(x => console.log(x));

let allHastag = [...tmp1, ...tmp2];
let findDuplicates = arr =>
  arr.filter((item, index) => arr.indexOf(item) != index);
let unik = [...new Set(findDuplicates(allHastag))]; // All duplicates
// unik.forEach(x => console.log(x));
