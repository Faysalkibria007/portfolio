import React from "react";
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MouseContext } from "../../../Context/mouse-context";

import image from "../../../Images/faysal.jpg";
import "./Banner.css";
const Banner = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  return (
    <div>
      <Container>
        <Row className="align-items-center py-5 g-5">
          <Col lg="7">
            <div className="details heading w-75">
              <h3>Full Stack Developer</h3>
              <h1 className="fw-bold">Kazi Mohammad Faysal Kibria</h1>

              <a
                href="https://drive.google.com/file/d/1cDERfJEqUGQNWTR3wWJ2eJGuEU8GI3vP/view?usp=drive_link"
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
                className="btn fs-5 "
              >
                Download Resume
              </a>
              <div className="mt-3">
                <a
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
                  target="blank"
                  href="https://www.linkedin.com/in/faysal-kibria-rephat-324359280/"
                  className="social"
                >
                  <i
                    style={{ color: "#007bb6" }}
                    className=" me-2 fs-1 fab fa-linkedin"
                  ></i>
                </a>
                <a
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
                  target="blank"
                  href="https://twitter.com/Mdravi88"
                  className="social"
                >
                  <i
                    style={{ color: "#00aced" }}
                    className=" me-2 fs-1 fab fa-twitter-square"
                  ></i>
                </a>
                <a
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
                  target="blank"
                  href="https://github.com/Faysalkibria007"
                  className="social"
                >
                  <i
                    style={{ color: "#f0f6fc" }}
                    className=" me-2 fs-1 fab fa-github-square"
                  ></i>
                </a>
                <a
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
                  target="blank"
                  href="https://www.facebook.com/thurkekhan.repat"
                  className="social"
                >
                  <i
                    style={{ color: "#0f90f3" }}
                    className=" me-2 fs-1 fab fa-facebook-square"
                  ></i>
                </a>
              </div>
            </div>
          </Col>
          <Col lg="5">
            <div className="image">
              {/* style={{filter: 'grayscale(1)'}} */}
              <img className="img-fluid" src={image} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
