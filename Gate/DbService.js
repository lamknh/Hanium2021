var mysql = require("mysql");
let instance = null;
require('dotenv').config();

var db = mysql.createConnection({
    // host: config.mysql.host,
    // user: config.mysql.user,
    // password: config.mysql.password,
    // database: config.mysql.database
    host    : process.env.DB_HOST,
    user    : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB
});

db.connect(function(err){
    if(err){ 
        throw err; 
    }else{
        console.log("db " + db.state);
    }
});

class DbService {
    static getDbServiceInstance(){
        return instance ? instance : new DbService();
    }

    async getData(){
        try{
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM ENTRY_RECORD;"; // where id = ?;

                db.query(query, (err, results) => {
                    if(err) reject (new Error(err.message));
                    resolve(results);
                })
            }); // [id]
            //console.log(response);
            return response;
        } catch (err){
            throw err;
        }
    }
}

module.exports = DbService;