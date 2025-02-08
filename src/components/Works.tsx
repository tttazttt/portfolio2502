import siteImg from "./img/site.png";

const Work = () => {
  return (
    <section className="mt-[300px]" id="works">
      <div className="container mx-auto h-screen text-center">
        <h2 className="text-5xl text-[#eef095]">
          Works
          <span className="text-[#404040] tracking-[2px] text-2xl pl-[5px]">
            {"()"}
          </span>
        </h2>
        <ul className="flex flex-wrap pt-[50px]">
          <li className="w-[33%] p-[20px]">
            <a href="#">
              <img
                src={siteImg}
                className="hover:transform hover:duration-500 hover:-translate-y-5"
              ></img>
            </a>
          </li>
          <li className="w-[33%] p-[20px]">
            <a href="#">
              <img
                src={siteImg}
                className="hover:transform hover:duration-500 hover:-translate-y-5"
              ></img>
            </a>
          </li>
          <li className="w-[33%] p-[20px]">
            <a href="#">
              <img
                src={siteImg}
                className="hover:transform hover:duration-500 hover:-translate-y-5"
              ></img>
            </a>
          </li>
          <li className="w-[33%] p-[20px]">
            <a href="#">
              <img
                src={siteImg}
                className="hover:transform hover:duration-500 hover:-translate-y-5"
              ></img>
            </a>
          </li>
          <li className="w-[33%] p-[20px]">
            <a href="#">
              <img
                src={siteImg}
                className="hover:transform hover:duration-500 hover:-translate-y-5"
              ></img>
            </a>
          </li>
          <li className="w-[33%] p-[20px]">
            <a href="#">
              <img
                src={siteImg}
                className="hover:transform hover:duration-500 hover:-translate-y-5"
              ></img>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Work;
