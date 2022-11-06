import React from "react";
import Links from "./Links";

function About({props}) {
  // console.log(props.links)

  const {links} = props

  console.log(links)

 function BioContent() {
    if (props.bio === ''){
    return null
  } else {
    return (<p>{props.bio}</p>)
  }
}


  return (
    <div id="about">
      <h2>About Me</h2>
      <BioContent />
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links props={links}/>
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
