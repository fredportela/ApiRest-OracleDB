var oracledb = require('oracledb');
var dbconfig = require('../dbconfig');

var connection;
oracledb.getConnection(dbconfig.config).then((conn) => {
    console.log("Success!");
    connection = conn;
}).catch((e) => {
    console.log("Error: " +  e.message);
});


exports.listAtos = function(req, res) {
     connection
     .execute("SELECT * FROM admlegis.ato WHERE sgl_orgao like '%FNDE%' AND IND_INTEIRO_TEOR = 'N'",
     function(err, result)
     {
        if (err) { console.error(err); return; }
        res.json(result.rows);
     });
};

