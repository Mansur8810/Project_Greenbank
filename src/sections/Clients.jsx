import { Clientscontent } from "../constant";

const Clients = () => {
  return (
    <section className="flex flex-wrap gap-12 justify-evenly items-center text-3xl">
      {Clientscontent.map((client) => (
        <img
          key={client}
          src={`/clients/${client}.png`}
          height="32"
          className=" object-contain"
        />
      ))}
    </section>
  );
};
export default Clients;
