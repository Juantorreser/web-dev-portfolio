// src/components/About.jsx
import React from "react";

const About = () => {
    return (
        <section id="about" className=" py-28 bg-bg_sec">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                <div className="flex flex-col md:flex-row justify-around">
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-2xl font-semibold">Juan David Torres</h3>
                        <p className="mt-2">Age: 25</p>
                        <p className="mt-2">City: Bogotá, Colombia</p>
                        <p className="mt-2">Email: juan.david@example.com</p>
                    </div>
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-2xl font-semibold">Soft Skills</h3>
                        <ul className="mt-4 list-disc list-inside">
                            <li>Teamwork</li>
                            <li>Problem-solving</li>
                            <li>Adaptability</li>
                            <li>Communication</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold">Languages</h3>
                        <ul className="mt-4 list-disc list-inside">
                            <li>Spanish</li>
                            <li>English</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
