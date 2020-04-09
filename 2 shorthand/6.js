// 6. Short - circuit Evaluation
// Longhand:
let dbHost;
if (process.env.DB_HOST) {
    dbHost = process.env.DB_HOST;
} else {
    dbHost = 'localhost';
}
// Shorthand:
const dbHost = process.env.DB_HOST || 'localhost';

