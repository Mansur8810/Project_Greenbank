const OfferCard = ({ heading, iconSrc, description }) => {
  return (
    <div className="flex  items-start gap-6 max-w-[392px]">
      <figure className=" p-5 bg-neutral size-16 rounded-3xl">
        <img
          src={`/offers/${iconSrc}.svg`}
          alt={heading}
          className="size-6 object-contain"
        />
      </figure>
      <article className="space-y-2">
        <h1 className="font-bold text-xl">{heading}</h1>
        <p className=" text-gray-500">{description}</p>
      </article>
    </div>
  );
};
export default OfferCard;
