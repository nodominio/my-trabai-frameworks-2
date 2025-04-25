import { useState } from "react"

export default function UseState() {
    const [state, setState] = useState(0)

    return (
        <>
            <h1>Bem-vindo a Use State</h1>
            Clicado {state} vezes
            <button className="btn btn-dark" onClick={() => {setState(state + 1)}}>Clique aqui</button>
        </>
    )
}