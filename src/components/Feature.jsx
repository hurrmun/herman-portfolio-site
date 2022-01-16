import React from "react";

const Feature = () => {
  return (
    // <div
    //   className=" w-full xl:rounded-lg h-96 bg-cover bg-center"
    //   style={{
    //     backgroundImage:
    //       "url(https://images.unsplash.com/photo-1642313941064-beb140f6054f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
    //   }}
    //   id="feature"
    // >
    //   <h1 className="uppercase text-2xl lg:text-3xl text-slate-800 font-bold mt-10 flex lg:space-x-20 lg:justify-center flex-col lg:flex-row items-start ml-10 lg:ml-0">
    //     <span>Full-Stack Developer</span>
    //     <span>Web Designer</span>
    //     <span>Tech Enthusiast</span>
    //   </h1>
    // </div>
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:mt-20 mt-10">
      <img
        src="https://images.unsplash.com/photo-1642313941064-beb140f6054f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="featureImage"
        className="flex lg:justify-self-end lg:mr-5 justify-self-center rounded-3xl w-96"
      />
      <div className="flex flex-col justify-center lg:items-start lg:ml-5 lg:mr-36 my-10 space-y-3 lg:text-left">
        <h1 className="text-6xl font-light px-4 lg:px-0">
          Hello! I'm <span className="font-black">Herman</span>{" "}
        </h1>
        <h2 className="text-2xl font-light px-4 lg:px-0">
          <span className="font-black">Full-Stack Developer</span> &{" "}
          <span className="font-black">Web Designer</span>
        </h2>
      </div>
    </div>
  );
};

export default Feature;
