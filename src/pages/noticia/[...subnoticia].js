import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'

export default function Page() {
    const router = useRouter()
    const subnoticia = router.query.subnoticia
    return <>
        <Container className='text-center'>
            <p>SubNoticia: </p>
            {Array.isArray(subnoticia)
                ? subnoticia.map((valor, indice) => <h2>Inice Veto: {indice}, Valor Vetor: {valor}</h2>)
                : null}
        </Container>
    </>
}