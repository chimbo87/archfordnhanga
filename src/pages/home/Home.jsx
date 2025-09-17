import React from "react";
import Hero from "./components/Hero";
import AboutPreview from "./components/AboutPreview";
import FeaturedProjects from "./components/FeaturedProjects";
import SkillsTechnologies from "./components/SkillsTechnologies";

function Home() {
  return (
    <div>

      <Hero />
      <AboutPreview/>
      <SkillsTechnologies/>
      <FeaturedProjects/>
    </div>
  );
}

export default Home;
