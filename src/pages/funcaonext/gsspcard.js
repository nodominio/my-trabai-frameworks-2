import { Card, Container, Row, Col } from "react-bootstrap"
import { noticias } from "../api/noticias/noticias"

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { repo } }
}
export default function Gsspcard({ repo }) {
    return (<>
        <Container className="text-center">
            <h1>getServerSidePropsCard Example</h1>
            <p>{repo.stargazers_count}</p>
            <p>{repo.name}</p>
            <p>{repo.owner.login}</p>
            <p>{repo.topics[1]}</p>
        </Container>
        <Container>
            <Row xs={1} md={3}>
                {Array.isArray(noticias) ? noticias.map(noticia => (
                    <Col key={noticia.idnoticia}>
                        <Card>
                            <Card.Header className="text-center ">{noticia.titulonoticia}</Card.Header>
                            <Card.Body>
                                <Card.Title>{noticia.tiponoticia}</Card.Title>
                                <Card.Text>
                                    {noticia.conteudonoticia}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">{noticia.datahoracadastro}</Card.Footer>
                        </Card>
                    </Col>
                )) : "Rebola lentinho"}
            </Row>
        </Container>
    </>)
}