import React, { Component } from 'react';
import Typist from 'react-typist'
import styled from 'styled-components'

const Star = styled.span`
  color: red;
  font-weight: bold;
`

const Button = styled.button`
  border-radius: 10px;
  height: 50px;
  padding: 0 50px;
  background-color: white;
  margin-top: 100px;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
  }

  render() {
    const { show } = this.state;
      return (
        <div>
          { show ?
            <Typist>
              <Star>*</Star> ABC (Always Be Coding)
               <br />
               <Typist.Delay ms={3000} />
               <Star>*</Star> Learn from your <Typist.Delay ms={500} />misktakes
               <Typist.Backspace count={6} delay={2000} />
               <Typist.Delay ms={1000} />
               takes
               <br />
               <Typist.Delay ms={6000} />
               <Star>*</Star> Be a forever student
               <br />
               <Typist.Delay ms={6000} />
               <Star>*</Star> Come back often
               <br />
               <Typist.Delay ms={6000} />
               <Star>*</Star> Find a mentor
               <br />
               <Typist.Delay ms={6000} />
               <Star>*</Star> Get involved in the community
               <br />
               <Typist.Delay ms={6000} />
               <Star>*</Star> Teach / Mentor
               <br />
               <Typist.Delay ms={6000} />
               <Star>*</Star> Stay excited
               <br />
               <Typist.Delay ms={6000} />
               <Star>*</Star> Enjoy the ride
               <br />
               <span> </span>
            </Typist>
            :
            <Button onClick={() => this.setState({ show: true })}>Make A List</Button>
          }
        </div>
      );
  }
}

export default App;
