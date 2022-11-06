import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
// console.log(user);

// const {name, city, bio, color, links} = user


function App() {
  // console.log(user)
  return (
    <div>
      <NavBar />
      <Home props={user}/>
      <About props={user}/>
    </div>
  );
}

export default App;
