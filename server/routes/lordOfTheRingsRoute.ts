import express from 'express'
import request from 'superagent'

import 'dotenv/config'

const router = express.Router()

// Not working. Brings null, and when searching with process.env it brings
// lots of variables that has notthing to do with my file
console.log(process.env.LORDOFTHERINGSDB_API_TOKEN)

router.get('/', async (req, res) => {
  try {
    const response = await request.get('https://the-one-api.dev/v2/character')
          .set(
            'Authorization',
            'Bearer SIISyKvHbsE3zJVuawLK'
            // `Bearer ${process.env.LORDOFTHERINGSDB_API_TOKEN}`
          ) 

    res.json(response.body.docs)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send((err as Error).message)
    } else {
      res.status(500).send('Something went wrong')
    }
  }
})

export default router
