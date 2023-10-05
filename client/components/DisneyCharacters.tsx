import { useEffect, useState } from 'react'

import { getAllCharacters } from '../apiClient/disneyCharacters.ts'
import { Character as CharacterType } from '../../models/character.ts'

export default function DisneyCharacter() {
    const [characters, setCharacters] = useState<CharacterType[] | null>(null)

  useEffect(() => {

    async function fetchCharacters() {
        const characterData = await getAllCharacters()
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
      <h1>Disney Characters </h1>
      <div>
        {characters?.map((character) => {
          return (
            <>
                <h2 key={character.name}><strong>{character.name}</strong></h2>
                <img key={character.name} src={character.imageUrl} alt={character.name}/>
                <br />
                <a href={character.url}>{character.url}</a>
                {character.films.length > 0 && <h3>Films</h3>}
                {character.films.map(film => <p key={film}>{film}</p>)}

                {character.tvShows.length > 0 && <h3>Tv Shows</h3>}                
                {character.tvShows.map(tvShow => <p key={tvShow}>{tvShow}</p>)}
            </>
          )
        })}
      </div>
    </>
  )
}