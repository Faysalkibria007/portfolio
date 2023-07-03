import React from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { MouseContext } from '../../../Context/mouse-context';
import about from '../../../Images/about.png'
const About = () => {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    return (
        <Container id='about' className='py-5'>
            <Row className='align-items-center' >
                <Col data-aos="fade-up-right" 
        lg='6'>
                    <div>
                        <img src={about} className='img-fluid
                        ' alt="" />
                    </div>
                </Col>
                <Col  lg='6'>
                    <div >
                    <div className="heading mb-3">
                        <h3>About Me</h3>
                        <h1 className='fw-bolder'>Front End  Developer & Web Designer</h1>
                    </div>
                    <div data-aos="fade-up-left" data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out-cubic" className="details">
                        <p>I'm a front-end web developer. Having the skills and training made me confident enough to call myself a Junior front-end web developer/Junior web developer. Ready to take on challenges and responsibility to grow as a full-fledged web developer. Recently, I graduated from the Complete Web Development with Jhankar Mahbub by Programming Hero. I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much more!</p>
                        <a onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")} className='btn  fs-5' href="https://www.linkedin.com/in/faysal-kibria-rephat-324359280/">Contact Me</a>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;