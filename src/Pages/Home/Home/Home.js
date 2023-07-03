import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import MyProject from '../MyProject/MyProject';
import Skills from '../Skills/Skills';
import Particles from "react-tsparticles";

const Home = () => {
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    return (
        <div>
            <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 100,
              duration: 2,
              opacity: 0.8,
              size: 20,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 50,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "star",
          },
          size: {
            random: true,
            value: 3,
          },
        },
        detectRetina: true,
      }}
    />
            <Banner></Banner>
            <About></About>
            <Skills/>
            <MyProject></MyProject>
            <Contact></Contact>
        </div>
    );
};

export default Home;