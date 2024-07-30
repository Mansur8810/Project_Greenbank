import MarketingCard from "../components/MarketingCard";
import { MarketingContent } from "../constant";

const Marketing = () => {
  return (
    <section className=" space-y-16 py-32">
      <div className="flex lg:flex-row flex-col items-center gap-y-12 justify-between ">
        {MarketingContent.map((items) => (
          <MarketingCard key={items.skills} {...items} />
        ))}
      </div>
    </section>
  );
};

export default Marketing;
