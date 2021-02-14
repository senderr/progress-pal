import React, { Component } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { Divider } from 'antd';

import './graph-styles.scss';

class Graph extends Component {
  render() {
    return (
      <div className="graph">
        <Container>
          <Row>
            <Col>
              <Divider orientation="left">Friend's Name Here</Divider>
            </Col>
          </Row>
          <Row>
            <Col className="progbarrow">
              <ProgressBar className="progbar" variant="success" now={40} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Graph;
