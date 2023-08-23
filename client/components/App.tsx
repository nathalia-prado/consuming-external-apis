import { useState, useEffect } from 'react'

import { getWelcome } from '../apiClient.ts'
import DisneyCharacter from './DisneyCharacters.tsx'
import LordOfTheRingsCharacters from './LordOfTheRings.tsx'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')

  useEffect(() => {
    getWelcome()
      .then((res) => {
        setWelcomeStatement(res.statement)
      })
      .catch((err) => {
        console.error(err.message)
      })
  })

  return (
    <>
      {/* <h1>{welcomeStatement}</h1> */}
      {/* <DisneyCharacter /> */}
      <LordOfTheRingsCharacters />
    </>
  )
}

export default App
