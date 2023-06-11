import {consult} from "../database/connection.js"


class GamesRepository{

    create(game) {
        const sql = 'INSERT INTO games SET ?;'
        return consult(sql, game, 'Não foi possível cadastrar')
    }
    
    findAll() {
        const sql = 'SELECT * FROM games;'
        return consult(sql, 'Não foi possível encontrar')        
    }
    
    findById(id) {
        const sql = 'SELECT * FROM games WHERE id=?;'
        return consult(sql, id, 'Não foi possível encontrar')
    }
    
    update(game, id) {
        const sql = 'UPDATE games SET ? WHERE id=?;'
        return consult(sql, [game, id], 'Não foi possível atualizar')
    }
    
   delete(id) {
        const sql = 'DELETE FROM games WHERE id=?;'
        return consult(sql, id, 'Não foi possível apagar')
    }
}

export default new GamesRepository
