import React from "react";
import "../styles/about.scss";
import ScrollReveal from "scrollreveal";
export default function About() {
  ScrollReveal().reveal(".see", { delay: 3000 });
  return (
    <section>
      <h1 className="see">Welcome to my portfolio </h1>
      <h1 className="see seeyah">
        Wish you happy all the day , <span>see yahhhhhhh</span>
      </h1>
      <span className="span">TraXuan na na na na na</span>
      <h3>
        Welcome to my portfolio ,Wish you happy all the day , see yahhhh Welcome
        to my portfolio ,Wish you happy all the day , see yahhhh
      </h3>
    </section>
  );
}
