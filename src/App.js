/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { hot } from 'react-hot-loader';

import Reveal from '../custom_modules/reveal/js/reveal';
import '../custom_modules/reveal/css/reveal.css';
import '../custom_modules/reveal/css/theme/black.css';

import Slide from './components/Slide';
import Code from './components/Code';
import ListWithEmojis from './components/ListWithEmojis';

import jsLogo from './images/js-logo.png';

class App extends React.Component {
  componentDidMount() {
    Reveal.initialize();
  }

  render() {
    return (
      <div className="reveal">
        <div className="slides">
          <Slide>
            <img
              className="plain"
              style={{
                height: 200,
              }}
              src={jsLogo}
              alt="javascript logo"
            />
            <h1>New JS Features</h1>
            <p>EJ Hammond</p>
          </Slide>
          <Slide>
            <h3>audience</h3>
            <p>Javascript users primarily familiar with ES5</p>
          </Slide>
          <Slide>
            <h3>agenda</h3>
            <ListWithEmojis
              animated={true}
              items={[
                {
                  emojiUnicodeOrShortName: ':microscope:',
                  text: 'let & const',
                },
                {
                  emojiUnicodeOrShortName: ':bow_and_arrow:',
                  text: 'arrow functions',
                },
                {
                  emojiUnicodeOrShortName: ':sleeping:',
                  text: 'rest/spread operator',
                },
                {
                  emojiUnicodeOrShortName: ':bomb:',
                  text: 'destructuring',
                },
                {
                  emojiUnicodeOrShortName: ':potable_water:',
                  text: 'promises & async/await',
                },
              ]}
            />
          </Slide>
          <Slide>
            <h3>let and const</h3>
            <Code
              language="javascript"
              code={`
var i = 'able';
let me = 'go';
const ant = 'pressure';
              `}
            />
          </Slide>
          <Slide>
            <h3>var is scoped to the function</h3>
            <Code
              language="javascript"
              code={`
function varFunction() {
  // v *is* visible out here

  for(var v = 0; v < 5; v++) {
    document.getElementById('button-element-' + v)
      .addEventListener('click', function() {
        // every button will alert 5!
        alert(v);
      })
  }

  // v *is* visible out here
}
              `}
            />
          </Slide>
          <Slide>
            <h3>let is scoped to the block</h3>
            <Code
              language="javascript"
              code={`
function letFunction() {
  // l is *not* visible out here

  for(let l = 0; l < 5; l++) {
      // l is only visible in here
      // l has its own scope in each iteration
      document.getElementById('button-element-' + l)
        .addEventListener('click', function() {
          // each button has its own number :)
          alert(l);
        })
  }

  // l is *not* visible out here
}
              `}
            />
          </Slide>
          <Slide>
            <h3>const is like let</h3>
            <p>but it can&apos;t be re-assigned</p>
            <Code
              language="javascript"
              code={`
const ant = "pressure";
ant = "icipation"; // error!
              `}
            />
          </Slide>
          <Slide>
            <h3>standard function declarations</h3>
            <p>always create a new context (this)</p>
            <Code
              language="javascript"
              code={`
const developer = {
  name: "EJ",
  teammates: ["Justin", "Essie", "Candice"],
  getTeam: function() {
    return this.teammates.forEach(function(teammate){
      // executed by the forEach function, so "this" refers to the array
      console.log(this.name + " has a teammate named " + teammate);
    });
  }
};

developer.getTeam();
// (empty string) has a teammate named Justin
// (empty string) has a teammate named Essie
// (empty string) has a teammate named Candice
              `}
            />
          </Slide>
          <Slide>
            <h3>standard function declarations</h3>
            <p>work-arounds</p>
            <Code
              language="javascript"
              code={`
const developer = {
  name: "EJ",
  teammates: ["Justin", "Essie", "Candice"],
  getTeam: function() {
    const me = this; // common workaround
    return this.teammates.forEach(function(teammate){
      // function is executed by the forEach function which is on the "teammates" array, so "this" refers to the array
      // "me" still holds a reference to the "this" context of the object
      console.log(me.name + " has a teammate named " + teammate);
    });
  }
};

developer.getTeam(); // works as expected
              `}
            />
          </Slide>
          <Slide>
            <h3>arrow functions</h3>
            <p>use the context (this) from where they&apos;re defined</p>
            <Code
              language="javascript"
              code={`
const developer = {
  name: "EJ",
  teammates: ["Justin", "Essie", "Candice"],
  getTeam: function() {
    return this.teammates.forEach((teammate) => {
      // uses the surrounding "this" context
      console.log(this.name + " has a teammate named " + teammate);
    });
  }
};

developer.getTeam(); // works as expected
              `}
            />
          </Slide>
          <Slide>
            <h3>when to use arrow functions</h3>
            <ListWithEmojis
              animated={true}
              items={[
                {
                  emojiUnicodeOrShortName: ':white_check_mark:',
                  text: 'functions that don\'t use "this" or "arguments"',
                },
                {
                  emojiUnicodeOrShortName: ':white_check_mark:',
                  text: 'to avoid "me = this" workaround',
                },
                {
                  emojiUnicodeOrShortName: ':white_check_mark:',
                  text: 'to avoid ".bind(this)" workaround',
                },
              ]}
            />
          </Slide>
          <Slide>
            <h3>destructuring</h3>
            <p>"extract" values from arrays and objects</p>
            <Code
              language="javascript"
              code={`
// arrays
const tuple = ["key", "value"];
const [ key, value ] = tuple;

// objects
const obj = { key: "wow", value: 101 };
const { key, value } = obj;
              `}
            />
          </Slide>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
