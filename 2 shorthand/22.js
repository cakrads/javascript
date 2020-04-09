// 22. Object Property Assignment
let fname = { firstName: 'Black' };
let lname = { lastName: 'Panther' }


// long
let full_names = Object.assign(fname, lname);

// short
let full_names = { ...fname, ...lname };
