import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava, DiDocker,
} from "react-icons/di";
import {
    SiRedis,
    SiFirebase,
    SiNextdotjs,
    SiSolidity,
    SiPostgresql, SiKubernetes, SiArangodb, SiDocker, SiMongodb,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <TbBrandGolang/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMongodb/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiArangodb/>
            </Col>
        </Row>
    );
}

export default Techstack;
