import React from 'react';
import ProjectCards from '@/components/Projects/ProjectCards';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Your Name',
  description: 'Projects and work showcasing my development journey',
};

const projectsList = [
  {
    imgPath: "/project1.png",
    title: "Project One",
    description: 
      "A full-stack application built with Next.js and TypeScript. Features include user authentication, real-time data updates, and responsive design.",
    ghLink: "https://github.com/yourusername/project1",
    demoLink: "https://project1-demo.com",
  },
  {
    imgPath: "/project2.png",
    title: "Project Two",
    description: 
      "An e-commerce platform with features like shopping cart, payment integration, and order management. Built using modern web technologies.",
    ghLink: "https://github.com/yourusername/project2",
    demoLink: "https://project2-demo.com",
  },
  {
    imgPath: "/project3.png",
    title: "Developer Blog",
    description: 
      "A technical blog built with Next.js and MDX, featuring syntax highlighting, dark mode, and responsive design.",
    ghLink: "https://github.com/yourusername/blog",
    isBlog: true,
  },
];

export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">
        My Recent <span className="text-blue-500">Works</span>
      </h1>
      
      <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
        Here are some projects I've worked on. Each one represents a unique challenge 
        and learning opportunity in my development journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsList.map((project, index) => (
          <ProjectCards
            key={index}
            imgPath={project.imgPath}
            title={project.title}
            description={project.description}
            ghLink={project.ghLink}
            demoLink={project.demoLink}
            isBlog={project.isBlog}
          />
        ))}
      </div>
    </section>
  );
}