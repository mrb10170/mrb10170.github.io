import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import logo from './images/logo.svg';
import { AnimSpin } from './anim/spin';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: props.color || '#0000ff'
    };

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    this.setState({
      color: "#00ff00"
    });
  }

  render() {
    return (
      <AppContainer >
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Hello world! This is some cool stuff</p>
          <AppLink
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            color={this.state.color}
          >
            Learn React
          </AppLink>
          <button onClick={this.changeColor}>click me!</button>
          <Link to="/second">Also, click me!</Link>
        </AppHeader>
      </AppContainer>
    );
  }
}


const AppContainer = styled.div`
  text-align: center;
`;

const AppLink = styled.a`
  color: ${(props) => props.color || '#61dafb'};
`

const AppLogo = styled.img`
  animation: ${AnimSpin} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export default App;
