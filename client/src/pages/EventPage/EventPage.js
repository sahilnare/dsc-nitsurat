import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Navbars from "../../components/Navbars/Navbars";
import Footer from "../../components/Footer/Footer";
import Event1 from "../../components/Events/Event1/Event1";

import "./EventPage.css";
class EventPage extends Component {
    render() {
        return (
            <div className="EventPage">
                <Navbars />
                <h1 className="title">DSC NIT SURAT JOURNAL</h1>
                <Container>
                    <Row>
                        <Col lg={4} md={6} sm={6} xs={12}>
                            <Event1 />
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default EventPage;