// src/components/Contact.jsx
import React, {useState} from "react";
import emailjs from "emailjs-com"; // Import EmailJS SDK

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const {value, name} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_7my87xk", "template_6aymjkb", formData, "75zDHwPXrevEXYxj6")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
        // Reset form
        setFormData({
          email: "",
          name: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("FAILED...", error);
        alert("Failed to send email. Please try again later.");
      });
  };

  return (
    <section id="contact" className="py-28 k2d text-white/95 bg-bg_sec">
      <div className="w-full">
        <h2 className="sectionTitle text-4xl font-bold text-center mb-12">Contact Me</h2>

        <form className="px-10" id="contactForm" onSubmit={handleSubmit}>
          {/* Grid */}
          <div className="flex flex-col lg:flex-row lg:gap-10 lg:px-10 lg:mb-6">
            {/* Col 1 */}
            <div className="flex flex-col w-full lg:w-[50%]">
              <div className="relative z-0 w-full mb-5 ">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-pri/50 dark:focus:border-pri focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                  onChange={handleChange}
                  value={formData.email}
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-85 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-pri peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-6">
                  Email
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 ">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-pri/50 dark:focus:border-pri focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange={handleChange}
                  value={formData.name}
                />
                <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-85 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-pri peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-6">
                  Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 ">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="phone"
                  id="phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-pri/50 dark:focus:border-pri focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  onChange={handleChange}
                  value={formData.phone}
                />
                <label
                  htmlFor="phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-85 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-pri peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-6">
                  Phone number (123-456-7890)
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 lg:mb-0 ">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-pri/50 dark:focus:border-pri focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange={handleChange}
                  value={formData.subject}
                />
                <label
                  htmlFor="subject"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-85 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-pri peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-6">
                  Subject
                </label>
              </div>
            </div>
            {/* Col 2 */}
            <div className="flex w-full lg:w-[50%] lg:flex-grow">
              <div className="relative z-0 w-full mb-5 lg:h-full">
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  className="h-full block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-pri/50 dark:focus:border-pri focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange={handleChange}
                  value={formData.message}
                />
                <label
                  htmlFor="message"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-85 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-pri peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-6">
                  Message
                </label>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="w-full flex justify-center items-center">
            <button
              type="submit"
              className="text-white bg-pri hover:bg-pri/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-8 py-3 text-center">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
