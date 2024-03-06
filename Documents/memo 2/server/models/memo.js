const mysql = require("mysql");

// MySQL 연결 설정
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0000",
  database: "memo",
});

// 메모 테이블 생성 쿼리
const createMemoTableQuery = `
  CREATE TABLE memo (
    memoID INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(255) DEFAULT 'false',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )
`;

// Memo 모델 정의
const Memo = {
  findAll: function () {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM memo";
      connection.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  create: function (payload) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO memo SET ?";
      connection.query(query, payload, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  },

  findOneByMemoId: function (memoID) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM memo WHERE memoID = ?";
      connection.query(query, [memoID], (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result[0]);
        }
      });
    });
  },

  updateByMemoID: function (memoID, payload) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE memo SET ? WHERE memoID = ?";
      connection.query(query, [payload, memoID], (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  },

  deleteByMemoID: function (memoID) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM memo WHERE memoID = ?";
      connection.query(query, [memoID], (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  },
};

module.exports = Memo;
