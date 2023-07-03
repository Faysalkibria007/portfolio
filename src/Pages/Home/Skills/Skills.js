import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Skills.css'
import css3 from '../../../Images/skills/CSS3.png'
import html5 from '../../../Images/skills/html5.png'
import bootstrap from '../../../Images/skills/bootstrap.png'
import materialui from '../../../Images/skills/material_ui.png'
import mongodb from '../../../Images/skills/mongodb.png'
import tailwind from '../../../Images/skills/tailwind.png'
import node from '../../../Images/skills/node.png'
import javascript from '../../../Images/skills/javascript.png'
import react from '../../../Images/skills/react.png'
import firebase from '../../../Images/skills/firabase.png'
const Skills = () => {
    return (
        <div className='py-5'>
            <Container>
            <div className="heading mb-5">
                <h1 className='fw-bold'>Skills</h1>
            </div>
                <div className='skills'>
                    <div data-aos="fade-right" >
                        <img className='icons' alt='' src={html5}/>
                        <h3 className =' mt-4'>HTML</h3>
                    </div>  
                    <div data-aos="fade-right">
                        <img className='icons' alt='' src={css3}/>
                        <h3 className =' mt-4'>CSS</h3>
                    </div>                   
                                     
                    <div data-aos="fade-down">
                        <img className='icons' alt='' src={react}/>
                        <h3 className =' mt-4'>REACT</h3>
                    </div>      
                                 
                    <div data-aos="fade-left">
                        <img className='icons' alt='' src={bootstrap}/>
                        <h3 className ='mt-4'>BOOTSTRAP</h3>
                    </div>                   
                    <div data-aos="fade-left">
                        <img className='icons' alt='' src={tailwind}/>
                        <h3 className =' mt-4'>TAILWIND</h3>
                    </div>                   
                    <div data-aos="fade-right" >
                        <img className='icons' alt='' src={firebase}/>
                        <h3 className =' mt-4'>FIREBASE</h3>
                    </div>                   
                    <div data-aos="fade-right" >
                        <img className='icons' alt='' src={javascript}/>
                        <h3 className =' mt-4'>JAVASCRIPT</h3>
                    </div>                   
                    <div data-aos="fade-up">
                        <img className='icons' alt='' src={materialui}/>
                        <h3 className ='mt-4'>MATERIALUI</h3>
                    </div>                   
                    <div data-aos="fade-left" >
                        <img className='icons' alt='' src={mongodb}/>
                        <h3 className =' mt-4'>MONGODB</h3>
                    </div>                   
                    <div data-aos="fade-left" >
                        <img className='icons' alt='' src={node}/>
                        <h3 className =' mt-4'>NODE</h3>
                    </div>                   
                </div>
            </Container>
        </div>
    );
};

export default Skills;