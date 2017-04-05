// Import React
import React from "react";
import App from './App';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  rails: require("../assets/rails.png"),
  react: require("../assets/react.png"),
  ruby: require("../assets/ruby.png"),
  redux: require("../assets/redux.png"),
  js: require("../assets/js.png"),
  city: require("../assets/city.jpg"),
  logo: require("../assets/formidable-logo.svg"),
  fam: require("../assets/family.jpg"),
  markdown: require("../assets/markdown.png"),
  bird: require("../assets/bird_fail.gif"),
  birdVid: require("../assets/Bird_release_fail.mp4")
};

preloader(images);

const theme = createTheme({
  primary: "#000",
  secondary: "#61dafb"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Layout>
              <Fill>
                <Heading caps textColor="white"> 
                  Dave Jungst
                </Heading>
                <br />
                <hr style={{ color: 'white' }} />
                <br />
                <Heading textColor="secondary">@djungst</Heading>
              </Fill>
              <Fill>
                <Image height="100" width="100" src={images.rails.replace("/", "")} />
                <Image height="100" width="100" src={images.react.replace("/", "")} />
                <Image style={{ marginRight: '5px' }} height="100" width="100" src={images.redux.replace("/", "")} />
                <Image height="100" width="100" src={images.js.replace("/", "")} />
                <br />
                <Image height="350" width="350" src={images.fam.replace("/", "")} />
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading textColor="white">I'm in my late 20's</Heading>
            <br />
            <Appear><Text textSize="72px" textColor="secondary">( 36 )</Text></Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
             <Heading size={1} caps fit textColor="tertiary">
              5 Lessons Learned
            </Heading>
            <Appear>
              <List>
                <ListItem textAlign="center" textColor="secondary">1.  This never gets old</ListItem>
              </List>
            </Appear>
            <Appear>
              <List>
                <ListItem textAlign="center" textColor="secondary">{`2.  while (true) { learn(); }`}</ListItem>
              </List>
            </Appear>
            <Appear>
              <List>
                <ListItem textAlign="center" textColor="secondary">3.  Peaks and valleys</ListItem>
              </List>
            </Appear>
            <Appear>
              <List>
                <ListItem textAlign="center" textColor="secondary">4.  Abstraction is everywhere</ListItem>
              </List>
            </Appear>
            <Appear>
              <List>
                <ListItem textAlign="center" textColor="secondary">5.  Mentors and relationships</ListItem>
              </List>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <App />
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <video autoPlay loop src={images.birdVid} style={{ height: '400' }}/>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
