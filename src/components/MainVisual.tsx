type ClickHandler = () => void;
type Props = {
  clickHandler: ClickHandler;
};

const MainVisual = (props: Props) => {
  return (
    <section
      id="main-visual"
      className="bg-[#252526] text-[#c6c6c6] text-lg md:text-2xl tracking-wider"
    >
      <div className="container lg:w-[80%] sm:mx-auto">
        <p className="py-6 pt-40 ml-20 lg:pt-25">
          const myPortfolio = (
          <div className="inline-block hover:transform hover:duration-500 hover:-translate-y-2">
            <span className="text-2xl lg:text-5xl text-[#A7D3E7]">
              <a href="#profile" className="hover:text-[#c6e6f3]">
                profile
              </a>
            </span>
          </div>
          : Profile) =&gt; {"{"}
        </p>
        <p className="py-6 ml-35">let future: string = "";</p>
        <p className="py-6 ml-35">
          for{"("} let i = 0; i &lt;{" "}
          <div className="inline-block hover:transform hover:duration-500 hover:-translate-y-2">
            <span className="text-3xl sm:text-5xl text-[#0aa8f1]">
              <a href="#skills" className="hover:text-[#78bddd] transition">
                skills
              </a>
            </span>
          </div>
          .length ; i++ {")"} {"{"}{" "}
        </p>
        <p className="py-6 ml-50">
          future +={" "}
          <div className="inline-block hover:transform hover:duration-500 hover:-translate-y-2">
            <span className="text-3xl sm:text-5xl text-[#eef095]">
              <a href="#works" className="hover:text-[#fafad5] transition">
                works
              </a>
            </span>
          </div>
          {"("} skill{"[ i ])"};
        </p>
        <p className="py-6 ml-35">{"};"}</p>
        <p className="py-6 ml-35">
          const thanks: string = future +{" "}
          <div className="inline-block hover:transform hover:duration-500 hover:-translate-y-2">
            <span className="text-3xl sm:text-5xl text-[#ef2e2e]">
              <a
                href="#profile"
                className="hover:text-[#f08888] transition"
                onClick={props.clickHandler}
              >
                profile.objective
              </a>
            </span>
          </div>
        </p>
        <p className="py-6 ml-35">
          return{" "}
          <div className="inline-block hover:transform hover:duration-500 hover:-translate-y-2">
            <span className="text-3xl sm:text-5xl text-[#4BC3AB]">
              <a href="#thanks" className="hover:text-[#aaf2e3] transition">
                thanks
              </a>
            </span>
          </div>
          ;
        </p>
        <p className="pt-6 ml-20">{"};"}</p>
      </div>
    </section>
  );
};

export default MainVisual;
