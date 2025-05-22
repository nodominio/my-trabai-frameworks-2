import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'

export default function Page() {
    const router = useRouter()
    return <>
        <Container className='text-center'>
            <p>Post: {router.query.id}</p>
        </Container>
    </>
}