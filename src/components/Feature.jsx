import Typewriter from "typewriter-effect";

const Feature = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg items-center lg:mt-20 mt-10">
      <img
        src="https://images.unsplash.com/photo-1642313941064-beb140f6054f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="featureImage"
        className="flex lg:justify-self-end lg:mr-5 justify-self-center rounded-3xl w-96"
      />
      <div className="flex flex-col justify-center lg:items-start lg:ml-5 lg:w-80 my-10 lg:my-0 space-y-4 lg:text-left">
        <h1 className="text-6xl font-light px-4 lg:px-0">
          Hello! I'm <span className="font-black">Herman,</span>{" "}
        </h1>
        <h2 className="text-2xl font-light px-24 lg:px-0">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("a Full-Stack Web Developer & Web Designer.")
                .start();
            }}
            options={{
              autoStart: true,
              //   loop: true,
              delay: 60,
              //   deleteSpeed: 1,
            }}
          />
        </h2>
      </div>
    </div>
  );
};

export default Feature;
