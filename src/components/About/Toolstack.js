import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiVercel,
    SiMacos, SiGoland, SiDocker, SiKubernetes, SiAmazonec2, SiAmazoneks, SiGooglecloud, SiGit, SiAmazonaws,
} from "react-icons/si";
import {DiGoogleCloudPlatform} from "react-icons/di";

function Toolstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiMacos/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGoland/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSlack/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGit/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDocker/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiKubernetes/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAmazonaws/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGoogleCloudPlatform/>
            </Col>

        </Row>
    );
}

export default Toolstack;
