import reactImg from "./img/react.svg";
import tailwindcssImg from "./img/tailwindcss.svg";

const Footer = () => {
  return (
    <footer className="text-[#737272] h-[30px]">
      <div className="container text-center mx-auto">
        <p className="border-t border-dotted border-[#545353] pt-[10px] pb-[20px]">
          <small>
            This page is made with React
            <img
              src={reactImg}
              alt="reactのロゴ"
              className="h-[15px] inline-block px-[3px]"
            />
            and Tailwind Css
            <img
              src={tailwindcssImg}
              alt="tailwindcssのロゴ"
              className="h-[12px] inline-block px-[3px]"
            />
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
