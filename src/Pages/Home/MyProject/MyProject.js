import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MouseContext } from '../../../Context/mouse-context';
import Card from './Card';
import CardModal from './CardModal';
import './MyProject.css'
// const projects = [
//     {
//         name : "Triangle Bike Shop",
//         img: 'https://i.ibb.co/N6KmQkz/Triangle-Bike-Sh.png',
//         about : "This project is about a bike shop company. where you can purchase any type of bike you want. To ride your favourite bike, visit the site and give your reviews in the review form.",
//         live : 'https://triangle-bike-shop.web.app/', 
//         client_site : 'https://github.com/Fahad98723/bike-shop-client-site',
//         server_site : 'https://github.com/Fahad98723/triangle-travel-server-site'
//     },
//     {
//         name : "Triangle Travel",
//         img: 'https://i.ibb.co/YPsLdDr/Triangle-Travel.png',
//         about : "This project is about a travel guide company. Where you can book any travel destination for your holiday. They have their own traveling team or places where you can also join in with their hiking and travel by booking.",
//         live : 'https://travel-booking-site.web.app/', 
//         client_site : 'https://github.com/Fahad98723/triangle-travel-client-site',
//         server_site : 'https://github.com/Fahad98723/triangle-travel-server-site'
//     },
//     {
//         name : "Triangle Health Care",
//         img: 'https://i.ibb.co/dpTXm88/Triangle-Care-Ho.png',
//         about : "This project is about a medical center. where you can see the details of the doctor and the scene of the medical center. This project is all about doctors and medical centers.",
//         link : 'https://triangle-care-hospital.web.app/',
//         client_site : 'https://github.com/Fahad98723/triangle-care-hospital-client-site'
//     },
//     {
//         name : "Red Onion",
//         img: 'https://i.ibb.co/qdQks8G/React-App.png',
//         about : "This project is about a Hotel . Where you can order theirs food items to enjoy meals, dinner and breakfast. Order booking functions are not complete yet.I am working on it.",
//         link : 'https://hot-onion-restaurant-a367b.web.app/',
//         client_site : 'https://github.com/Fahad98723/triangle-learning-center',
//     },
//     {
//         name : "Triangle Learning Center",
//         img: 'https://i.ibb.co/605sV6K/Triangle-Learnin-1.png',
//         about : "This project based on childrens learning center. You can see details of their teachers and their courses . Courses enroll function are not ready yet. I am working on it",
//         link : 'https://trusting-dubinsky-16e05c.netlify.app/'
//         ,
//         client_site : 'https://github.com/Fahad98723/best-restaurant-site'
//     }
// ]
const MyProject = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [projects, setProjects] = useState([])
    const [singleProjects, setSingleProjects] = useState({})
    useEffect(() => {
        fetch('./project.json')
        .then(res => res.json())
        .then(data => setProjects(data)) 
    },[])

    // <Button variant="primary" onClick={() => setModalShow(true)}>
    //     Launch vertically centered modal
    //   </Button>


    const singleProjectHandle = id => {
        handleOpen()
        const singleProject = projects?.find(p => p?.id === id)
        setSingleProjects(singleProject)
        
    }
  
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);

    return (
        <>
        <Container className='p-5'>
            <div className="heading mb-5">
                <h1 className='fw-bold'>My Best Projects</h1>
            </div>
            
            {/* <Card setModalShow={setModalShow} singleProjectHandle={singleProjectHandle} projects={projects}></Card> */}
            {
                    projects.map(project => <div id='card' className='p-3 my-2' data-aos="fade-right">
                    <Row className='align-items-center'>
                    <Col lg='8'>
                    <div class="postcard__text">
                    <h1 class="postcard__title blue">{project.name}</h1>
                    <p>{project.about}</p>
                    <a onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")} target='blank' href={project.live} className="m-1 fs-6 btn fw-semi-bold me-3"> <i className="me-2 fs-5 fab fa-firefox-browser"></i>Live Site</a>
                              {/* <Link to={`/project/${project.id}`} className="m-1 fs-6 btn fw-semi-bold  "> <i className="me-2 fs-5 fas fa-info-circle"></i>Details</Link> */}
                              <button onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")} onClick={() => singleProjectHandle(project.id)}className="m-1 fs-6 btn fw-semi-bold  "> <i className="me-2 fs-5 fas fa-info-circle"></i>Details</button>
                              
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
        </Container>
        <CardModal open={open}
        handleClose={handleClose} singleProjects={singleProjects} ></CardModal>
        </>
        
    );
};

export default MyProject;

{/* <Row>
                {
                    projects.map(project => 
                        <Col data-aos="fade-left" lg='4' md='6' className='mb-4'  >
                            
                             <div  className='project p-3 ' style={{ boxShadow: '#909090 0px 5px 10px' , borderRadius:'10px', overflow: 'hidden'}}>
                             <img className='img-fluid mb-4 project-image' src={project.img} alt="" /> 
                             <div>
                             <h4 className='title fw-bold'>{project.name}</h4>
                          <p>{project.about}</p>
                          <a target='blank' href={project.live} className="m-1 fs-6 btn fw-semi-bold me-3"> <i className="me-2 fs-5 fab fa-firefox-browser"></i>Live Site</a>
                          <Link to={`/project/${project.id}`} className="m-1 fs-6 btn fw-semi-bold  "> <i className="me-2 fs-5 fas fa-info-circle"></i>Details</Link>
                             </div>
                        </div>
                            
                        </Col>)
                }
            </Row> */}

            {/* <div
                             style={{background : `url(${project.img}), linear-gradient(#3A4256,#3A4256)` , backgroundRepeat: 'no-repeat', backgroundSize : 'contained', backgroundBlendMode: 'overlay',
                             height : '500px', width : '100%'}}>
                                
                             </div> */}