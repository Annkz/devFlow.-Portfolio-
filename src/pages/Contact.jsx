import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Layout>
        <div className="min-h-screen flex items-center justify-start bg-white px-4 sm:px-8 md:px-16 py-20 sm:py-20 md:py-24">
          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-[2fr_3fr] md:gap-16">
            <div className="space-y-4 sm:space-y-6 text-start md:text-left">
              <h1 className="text-xl sm:text-3xl md:text-5xl font-normal leading-tight max-w-[400px] sm:max-w-[500px] mx-auto md:mx-0 mt-4 sm:mt-2 md:mt-0">
                If you have a cool project or just want to chat — contact me
              </h1>
              <ul className="space-y-1 sm:space-y-2 text-base sm:text-lg">
                <li>✔ Project enquiries</li>
                <li>✔ Coffee invitations</li>
                <li>✖ Spam</li>
              </ul>
            </div>

            <div className="w-full mt-8 sm:mt-6 md:mt-0 md:ml-20 lg:ml-32">
              <form
                action="https://formspree.io/f/xyzezgyk"
                method="POST"
                className="space-y-4 sm:space-y-6"
              >
                <div>
                  <label className="block text-[14px] sm:text-[15px] font-normal">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full p-2 sm:p-3 mt-1 sm:mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-100 placeholder:text-[13px] sm:placeholder:text-[14px]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[14px] sm:text-[15px] font-normal">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full p-2 sm:p-3 mt-1 sm:mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-100 placeholder:text-[13px] sm:placeholder:text-[14px]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[14px] sm:text-[15px] font-normal">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Your message"
                    className="w-full p-2 sm:p-3 mt-1 sm:mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-100 h-[120px] sm:h-[150px] placeholder:text-[13px] sm:placeholder:text-[14px] resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-black text-white text-[14px] sm:text-[15px] w-20 sm:w-24 py-2 sm:py-3 rounded hover:bg-gray-800 transition-all cursor-pointer"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
      <Footer/>
    </>
  );
};

export default Contact;
