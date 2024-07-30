import OfferCard from "../components/OfferCard";
import { OfferContent } from "../constant";

const Offer = () => {
  return (
    <section className="space-y-16 font-mplus1">
      <h1 className=" text-center text-[40px] font-bold">What do we Offer</h1>
      <div className="flex lg:flex-row flex-col gap-y-12 justify-between items-center">
        {OfferContent.map((item) => (
          <OfferCard key={item.heading} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Offer;
