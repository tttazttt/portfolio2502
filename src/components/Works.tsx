import siteImg from "./img/site.png";
import acatoftoday from "./img/a-cat-of-today.png";
import pastelColorPicker from "./img/pastel-color-picker.png";
import primitivePachinko from "./img/primitive-pachinko.png";
import quizApp from "./img/quiz-app.png";

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
            <a href="https://a-cat-of-today.vercel.app/">
              <img
                src={acatoftoday}
                className="hover:transform hover:duration-500 hover:-translate-y-5"
              ></img>
            </a>
          </li>
          <li className="w-[33%] p-[20px]">
            <a href="https://pastel-color-picker.vercel.app/">
              <img
                src={pastelColorPicker}
                className="hover:transform hover:duration-500 hover:-translate-y-5"
              ></img>
            </a>
          </li>
          <li className="w-[33%] p-[20px]">
            <a href="https://primitive-pachinko.vercel.app/">
              <img
                src={primitivePachinko}
                className="hover:transform hover:duration-500 hover:-translate-y-5"
              ></img>
            </a>
          </li>
          <li className="w-[33%] p-[20px]">
            <a href="https://quiz-app-sand-ten.vercel.app/">
              <img
                src={quizApp}
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
