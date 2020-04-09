// 12. Template Literals
const welcome = 'You have logged in as ' + first + ' ' + last + '.'

const db = 'http://' + host + ':' + port + '/' + database;

//
const welcome = `You have logged in as ${first} ${last}`;

const db = `http://${host}:${port}/${database}`;
