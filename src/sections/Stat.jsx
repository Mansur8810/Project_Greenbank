import { StatContant } from "../constant";

const Stat = () => {
  return (
    <section className="flex flex-wrap justify-evenly font-mplus1 items-center bg-gray-400 rounded-2xl py-6  bg-opacity-25 backdrop-blur-lg">
      {StatContant.map((stat) => (
        <article key={stat.title}>
          <h1 className="text-4xl leading-[56px] font-bold">{stat.heading}</h1>
          <p>{stat.title}</p>
        </article>
      ))}
    </section>
  );
};

export default Stat;
