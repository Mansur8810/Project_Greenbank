import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="hero  min-h-screen relative">
      <div className="hero-content flex-col lg:flex-row-reverse  ">
        <figure className="relative">
          <div className="lg:size-[392px] overflow-visible  bg-primary rounded-full -z-30 absolute -right-20 mt-10"></div>
          <img
            src="/hero/credit-card.png"
            className="rounded-lg object-contain size-5/6"
          />
        </figure>
        <div>
          <h1 className="text-5xl font-bold font-mplus1 max-w-xl ">
            Discover the Perfect Credit Card for You
          </h1>
          <p className="py-6 max-w-lg text-lg font-light text-gray-500">
            Discover the power of our secure and rewarding credit card.Explore
            range credit card and take control of your fainances today.
          </p>
          <Button text="Get started" variant="defaultWithIcon" />
          <figure className="avatar-group -space-x-6 rtl:space-x-reverse mt-4">
            <div className="avatar ">
              <div className="w-12">
                <img src="/logo/Ellipse.svg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="/logo/Frame.svg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="/logo/Avtar-4.svg" />
              </div>
            </div>
            <div className="pl-12">
              <h1>10.2k+</h1>
              <span className="text-sm font-light text-gray-500">
                Active users around the Worlds
              </span>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
