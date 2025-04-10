import React, { useState } from "react";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData?.name && formData?.email && formData?.message) {
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
            toast.success("Email sent Successfully!");

            setIsLoading(false);
            setFormData({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            console.error("Error sending email:", error);
            toast.error("Failed to send email");
            setIsLoading(false);
          }
        );
    } else {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="pt-8 lg:pt-16">
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: { background: "#333", color: "#fff" },
        }}
      />
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
        {!isLoading ? (
          <div
            className="flex justify-center md:justify-start"
            onClick={sendEmail}
          >
            <a
              href="#contact"
              className="mt-10 w-[205px] h-[56px] animate-btn md:ml-20"
            >
              Send Message <PiPaperPlaneTiltBold className="text-white" />
            </a>
          </div>
        ) : (
          <div className="flex justify-center md:justify-start">
            <div className="mt-10 w-[205px] h-[56px] animate-btn md:ml-20">
              Sending.....
            </div>
          </div>
        )}
      </form>
    </section>
  );
};

export default ContactMe;
