// src/components/Footer.jsx
import React from "react";

const Footer = () => {
    return (
        <footer className="py-6 bg-gray-800 text-white text-center">
            <div className="container mx-auto">
                <p>&copy; 2024 JD TORRES. All rights reserved.</p>
                <div className="mt-4">
                    <a href="#" className="mx-2">
                        LinkedIn
                    </a>
                    <a href="#" className="mx-2">
                        GitHub
                    </a>
                    <a href="#" className="mx-2">
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
