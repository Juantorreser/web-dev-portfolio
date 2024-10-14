// src/components/Resume.jsx
import React from "react";

const Resume = () => {
    return (
        <section id="resume" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Resume</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-semibold">Education</h3>
                        <p className="mt-4">Bachelor of Computer Science</p>
                        <p className="text-gray-600">2020 - 2024 | XYZ University</p>
                        <p className="mt-2">Location: Bogotá, Colombia</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold">Experience</h3>
                        <p className="mt-4">Frontend Developer at ABC Corp</p>
                        <p className="text-gray-600">2020 - 2024 | Bogotá, Colombia</p>
                        <ul className="mt-4 list-disc list-inside">
                            <li>Developed responsive web applications.</li>
                            <li>Collaborated with designers to create seamless UI.</li>
                            <li>Implemented complex features using React and Tailwind.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
