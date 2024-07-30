const MarketingCard = ({ imgSrc, paraghraph, heading, skills }) => {
  return (
    <div className="space-y-8 py-12 px-6 rounded-[32px] bg-gradient-to-bl from-[#27322F]/[0.24]  to-transparent">
      <figure className="p-5  bg-neutral size-16 rounded-3xl">
        <img
          src="/marketing/marketing.svg"
          alt="quote"
          className=" object-contain"
        />
      </figure>
      <p className="max-w-[344px]">{paraghraph}</p>
      <section className=" flex items-center gap-2 ">
        <img
          src={`/marketing/${imgSrc}.svg`}
          alt="profile"
          className="object-contain"
        />
        <article className="">
          <h1>{heading}</h1>
          <p>{skills}</p>
        </article>
      </section>
    </div>
  );
};
export default MarketingCard;
