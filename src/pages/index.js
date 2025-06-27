import { Card, Col, Container, Row } from "react-bootstrap";

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:3000/api/noticias/apinoticias')
  const repo = await res.json()
  // Pass data to the page via props
  return { props: { x: repo } }
}

export default function Home({ x }) {
  console.log(x);
  

  return (
    <Container>
      <Row xs={1} md={3}>
        {Array.isArray(x) ? x.map(noticia => (
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
  )
}