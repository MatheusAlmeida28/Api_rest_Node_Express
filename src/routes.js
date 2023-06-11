import { Router } from 'express'
import controller_games from './app/controllers/controller_games.js'

const router  = Router()

router.get('/games', controller_games.index)
router.get('/games/:id', controller_games.show)
router.post('/games_add', controller_games.store)
router.put('/games/:id', controller_games.update) 
router.delete('/games/:id', controller_games.delete)

export default router