import React, { useState } from "react";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_szfeyye", // Replace with your EmailJS Service ID
        "template_0ht005l", // Replace with your EmailJS Template ID
        formData,
        "WItcpbvAORf3ostmD" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);

          alert("Email sent!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Failed to send email.");
        }
      );
  };

  return (
    <section id="contact" className="pt-8">
      <h2 className="text-4xl text-center font-semibold">Contact Me</h2>
      <div className="mb-12 text-center">Lets Get in touch</div>
      <form className="mx-10 mb-12">
        <h3 className="text-[20px] mb-6 text-center">Write to Me</h3>
        <div className="flex flex-col gap-10 md:mx-20">
          <div className="relative">
            <label className="absolute top-[-12px] left-[22px] text-[#6c6c74] bg-[#faf8f7] px-1.5">
              Name
            </label>
            <input
              type="text"
              placeholder="write your name"
              className="border-2 border-[#6c6c74] focus:border-red-500 w-full h-18 rounded-[8px] px-5 py-2.5 text-[18px]"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <label className="absolute top-[-12px] left-[22px] text-[#6c6c74] bg-[#faf8f7] px-1.5">
              Email
            </label>
            <input
              type="text"
              placeholder="write your email"
              className="border-2 border-[#6c6c74] focus:border-red-500 w-full h-18 rounded-[8px] px-5 py-2.5 text-[18px]"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <label className="absolute top-[-12px] left-[22px] text-[#6c6c74] bg-[#faf8f7] px-1.5">
              Message
            </label>
            <textarea
              type="text"
              placeholder="write your message"
              className="border-2 border-[#6c6c74] focus:border-red-500 w-full h-[160px] rounded-[8px] px-5 py-4.5 text-[18px]"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>
        <div
          className="flex justify-center md:justify-start"
          onClick={sendEmail}
        >
          <a
            href="#contact"
            className="px-7 py-4 mt-10 text-white bg-[#1e1d1e] flex justify-center items-center gap-2 rounded-2xl w-[205px] h-[56px] md:ml-20"
          >
            Send Message <PiPaperPlaneTiltBold className="text-white" />
          </a>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
