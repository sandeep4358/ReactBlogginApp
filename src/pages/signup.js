import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "./Base";

const Signup = () => {
    return (
        <Base>
            <Container>

                <Row className="mt-4">
                    <Col sm={{ size: 6, offset: 3 }}>

                        <Card>

                            <CardHeader>
                                <h3>Signup</h3>
                            </CardHeader>

                                <CardBody>
                                    <Form>
                                        {/* Name Field */}

                                        <FormGroup>
                                            <Label for="name">Enter Name</Label>
                                            <Input type="text" placeholder="Enter Here" id="name"></Input>
                                        </FormGroup>

                                        {/* Email */}
                                        <FormGroup>
                                            <Label for="email">Enter Email</Label>
                                            <Input type="text" placeholder="Enter Here" id="email"></Input>
                                        </FormGroup>


                                        {/* Password */}
                                        <FormGroup>
                                            <Label for="password">Enter Password</Label>
                                            <Input type="password" placeholder="Enter Here" id="password"></Input>
                                        </FormGroup>

                                        {/* About */}
                                        <FormGroup>
                                            <Label for="about_user">About</Label>
                                            <Input type="textarea" placeholder="Enter Here" id="about_user" style={{ height: " 250px" }} ></Input>
                                        </FormGroup>

                                        <Container>
                                            <Button color="dark">Register</Button>
                                            <Button color="secondary" className="ms-2" type="reset">Reset</Button>
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

export default Signup;