const Banner = () => {
  return (
    <div className="bg-[url(https://i.ibb.co.com/3kYtv41/banner.png)] bg-cover bg-no-repeat rounded-3xl md:w-full h-full md:h-[35.5rem] mb-10">
      <div className="w-9/12 mx-auto flex flex-col items-center justify-center text-center h-full space-y-6 py-4">
        <h1>Discover an exceptional cooking class tailored for you!</h1>
        <p className="text-lg text-white">
          Whether you are a beginner or a seasoned chef, our expert-led sessions
          offer personalized guidance and inspiration. Join us for an enriching
          culinary experience that is sure to ignite your passion for food and
          cooking.
        </p>
        <div className="flex gap-4 text-xl font-semibold">
            <button className="btn bg-green-400 rounded-full border-none">Explore Now</button>
            <button className="btn btn-outline text-white hover:bg-green-400 rounded-full">Our Feedback</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
