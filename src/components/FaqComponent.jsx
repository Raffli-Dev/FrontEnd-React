import { Container, Row, Col, Accordion } from "react-bootstrap";
import { faq } from "../data/index";
const FaqComponent = () => {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw-bold pb-5 mt-3">
              Pertanyaan Para Student Class
            </h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-3 pt-5">
          {faq.map((data) => (
          <Col key={data.id}>
            <Accordion className="shadow-sm">
              <Accordion.Item eventKey="0">
                <Accordion.Header>{data.title}</Accordion.Header>
                <Accordion.Body>
                  {data.desc}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FaqComponent;
