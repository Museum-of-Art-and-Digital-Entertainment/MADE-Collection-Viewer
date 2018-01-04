import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

class Login extends Component {
  state = {
    name: "",
    email: ""
  };

  handleButtonClick = event => {
    // When the login button is clicked, prevent its default behavior
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Container fluid={true}>
          <Row >
            <Col md="12">
              <form>
                <Container>
                  <Row>
                    <Col md="12">
                      <a href="localhost:3001/api/admin/auth/google" class="btn btn-danger"><span class="fa fa-google-plus"></span> Google</a>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
