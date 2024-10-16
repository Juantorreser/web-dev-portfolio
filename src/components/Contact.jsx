// src/components/Contact.jsx
import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
                <form className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="phone">
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="Your Phone Number"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="subject">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="Subject"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            className="w-full px-3 py-2 border rounded-lg"
                            rows="5"
                            placeholder="Your Message"></textarea>
                    </div>
                    <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
