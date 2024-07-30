import Button from "../components/Button";
const Features = () => {
  return (
    <section className="hero md:py-12 py-6">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <figure>
          <img
            src="/feature/creditcard.png"
            className="rounded-lg object-contain size-80"
          />
        </figure>
        <div>
          <h1 className="text-4xl font-bold font-mplus1 max-w-lg">
            Design Your personalized credit card
          </h1>
          <p className="py-6 max-w-lg text-lg text-gray-500">
            You have the freedom to persnoliz the design of your credit
            card,ensuring a truly experience that make you feel extraordinary
          </p>
          <Button text="Create New Card" variant="defaultWithIcon" />
        </div>
      </div>
    </section>
  );
};

export default Features;
