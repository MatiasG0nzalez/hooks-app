import { useEffect } from 'react'

export const Message = () => {

useEffect(() => {
  console.log("Componente montado")

  return () => {
    console.log("Componente desmontadp")
  }
}, [])


  return (
    <div>
        <h1>
            Hola Mati!
        </h1>
    </div>
  )
}
