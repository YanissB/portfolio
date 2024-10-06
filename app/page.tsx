import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import StackCard from "@/components/StackCard";
import Menu from "@/components/Menu";
import data from "@/lib/data.json";

const Home = () => {
  return (
    <div className="flex flex-col w-screen min-h-screen bg-background">
      <Header />
      <main className="flex-grow w-full px-4 md:px-8 space-y-36 mt-80">
        <HeroSection />
        <section className="container mx-auto py-8">
          <h1 className="text-4xl font-bold pb-24 mb-16 items-center">
            # Projects_
          </h1>

          <div className="flex flex-wrap w-full justify-between gap-y-16 md:justify-center sm:justify-center">
            {data.projects.map((project) => (
              <div
                key={project.title}
                className="w-full lg:w-1/2 flex justify-center"
              >
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="container mx-auto py-8">
          <h1 className="text-4xl font-bold pb-24 mb-16 items-center">
            # Stacks_
          </h1>
          <div className="space-y-24">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                &#x21B3; Frontend_
              </h2>
              <StackCard stacks={data.stacks.frontend} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">&#x21B3; Backend_</h2>
              <StackCard stacks={data.stacks.backend} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">&#x21B3; DevOps_</h2>
              <StackCard stacks={data.stacks.devOps} />
            </div>
          </div>
        </section>
      </main>
      <div className="fixed bottom-20 left-0 right-0 flex justify-center mb-4 lg:hidden">
        <Menu />
      </div>
    </div>
  );
};

export default Home;
