import { Accordioncontent } from "../constant";

const Accordion = () => {
  return (
    <section className="space-y-3 max-w-2xl mx-auto">
      <h1 className="font-mplus1 font-bold text-2xl text-center">FAQs</h1>
      {Accordioncontent.map((item, index) => (
        <div className="collapse collapse-plus" key={item.title}>
          <input
            type="checkbox"
            name={item.title}
            defaultChecked={index == 0}
          />
          <div className="collapse-title text-xl font-medium">{item.title}</div>
          <hr className="w-5xl" />
          <div className="collapse-content">
            <p className="max-w-5xl">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Accordion;
