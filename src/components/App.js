import React from 'react';
import Header from './Header';
import SortBar from './SortBar';
import DisplayPane from './DisplayPane';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  const HeaderStyle = {
    borderBottom: "1px solid black",
    textAlign: "center"
  };

  const SortBarStyle = {
    borderRight: "1px solid black"
  };

  return (
    <React.Fragment>
      <Container>
        <Row style={HeaderStyle}>
          <Header />
        </Row>
        <Row>
          <Col className="col-2" style={SortBarStyle}>
            <SortBar />
          </Col>
          <Col className="col-10">
            <DisplayPane />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
