import DownloadButton from "../components/DownloadButton";
import { downloadContent } from "../constant";

const Manage = () => {
  return (
    <section className="flex flex-wrap gap-y-5  justify-evenly items-center overflow-x-hidden md:py-32 py-16">
      <div className="space-y-4 ">
        <h1 className="text-4xl font-bold font-mplus1 max-w-lg">
          Easy way to manage your finances
        </h1>
        <p className="max-w-lg text-lg text-gray-500 ">
          Easy to use mobile app that support on android and ios.
        </p>
        <div className="flex gap-3">
     <div>
      <article className=" flex gap-3">
        {downloadContent.map((item) => (
          <DownloadButton key={item.title}{...item}/>
        ))}
      </article>
     </div>
        </div>
      </div>
      <figure>
        <img
          src="/testimonial/mobile.svg"
          width={604}
          height={805}
          className="rounded-lg object-contain "
        />
      </figure>
    </section>
  );
};
export default Manage;
