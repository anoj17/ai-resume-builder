const CallToAction = () => {
  return (
    <>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
      <section
        id="cta"
        className="flex md:mt-28 mt-10 flex-col items-center justify-center md:max-w-3xl lg:mx-auto mx-2 max-md:px-2 lg:max-w-5xl text-center rounded-xl py-20 md:py-24 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/banners/image-1.png')] bg-cover bg-center bg-no-repeat"
      >
        <h1 className="text-2xl md:text-3xl font-medium text-white max-w-2xl">
          Land your dream job with AI-powered resumes.
        </h1>
        <div className="h-[3px] w-32 my-1 bg-gradient-to-l from-transparent to-green-600"></div>
        <p className="text-sm md:text-base text-white max-w-xl">
          Build a professional resume in minutes and get noticed by top
          employers.
        </p>
        <button className="px-8 py-2.5 mt-4 text-sm bg-gradient-to-r cursor-pointer from-green-600 to-green-400 hover:scale-105 transition duration-300 text-white rounded-full">
          Get Started
        </button>
      </section>
    </>
  );
};

export default CallToAction;
