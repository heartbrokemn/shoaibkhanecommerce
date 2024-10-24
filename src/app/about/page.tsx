import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-[#8608FF]">About Us</h1>
      <p className="max-w-2xl text-center text-lg leading-relaxed">
        Welcome to <span className="font-semibold text-[#8608FF]">Our E-commerce Store</span>, your number one source for all premium quality products.
       were dedicated to providing you the best experience, with a focus on quality, customer service, and uniqueness.
      </p>
      <p className="max-w-2xl text-center text-lg leading-relaxed mt-4">
        We started this journey to bring the best products to your doorstep, making shopping a seamless and exciting experience.
        Our passion for excellence drives us to continue improving, so that we can serve you better.
      </p>
      <p className="max-w-2xl text-center text-lg leading-relaxed mt-4">
        Thank you for choosing us. We hope you enjoy our products as much as we enjoy offering them to you.
      </p>
    </div>
  );
};

export default About