import request from 'superagent'
import { LOTRCharacters } from '../../models/lotrcharacters.ts'


export async function getCharacters(): Promise<LOTRCharacters[]> {
  // const response = await request
  // .get('https://the-one-api.dev/v2/character')
  // .set(
  //       'Authorization',
  //       `Bearer SIISyKvHbsE3zJVuawLK`
  //) 
  // return response.body.docs
  const response = await request.get('/api/v1/lordOfTheRings')
  return response.body
}