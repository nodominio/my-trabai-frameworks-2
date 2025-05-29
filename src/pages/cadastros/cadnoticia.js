import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Cadnoticia() {
    return (
        <Container>
            <Row>
                <Col md={{ span:6, offset: 3 }}/>
            </Row>
            <Form>
                <Form.Group className="mb-3" controlId="titulonoticia">
                    <Form.Label>Título Notícia</Form.Label>
                    <Form.Control type="text" placeholder="Informe o Título da Notícia" maxLength={100} className='bg-info-subtle'/>
                    <Form.Text className="text-muted">
                        Aqui você deve informar o título de sua notícia.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Corinthians</Form.Label>
                    <Form.Control as="textarea" rows={3} className='bg-info-subtle'/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="tiponoticia">
                    <Form.Select aria-label="Default select example" className='bg-info-subtle'>
                        <option>Open this select menu</option>
                        <option value="1">Ciência</option>
                        <option value="2">Educação</option>
                        <option value="3">Pesquisa</option>
                        <option value="4">Esportes</option>
                        <option value="5">Cultura</option>
                        <option value="6">Entreterimento</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}