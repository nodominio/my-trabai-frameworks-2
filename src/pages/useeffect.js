import { useEffect, useState } from "react"

export default function Usestate() {
    const [numero, setNumero] = useState(0)
    setTimeout(() => {
        setNumero(numero + 1);
    }, 3000)
    useEffect(() => {
        if (numero>0) {
            document.title = `UseEffect ${numero}`
        }
    }, [numero])
    return <>
        <h1 className="text-center">
            Bem vindo a Use Effect
        </h1>
        <h2>{numero === 0 ? <img src={"./loading-gif.gif"} height={"50px"} width={"50px"}/> : numero}</h2>
    </>
}
