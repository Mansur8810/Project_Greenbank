import { footercontent } from "../constant";

const Footer = () => {
  return (
    <footer className="flex flex-wrap py-6 gap-20">
      <article className="text-xl">
        <div className="flex gap-3">
          <img src="/logo/Exclude.svg" alt="" className="font-mplus1" />
          <h1 className="font-bold">GreenBank</h1>
        </div>

        <p className="text-gray-400 max-w-80 my-5 ">
          Discover the power of our secure and rewarding credit cards
        </p>
      </article>
      <div className="flex flex-wrap justify-between gap-20">
        {footercontent.map((item) => (
          <article className="space-y-4" key={item.title}>
            <h1 className="font-bold text-sm">{item.title}</h1>
            <ul className="space-y-3 text-gray-400">
              {item.content.map((list) => (
                <li key={list}>{list}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
