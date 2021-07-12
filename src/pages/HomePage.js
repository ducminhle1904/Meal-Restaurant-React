import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Food from "../components/Food";

function HomePage() {
  return (
    <main className="main-wrapper">
      <Hero />
      <Food />
    </main>
  );
}

export default HomePage;
