import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Label, Row } from "reactstrap";
import Base from "./Base";

const Home = () => {
    return (

        <Base>
            <Container>
                <Row className="mt-4">
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Card>
                            <CardHeader> <h3>Sign-In !!</h3> </CardHeader>
                            <CardBody>
                                <Form>
                                    {/* User Id  */}
                                    <FormGroup>
                                        <Label for="UserId"> UserID</Label>
                                        <input type="text" placeholder="EmailId" />
                                    </FormGroup>
                                    {/* User Id  */}
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <input type="password" id="password" />
                                    </FormGroup>
                                    <Container className="text-center">
                                        <Button color="dark">Login</Button>
                                        <Button className="ms-2" color="secondary">Reset</Button>
                                    </Container>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </Base>
    );
}

export default Home;