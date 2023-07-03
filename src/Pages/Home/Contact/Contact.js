import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Col, Container, Row } from 'react-bootstrap';
const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_21g9qrt', 'template_i4dlpr9', e.target, "user_3t5CCLF9y88JMlS2wO0Lf")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };
    return (
        <Container id='contact' className='py-5'>
            <Row className='align-items-center g-5 '>
            <Col data-aos="fade-right" lg='7'>
                <div className="heading mb-5">
                    <h1 className='fw-bold'>Contact With Me</h1>
                </div>
                <div className="">
                <form className='' ref={form} onSubmit={sendEmail}>
                    <input placeholder='Your Name ' className='w-100 mb-3 p-2' type="text" name="user_name" />
                    <input placeholder='Your Email ' className='w-100 mb-3 p-2' type="email" name="user_email" />
                    <textarea rows='5' placeholder='Your Message ' className='w-100 mb-3 p-2' name="message" />
                    <input className='btn ' type="submit" value="Send" />
                </form>
                </div>
            </Col>
            <Col data-aos="fade-left" lg='5'>
            <div className='d-flex align-items-center mb-1'>
                            <div className="icon me-3">
                            <i className="fas fa-home fs-3 text-primary"></i>
                            </div>
                            <div className="details">
                            <h5>Chittagong, Bangladesh</h5>
                            <p>Muradpor</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center mb-1'>
                            <div className="icon me-3">
                            <i class="fas fa-phone-alt fs-3 text-primary"></i>
                            </div>
                            <div className="details">
                            <h5>01876625737</h5>
                            <p>24 Hours</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center mb-1'>
                            <div className="icon me-3 ">
                            <i class="far fa-envelope fs-3 text-primary"></i>
                            </div>
                            <div className="details">
                            <h5>Faysalkibria007@gmail.com</h5>
                            <p>Send us your query anytime!</p>
                            </div>
                        </div>
            </Col>
            </Row>
        </Container>

    );
};

export default Contact;