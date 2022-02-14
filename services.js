const mysql = require('mysql');

const config = {
  host: 'localhost',
  user: 'root',
  password: 'Admin@123#',
  database: 'election_data',
};

// https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
const executeQuery = (query, res) => {
  try {
    var connection = mysql.createConnection(config);
    connection.connect();
    connection.query(query, function (error, results, fields) {
      if (error) {
        console.log('error', error);
        res.statusCode = 400;
        res.send(error);
        connection.end();
      }
      res.statusCode = 200;
      res.send(JSON.stringify(results));
      console.log('results', results);
    });
    connection.end();
  } catch (error) {
    res.statusCode = 400;
    res.send(error);
    console.log('Error: ', error);
  }
};

exports.getData = function (req, res) {
  const query = `select * from alandur_data_2017`;
  executeQuery(query, res);
};

exports.insertData = function (req, res) {
  console.log('req', req);
  const { body } = req;
  const query = `INSERT INTO alandur_data_2017 (name, address) VALUES ('${body.name}', '${body.address}')`;
  executeQuery(query, res);
};

exports.updateData = function (req, res) {
  console.log('req', req);
  const { body } = req;
  const query = `UPDATE alandur_data_2017 SET address = '${body.address}' WHERE address = 'Ackland'`;
  executeQuery(query, res);
};

exports.deleteData = function (req, res) {
  console.log('req', req);
  const { body } = req;
  const query = `DELETE FROM alandur_data_2017 WHERE address = '${body.address}'`;
  executeQuery(query, res);
};
