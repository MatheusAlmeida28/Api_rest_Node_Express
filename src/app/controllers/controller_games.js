import repository_games from "../repositories/repository_games.js"


class GamesController{

    async index(req, res) {
        const row = await repository_games.findAll()
        res.json(row)
    }
    
    async show(req, res)  {
        const id = req.params.id
        const row = await repository_games.findById(id)
        res.json(row)
    }
    
    async store(req, res)  {
        const game = req.body
        const row = await repository_games.create(game)
        res.json(row)  
    }
    
    async update(req, res) {
        const id = req.params.id
        const game = req.body 
        const row = await repository_games.update(game, id)
        res.json(row)   
    }
    
    async delete(req, res) {
        const id = req.params.id
        const row = await repository_games.delete(id)
        res.json(row)     
    }
}

export default new GamesController()
