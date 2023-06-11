import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'user',
  password: 'password',
  database: 'db_games',
})

connection.connect()

/**
 * Executa um código sql com ou sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {string=id | [game, id]} valores a serem passados para o sql
 * @param {string} Rejectmensage mensagem a ser exibida
 * @returns objeto da Promisse
 */

export const consult = (sql, values='',Rejectmensage) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (erro, result) => {
        if(erro) return reject(Rejectmensage)
        const rows = JSON.parse(JSON.stringify(result))
        return resolve(rows)    
    })
  })
}
