import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Clarifai from 'clarifai';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';

import './App.css';
import 'tachyons';

{/************** 
 * Start Particle Settings
 * 
*/}

const particlesOptions = {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": false,
        "value_area": 1042.217839562589
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 1,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.8578254525630539,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#4d4d4d",
      "opacity": 0.5,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
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
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
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
  "retina_detect": true
}

{/*********************
 * End particle Settings
*/}

{/***
Clarifai API key
*/}

const app = new Clarifai.App({
  apiKey: 'dcefb1c9b29e40de9ac2e1a6d85d6548',
});

class App extends Component {
  constructor() {
    super()

    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  }

  calculateFaceLocation = (data) => {
    //Get this value based on input on Clarifai API
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    // Bounding box is percentage of image
    const width = Number(image.width);
    const height = Number(image.height);
    // console.log(width,height);
    // We want to return object to figure out dot around the face
    return {
      leftCol: width + (clarifaiFace.left_col * 100),
      topRow: clarifaiFace.top_row,
      rightCol: width + (clarifaiFace.right_col * 100),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    };
    // Fill up that value above to box{object}

  }

  displayFacebox = (box) => {
    this.setState({ box: box });
  };

  onInput = (e) => {
    this.setState({ input: e.target.value });
  }

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    console.log('click');
    app.models.predict(Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => this.displayFacebox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInput={this.onInput}
          onSubmit={this.onSubmit} />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
