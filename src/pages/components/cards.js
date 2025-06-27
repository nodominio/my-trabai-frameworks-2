import { Card, Col } from "react-bootstrap";

export default function Cards(noticia) {
    return <>
        <Col key={noticia.idnoticia}>
            <Card>
                <Card.Header className="text-center fw-bold bg-success-subtle"> {noticia.titulonoticia}</Card.Header>
                <Card.Body>
                    <Card.Title className="text-capitalize fst-italic">{noticia.tiponoticia}</Card.Title>
                    <Card.Text>{noticia.conteudonoticia}</Card.Text>
                </Card.Body>
                <Card.Footer>{noticia.datahoracadastro}</Card.Footer>
            </Card>
        </Col>
    </>
}
// idnoticia*
// titulonoticia*
// conteudonoticia*
// tiponoticia
// datahoracadastro