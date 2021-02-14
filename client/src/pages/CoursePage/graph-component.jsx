import React, { Component } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { Divider } from 'antd';

import './graph-styles.scss';

const Graph = ({ name, progress }) => {
  return (
    <div className="graph">
      <Container>
        <Row>
          <Col>
            <Divider orientation="left">{name}</Divider>
          </Col>
        </Row>
        <Row>
          <Col className="progbarrow">
            <ProgressBar className="progbar" variant="success" now={progress} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Graph;
