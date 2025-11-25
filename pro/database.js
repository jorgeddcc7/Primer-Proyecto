const sqlite3 = require('sqlite3').verbose();
const DB_FILE = process.env.DB_FILE || './database.db';

const db = new sqlite3.Database(DB_FILE, (err) => {
  if (err) {
    console.error('Error abriendo BD:', err);
  } else {
    console.log('Conectado a SQLite:', DB_FILE);
  }
});

module.exports = db;

