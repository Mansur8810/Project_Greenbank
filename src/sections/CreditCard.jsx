import Button from "../components/Button";
const CreditCard = () => {
  return (
    <section className="flex flex-wrap lg:my-12 py-12 gap-y-6 justify-evenly items-center">
      <figure>
        <img
          src="/creditcard/Group14.png"
          className="rounded-lg object-contain size-80"
        />
      </figure>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold font-poppins max-w-lg">
          Design Your personalized credit card
        </h1>
        <p className="max-w-lg text-xl text-gray-500">
          You have the freedom to persnoliz the design of your credit
          card,ensuring a truly experience that make you feel extraordinary
        </p>
        <Button text="Learn More" variant="default" />
      </div>
    </section>
  );
};

export default CreditCard;
