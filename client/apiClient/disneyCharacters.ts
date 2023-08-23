import request from 'superagent'
import { Character } from '../../models/character.ts'

export async function getAllCharacters(): Promise<Character[]> {
  const response = await request.get('https://api.disneyapi.dev/character')
  return response.body.data
}
