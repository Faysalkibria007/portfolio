import React from 'react';
import { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MouseContext } from '../../../Context/mouse-context';

const Card = ({projects, setModalShow}) => {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);


    return (
        <div>
            <Row className=''>
                {
                    projects.map(project => <div id='card' className='p-3 my-2' data-aos="fade-right">
                    <Row className='align-items-center'>
                    <Col lg='8'>
                    <div class="postcard__text">
                    <h1 class="postcard__title blue">{project.name}</h1>
                    <p>{project.about}</p>
                    <a onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")} target='blank' href={project.live} className="m-1 fs-6 btn fw-semi-bold me-3"> <i className="me-2 fs-5 fab fa-firefox-browser"></i>Live Site</a>
                              <Link to={`/project/${project.id}`} onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")} className="m-1 fs-6 btn fw-semi-bold  "> <i className="me-2 fs-5 fas fa-info-circle"></i>Details</Link>
                              {/* <button onClick={() => setModalShow(true)}>Hrllo</button> */}
                    </div>
                    </Col>
                    <Col lg='4'>
                    <a class="postcard__img_link" href="#">
                    <div  className='project p-3 ' style={{  borderRadius:'10px', overflow: 'hidden'}}>
                    <img className='img-fluid project-image' src={project.img} alt="" /> 
                    </div>
                    </a>
                    </Col>
                    </Row>
                    </div>)
                }
            </Row>
        </div>
    );
};

export default Card;