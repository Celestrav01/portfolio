"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "MERN Ecommerce Website",
    description:
      "Full-stack ecommerce platform with authentication, product management, and secure checkout.",
    image: "/images/projects/mern-ecommerce.png",
    tag: ["All", "Mern"],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    gitUrl: "https://github.com/Celestrav01/E-COMMERCE",
    previewUrl: "https://mern-ecommerce-backend-sand.vercel.app/",
  },
  {
    id: 2,
    title: "Movie Ticket Booking WebApp",
    description:
      "Movie ticket booking platform with dynamic listings and real-time UI updates.",
    image: "/images/projects/Movie-web.png",
    tag: ["All", "Mern"],
    tech: ["React", "Node.js", "MongoDB", "API"],
    gitUrl: "https://github.com/Celestrav01/MovieWeb",
    previewUrl: "https://movieweb-mauve-seven.vercel.app/",
  },
  {
    id: 3,
    title: "Social-Media Marketplace",
    description:
      "Full-stack social media marketplace where users can list, buy, sell, and exchange digital accounts with secure authentication and real-time interactions.",
    image: "/images/projects/Flipearn_pro.png",
    tag: ["All", "PERN"],
    tech: ["React", "Node.js", "PostgreSQL", "Express.js"],
    gitUrl: "https://github.com/Celestrav01/flipearn",
    previewUrl: "https://flipearn-56cj.vercel.app",
  },
  // {
  //   id: 3,
  //   title: "BusyBuy",
  //   description:
  //     "Frontend ecommerce app with cart, filters, and authentication.",
  //   image: "/images/projects/busy-buy.png",
  //   tag: ["All", "Frontend"],
  //   tech: ["React", "Context API", "Firebase"],
  //   gitUrl: "https://github.com/Celestrav01/BusyBuy",
  //   previewUrl: "https://busy-buy-ten.vercel.app/",
  // },
  {
    id: 4,
    title: "Photo Storing Application",
    description:
      "Cloud-based photo storage app with upload and album management.",
    image: "/images/projects/photofolio.png",
    tag: ["All", "Frontend"],
    tech: ["React", "Firebase", "Cloud Storage"],
    gitUrl: "https://github.com/Celestrav01/Photo_pholio",
    previewUrl: "https://photo-folio-two.vercel.app/",
  },
  {
    id: 5,
    title: "React Chat App",
    description:
      "Real-time chat app with authentication and live messaging.",
    image: "/images/projects/react-chat.png",
    tag: ["All", "Frontend"],
    tech: ["React", "Firebase", "Realtime DB"],
    gitUrl: "https://github.com/Celestrav01/chat-app-firebase",
    previewUrl: "https://react-firebase-chat-opal.vercel.app/",
  },
  {
    id: 6,
    title: "React Habit Tracker",
    description:
      "Habit tracking app with CRUD operations and authentication.",
    image: "/images/projects/habit-tracker.png",
    tag: ["All", "Frontend"],
    tech: ["React", "Firebase", "Auth"],
    gitUrl: "https://github.com/Celestrav01/react-habit-tracker",
    previewUrl: "https://react-habit.vercel.app/",
  },
];

/* 🔹 Animation Variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section
      ref={ref}
      id="projects"
      className="mt-24"
    >
      <h2 className="text-center text-4xl font-bold text-white mb-8">
        My Projects
      </h2>

      {/* TAGS */}
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mern"
          isSelected={tag === "Mern"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
      </div>

      {/* PROJECT GRID WITH STAGGER */}
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
      >
        {filteredProjects.map((project) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tech={project.tech}
            />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default ProjectSection;
