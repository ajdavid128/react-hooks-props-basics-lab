import React from "react";

function Home({props}) {
  // console.log(props.color)

  const {color} = props
  console.log(color)
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {props.name} is a Web Developer from {props.city}
      </h1>
    </div>
  );
}

export default Home;
