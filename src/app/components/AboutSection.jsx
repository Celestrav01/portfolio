"use client";

import React, { useState, useTransition, useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- TAB ORDER ---------------- */
const TAB_ORDER = ["skills", "education", "certifications"];

/* ---------------- TAB IMAGES ---------------- */
const TAB_IMAGES = {
    skills: "/images/about/skills.png",
    education: "/images/about/education.jpg",
    certifications: "/images/about/certification.jpg",
};

/* ---------------- IMAGE ANIMATION ---------------- */
const imageVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 80 : -80,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction) => ({
        x: direction > 0 ? -80 : 80,
        opacity: 0,
    }),
};

/* ---------------- LIST ANIMATION ---------------- */
const listContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

const listItem = {
    hidden: { x: 30, opacity: 0 },
    visible: { x: 0, opacity: 1 },
};

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [direction, setDirection] = useState(1);
    const [, startTransition] = useTransition();
    const prevIndex = useRef(0);

    const handleTabChange = (newTab) => {
        const newIndex = TAB_ORDER.indexOf(newTab);
        const oldIndex = prevIndex.current;

        setDirection(newIndex > oldIndex ? 1 : -1);
        prevIndex.current = newIndex;

        startTransition(() => {
            setTab(newTab);
        });
    };

    return (
        <section id="about" className="mt-24">
            <h2 className="text-center text-4xl font-bold text-white mb-12">
                About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-start">

                {/* ---------- LEFT IMAGE (FIXED POSITION) ---------- */}
                <div className="relative h-[340px] flex items-center justify-center">
                    <AnimatePresence custom={direction} mode="wait">
                        <motion.div
                            key={tab}
                            custom={direction}
                            variants={imageVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute"
                        >
                            <Image
                                src={TAB_IMAGES[tab]}
                                alt={`${tab} illustration`}
                                width={420}
                                height={300}
                                className="rounded-xl"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* ---------- RIGHT CONTENT ---------- */}
                <div className="text-left flex flex-col">

                    {/* ABOUT TEXT */}
                    <div className="space-y-6 text-[#ADB7BE] text-lg">
                        <p>
                            <span className="text-white font-semibold">Who I am:</span>{" "}
                            A final-year B.Tech student with strong backend & frontend focus.
                        </p>
                        <p>
                            <span className="text-white font-semibold">What I work on:</span>{" "}
                            Backend systems, REST APIs, SQL-based applications, full-stack development, and frontend integration.
                        </p>
                        <p>
                            <span className="text-white font-semibold">What I’m focusing on:</span>{" "}
                            DSA, SQL optimization, system design fundamentals, and Dockerization.
                        </p>
                    </div>

                    {/* TABS */}
                    <div className="flex gap-6 mt-8">
                        <TabButton
                            active={tab === "skills"}
                            selectTab={() => handleTabChange("skills")}
                        >
                            Skills
                        </TabButton>
                        <TabButton
                            active={tab === "education"}
                            selectTab={() => handleTabChange("education")}
                        >
                            Education
                        </TabButton>
                        <TabButton
                            active={tab === "certifications"}
                            selectTab={() => handleTabChange("certifications")}
                        >
                            Certifications
                        </TabButton>
                    </div>

                    {/* TAB CONTENT WITH SIDE SLIDE */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={tab}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={listContainer}
                            className="mt-6"
                        >
                            {tab === "skills" && (
                                <motion.ul className="list-disc pl-5 text-[#ADB7BE]">
                                    {[
                                        "JavaScript",
                                        "React.js",
                                        "Next.js",
                                        "Node.js",
                                        "Express.js",
                                        "MongoDB",
                                        "SQL",
                                        "REST APIs",
                                        "DeVops",
                                    ].map((item, i) => (
                                        <motion.li key={i} variants={listItem}>
                                            {item}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            )}

                            {tab === "education" && (
                                <motion.ul className="list-disc pl-5 text-[#ADB7BE]">
                                    {[
                                        "B.Tech (8th Semester) – BIET Jhansi",
                                        "Higher Secondary – Divine Sainik School",
                                    ].map((item, i) => (
                                        <motion.li key={i} variants={listItem}>
                                            {item}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            )}

                            {tab === "certifications" && (
                                <motion.ul className="list-disc pl-5 text-[#ADB7BE]">
                                    <motion.li variants={listItem}>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span>Scaler – Data Structures & Algorithms</span>

                                            <a
                                                href="https://drive.google.com/file/d/1vRi-4ggqjNPUuWyQfzHTuFJu9-aJ7GtC/view?usp=sharing"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary-500 text-sm underline hover:text-primary-400 transition"
                                            >
                                                View Certificate
                                            </a>
                                        </div>
                                    </motion.li>
                                </motion.ul>
                            )}

                        </motion.div>
                    </AnimatePresence>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
