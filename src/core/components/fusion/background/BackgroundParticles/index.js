/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Absolute } from 'particles'
import Particles from 'react-particles-js';
/* ------------------------- Internal Dependencies -------------------------- */

/* --------------------------- Styled Components ---------------------------- */
/* ------------------------- Component Properties --------------------------- */
/* ------------------------------- Component -------------------------------- */
const BackgroundParticles = props => {
  return (
    <Absolute top right bottom left>
                  <Particles params={{
                    particles: {
                      "number": {
                      "value": 10,
                      "density": {
                        "enable": true,
                        "value_area": 1000
                      }
                    },
                    "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": "#000000"
                    },
                    "polygon": {
                      "nb_sides": 7
                    }
                  },
                  "size": {
                  "value": 10,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 8,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 300,
                  "color": "#ffffff",
                  "opacity": 0.4,
                  "width": 2
                },
                "move": {
                  "enable": true,
                  "speed": 2,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": true,
                  "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": false,
                    "mode": "repulse"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 800,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 800,
                    "size": 80,
                    "duration": 2,
                    "opacity": 0.8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 400,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true,
                      line_linked: {
                        shadow: {
                          enable: true,
                          color: "#3CA9D1",
                          blur: 7
                        }
                      }
                    }
                  }/>
                </Absolute>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default BackgroundParticles