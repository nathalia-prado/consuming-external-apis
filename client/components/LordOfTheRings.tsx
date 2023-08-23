import { useEffect, useState } from 'react'

import { getCharacters } from '../apiClient/lordOfTheRings.ts'
import { LOTRCharacters as LOTRCharactersType } from '../../models/lotrcharacters.ts'


export default function LordOfTheRingsCharacters() {
    const [characters, setCharacters] = useState<LOTRCharactersType[] | null>(null)

  useEffect(() => {

    async function fetchCharacters() {
        const characterData = await getCharacters()
        console.log(characterData)
        setCharacters(characterData)
    }

    try {
        fetchCharacters()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <h1>Lord Of The Rings Characters</h1>
      <div>
        {characters?.map((character, index) => {
          return (
            <div key={index}>
                <h2>{character.name}</h2>
                <p>Race: {character.race}</p>
                <p>Gender: {character.gender}</p>
                <p>Birth: {character.birth}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}