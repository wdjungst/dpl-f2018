// Import React
import React from "react";
import App from './App';
import dpl from '../assets/dpl2017.png';
import LaunchDay from '../assets/LaunchDay.png';

// Import Spectacle Core tags
import { Appear,
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
  reflect: require("../assets/reflect.jpg"),
  heart: require("../assets/heart.png"),
  logo: require("../assets/formidable-logo.svg"),
  fam: require("../assets/family.jpg"),
  markdown: require("../assets/markdown.png"),
  dps: require('../assets/logo-purple.png'),
  tw: require('../assets/twitter.png'),
  launch: require('../assets/LaunchDay.png'),
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
          <Slide bgImage={LaunchDay}>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Layout>
              <Fill>
                <Heading caps textColor="white"> 
                  Dave Jungst
                </Heading>
                <br />
                <hr style={{ color: 'white' }} />
                <Fit>
                  <Image height="100" width="100" src={images.tw.replace("/", "")} />
                  <Heading textColor="secondary">@djungst</Heading>
                </Fit>
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
          <Slide transition={["zoom"]} bgColor="black">
            <Heading textColor="secondary">Numbers</Heading>
            <Appear>
              <Heading textColor="white" size={4}>I</Heading>
            </Appear>
            <Appear>
              <Heading size={4} textColor="white">11</Heading>
            </Appear>
            <Appear>
              <Heading size={4} textColor="white">22</Heading>
            </Appear>
            <Appear>
              <Heading size={4} textColor="white">3.5</Heading>
            </Appear>
            <Appear>
              <Heading size={4} textColor="white">350</Heading>
            </Appear>
            <Appear>
              <Heading size={4} textColor="white">01100011 01101111 01101111 01101100 0001010</Heading>
            </Appear>
            <Appear>
              <Heading size={4} textColor="white">0X01</Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading textColor="secondary">Worth It?</Heading>
            <iframe height={600} width={800} src="https://tycards.herokuapp.com/"></iframe>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading textColor="secondary">Lessons</Heading>
            <Appear>
              <Heading textColor="white" size={4}>{`while(ture) { learn + grow }`}</Heading>
            </Appear>
            <Appear>
              <Heading textColor="white" size={4}>!need = knowEverything</Heading>
            </Appear>
            <Appear>
              <Heading textColor="white" size={4}>Abstraction = Powerful</Heading>
            </Appear>
            <Appear>
              <Heading textColor="white" size={4}>canDoThis = 'Everyone'</Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading textColor="secondary">Todo List</Heading>
            <Appear>
              <Heading textColor="white" size={4}>Keep Going</Heading>
            </Appear>
            <Appear>
              <Heading textColor="white" size={4}>Find Mentors</Heading>
            </Appear>
            <Appear>
              <Heading textColor="white" size={4}>❤️  Errors</Heading>
            </Appear>
            <Appear>
              <Heading textColor="white" size={4}>Embrace Abstraction</Heading>
            </Appear>
            <Appear>
              <Heading textColor="white" size={4}>Teach</Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Image src={images.reflect.replace("/", "")} />
          </Slide>
          <Slide transition={["zoom"]} bgColor="black">
            <Layout> 
              <Fill>
                <BlockQuote>
                  <Quote textColor="tertiary">
                    A story has no beginning or end: arbitrarily one chooses that moment of experience from which to look back or from which to look ahead.
                  </Quote>
                  <Cite>Graham Greene</Cite>
                </BlockQuote>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
              <Heading size={2} textColor="white">
                {`{...❤️ }`}
              </Heading>
              <br />
              <Heading size={2} caps textColor="tertiary">
                Thank You Fall 2018 
              </Heading>
              <Heading size={2} caps textColor="white">Thank you DPL</Heading>
              <Heading size={4} textColor="secondary" >rethink-everything.surge.sh</Heading>
            </Slide>
            <Slide bgImage={LaunchDay}>
            </Slide>
          </Deck>
        </Spectacle>
      );
    }
    }
