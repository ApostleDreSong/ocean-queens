import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import lucy from '../assets/portfolio/lucy-adams.jpeg';
import andre from '../assets/portfolio/andre-walker.jpeg';
import daniel from '../assets/portfolio/daniel-windins.jpeg';
import idowu from '../assets/portfolio/idowu-ibrahim.jpeg';


function About() {

    return (
        <div>
            <h3>ABOUT US</h3>
            <p>Ocean Queens Marine Limited is led by a team of seasoned Professionals with decades of combined years of experience in the successful delivery of oil and gas projects in West Africa, the Middle East, Asia, Europe and North America.</p>

            <p>We are wholly committed to the goal of no injury or harm to all people, the protection of the environment, and a systematic approach to QHSE management that complies with the law and is continuously improved.</p>
            <h3>Profile Summary of Our Key Management Personnel</h3>
            <Accordion defaultActiveKey="0" >
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{textAlign: "left"}}>
                        Lucy Adams - Company Secretary
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <div style={{overflow : "hidden", width: "300px", }}>
                                <img width="100%" src={lucy} alt=""/>
                            </div>
                            A lawyer with over 10 years of corporate legislative and regulatory background, 
                            as well as domestic and international experience in corporate governance and administration,
                             personnel management, business development, financial management and broad matters. 
                             She is a well-rounded corporate lawyer with proven skills in the area of business 
                             development and contract administration.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{textAlign: "left"}}>
                        Andre Walker - Manager
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                            <div style={{overflow : "hidden", width: "300px", }}>
                                <img width="100%" src={andre} alt=""/>
                            </div>
                            An Engineer with over thirty years’ experience in the Oil/Gas construction 
                            industry in Europe,U.K, Middle east, far East, Africa and Latin America as a 
                            Protective Coating, Rigging Supervisor/General Foreman and onshore Fabrication 
                            Superintendent. Experience includes dry-docking of offshore marine support vessels 
                            with various gross tonnages to 1,000 tons. He is a well-rounded project manager 
                            with proven skills in the area of Logistics and personnel coordination for large 
                            multi-million dollar projects.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{textAlign: "left"}}>
                        Daniel Windins - Director
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                            <div style={{overflow : "hidden", width: "300px", }}>
                                <img width="100%" src={daniel} alt=""/>
                            </div>
                            Daniel has a background in Geology, Geography and Environmental Science 
                            from Brunel University, U.K and an MBA from United Kingdom. He has worked
                             extensively as compliance and regulatory professional with domestic and 
                             international experience in oil and gas industry. He has also been active
                              in Government and regulatory relations within the oil and gas industry.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card >
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3" style={{textAlign: "left"}}>
                        Idowu Ibrahim - Chief Operating Officer
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>
                            <div style={{overflow : "hidden", width: "300px", }}>
                                <img width="100%" src={idowu} alt=""/>
                            </div>
                            An Engineer with over thirty years’ experience in the Oil/Gas construction 
                            industry in Europe,U.K, Middle east, far East, Africa and Latin America as a
                             Protective Coating, Rigging Supervisor/General Foreman and onshore Fabrication
                              Superintendent. Experience includes dry-docking of offshore marine support 
                              vessels with various gross tonnages to 1,000 tons. He is a well-rounded 
                              project manager with proven skills in the area of Logistics and personnel 
                              coordination for large multi-million dollar projects.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

        </div>
    );
}

export default About;