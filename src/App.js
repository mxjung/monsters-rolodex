import React, { Component } from "react";
// 1. grab component from react
//import logo from "./logo.svg";
import "./App.css";

//9. we want to import the components we build
import { CardList } from "./Components/card-list/card-list.component";
import { SearchBox } from "./Components/search-box/search-box.component";

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// 2. Instead of the function app(), we conver this to a class: - you can have function or class.
// 3. let's say we want a button below <p>. With class component, we get this thing called the state, state is a js object with properties that we can get inside our class.
// 4. Anything between { } is JS, and we can tell <p> to be the state
// 5. On every html element, we have access to onClick propoerty that gets called whenever it gets clicked, where we can change the state.
// 6. In JSX, className is not JS class (nor is it like classes in HTML), its a JSX attribute
// 7. We change state by calling setState, and not this.state.string because of the unidirectional data flow of React. We can't change state without calling setState.

class App extends Component {
  // What does class App extends Component mean? Component is a react library. WE could have done class app extends React.Component. Whatever functionality exists in React.Component, i want that functionality in our components like render. Super() helps us with this by called react.Compoents constructor() like from past lessons on classes.

  constructor() {
    super();
    // calls react.Component to grab its functionality/attributes.
    this.state = {
      monsters: [],
      searchField: ""
    };

    // We have to set the context of our methods (the ones we write, like handleChange) in order for them to know the scope, of this. But instead of doing below, let's use arrow functions
    //this.handleChange = this.handleChange.bind(this);
  }

  // Life Cycle methods: they are methods that get called in different stages of when this Component gets rendered. when this component mounts, or webpage is created, it calls whatever block of code we put insude componentDidMount
  componentDidMount() {
    // Make API request
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(Response => Response.json())
      .then(users => this.setState({ monsters: users }));
  }

  // 8. React wants us to have unique id when we run through the map (because react wants to know which html element we are changing), so we use unique keys - from course - "Anytime you use the map() function inside of render, or you have a list of the same jsx elements one after another, they need a key attribute (and CRA will warn you about it if you miss it)"

  // Pass in monsters to the component

  // input type="search" where type is a built in functionality of input in html (well, jsx, but we treat it similarly to html) - visit SyntheticEvent. We want to fire my onChange whenever it changes. onChange has an element called target, which we want (e.target.value)

  // if we have a console.log for this.state right after setState.searchField, we wont see the exact change taking place real time because setState is asynchronous - it will wait til other sychronous calls are made before executing. to see in our console what we are typing in, we will use another react solution, callback. Also note that the function is anonymous, we don't actually run the setState function within render()

  //   <input
  //   type="search"
  //   placeholder='search monsters'
  //   onChange={e =>
  //     this.setState({searchField: e.target.value}, () =>
  //     console.log(this.state))}
  //  />

  // Let's write our own class method:
  // arrow function allows react to know to bind this where the arrow function was defined. This is called lexical scoping
  handleChange = e => {
    this.setState({ searchField: e.target.value }, () =>
      console.log(this.state)
    );
  };

  render() {
    // We will now filter the monsters array to select only the monsters the user is searching for. We will destructure, which allows us to pull properties off of an object and set them to const

    const { monsters, searchField } = this.state; //we have destructured
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>{this.state.string}</p>
  //         <button onClick={() => this.setState({string: 'Hello Andrei'})}>Change Text</button>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }
}

export default App;

// 190914 - we know that app() can return html, but react also allows us to create classes that can return html. We follow these steps (starting from 1):
