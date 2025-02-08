import htmlImg from "./img/html.svg";
import cssImg from "./img/css.svg";
import jsImg from "./img/js.svg";
import tsImg from "./img/ts.svg";
import reactImg from "./img/react.svg";
import tailwindcssImg from "./img/tailwindcss.svg";

const Skill = () => {
  return (
    <section
      className="pt-[50px] text-center h-screen text-[#404040]"
      id="skills"
    >
      <h2 className="text-[#0aa8f1] text-5xl">
        Skills
        <span className="text-[#404040] text-xl tracking-[2px] pl-[5px]">
          {"[] ="}
        </span>
      </h2>
      <p className="text-[#404040] text-left pl-[20px] pt-[20px]">{"["}</p>
      <div className="container mx-auto">
        <ul className="flex flex-wrap ">
          <li className="w-[33%] p-[30px] text-right">
            <img
              src={htmlImg}
              alt="html5のロゴ"
              className="w-[70%] mx-auto pt-[30px]"
            />
            <span className="text-2xl">,</span>
          </li>
          <li className="w-[33%] p-[30px] text-right">
            <img
              src={cssImg}
              alt="css3のロゴ"
              className="w-[70%] mx-auto pt-[30px]"
            />
            <span className="text-2xl">,</span>
          </li>
          <li className="w-[33%] p-[30px] text-right">
            <img
              src={jsImg}
              alt="javascriptのロゴ"
              className="w-[70%] mx-auto pt-[30px]"
            />
            <span className="text-2xl">,</span>
          </li>
          <li className="w-[33%] p-[30px] text-right">
            <img
              src={tsImg}
              alt="typescriptのロゴ"
              className="w-[70%] mx-auto pt-[30px]"
            />
            <span className="text-2xl">,</span>
          </li>
          <li className="w-[33%] p-[30px] text-right">
            <img
              src={reactImg}
              alt="reactのロゴ"
              className="w-[70%] mx-auto pt-[30px]"
            />
            <span className="text-2xl">,</span>
          </li>
          <li className="w-[33%] p-[30px] text-right">
            <img
              src={tailwindcssImg}
              alt="tailwindcssのロゴ"
              className="w-[70%] mx-auto mt-[55px]"
            />
          </li>
        </ul>
      </div>
      <p className="text-[#404040] text-right pr-[20px] pt-[20px]">{"]"}</p>
    </section>
  );
};

export default Skill;
