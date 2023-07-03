import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { MouseContext } from '../../Context/mouse-context';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
import NavBar from '../Shared/NavBar/NavBar';

const Project = () => {
    const {id} = useParams()
    const [project,setProject]= useState([])
    useEffect(() => {
        fetch('/project.json')
        .then(res => res.json())
        .then(data => setProject(data))
    },[])
    const projectDetails = project.find(p => p.id === id)
    console.log(project);

    const { cursorType, cursorChangeHandler } = useContext(MouseContext);


    return (
        <>
        <Container className='py-5' style={{height:'90vh'}}>
            <div className="heading mb-5">
                <h1>Project Details</h1>
            </div>
            <Row>
                <Col className='mb-5' data-aos="fade-right" lg='5'>
                    <ProjectCarousel projectDetails={projectDetails}></ProjectCarousel>
                </Col>
                <Col data-aos="fade-left" lg='6'>
                    <h1 className='title' style={{color : '#00bcd4'}}>{projectDetails?.name}</h1>
                    <hr className='w-75' style={{height:'5px'}} />
                    <p>{projectDetails?.desc}</p>
                    {
                        projectDetails?.technologies?.map(t => <button style={{background : '#007BEC', fontSize:'14px'}} className='m-1 btn fw-bold '>{t}</button>)
                    }
                    <div className="details-button mt-3">
                        <a onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")} target='blank' href={projectDetails?.live} className="m-1 fs-5 btn"><i className="me-2 fs-4 fab fa-firefox-browser"></i>Live Site</a>
                        <a onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")} target='blank' href={projectDetails?.client_site} className="m-1 fs-5 btn fw-semi-bold"><i className=" me-2 fs-4 fab fa-github"></i>Client Code</a>
                        {
                            projectDetails?.server_site ? <a  target='blank' href ={projectDetails?.server_site}className="m-1 fs-5 btn fw-semi-bold"><i className=" me-2 fs-4 fab fa-github"></i>Server Code</a> : ''
                        }
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Project;