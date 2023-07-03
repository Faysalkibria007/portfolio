import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {makeStyles} from '@mui/styles'
import { useTheme } from '@mui/system';
import { Col, Row } from 'react-bootstrap';
import ProjectCarousel from '../../ProjectCarousel/ProjectCarousel'
import { useContext } from 'react';
import { MouseContext } from '../../../Context/mouse-context';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  p: 4,
  borderRadius:'20px',
  backgroundColor:"#2f2f36",
  color:'white',
  overflow:'hidden'
};



const CartModal = ({handleClose, open, singleProjects}) => {
    const theme = useTheme()
    const useStyle = makeStyles({
        modalBox  : {
            width: '70%',
            [theme.breakpoints.up('lg')] : {
                width: '1000px',
                height:'65%',
               overflowY:'scroll!important'
            },
            [theme.breakpoints.down('lg')] : {
                width: '75%',
                height:'80%',
               overflowY:'scroll!important'
            },
            [theme.breakpoints.down('md')] : {
                width: '75%',
                height:'60%',
               overflowY:'scroll!important'
            },
        }
    })

    const {modalBox} = useStyle()

    const { cursorType, cursorChangeHandler } = useContext(MouseContext);

    return (
      <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={modalBox}>
        <Row>
                <Col className='align-items-center my-2' data-aos="fade-right" lg='5'>
                    <ProjectCarousel projectDetails={singleProjects}></ProjectCarousel>
                </Col>
                <Col data-aos="fade-left" >
                    <h1 className='title' style={{color : '#00bcd4'}}>{singleProjects?.name}</h1>
                    <hr className='w-75' style={{height:'5px'}} />
                    <p>{singleProjects?.desc}</p>
                    {
                        singleProjects?.technologies?.map(t => <button style={{background : '#007BEC', fontSize:'14px'}} className='m-1 btn fw-bold '>{t}</button>)
                    }
                    <div className="details-button mt-3">
                        <a onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")} target='blank' href={singleProjects?.live} className="m-1 fs-5 btn"><i className="me-2 fs-4 fab fa-firefox-browser"></i>Live Site</a>
                        <a target='blank' onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")} href={singleProjects?.client_site} className="m-1 fs-5 btn fw-semi-bold"><i className=" me-2 fs-4 fab fa-github"></i>Client Code</a>
                        {
                            singleProjects?.server_site ? <a  target='blank' href ={singleProjects?.server_site}className="m-1 fs-5 btn fw-semi-bold"><i className=" me-2 fs-4 fab fa-github"></i>Server Code</a> : ''
                        }
                    </div>
                </Col>
            </Row>
        </Box>
      </Modal>
        </div>
    );
};

export default CartModal;