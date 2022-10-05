import mysql from "promise-mysql";
import config from "./../config";

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
    //port: config.port,
    //ssl:{ca:fs.readFileSync("{ca-cert DigiCertGlobalRootCA.crt (1).pem}")}
});

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
};