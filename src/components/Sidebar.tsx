import x from "./img/x.png";
import instagram from "./img/instagram.png";
import github from "./img/github.png";
import youtube from "./img/youtube.png";

const Sidebar = () => {
  return (
    <div
      id="sidebar"
      className="w-[60px] absolute text-center bg-[#201f1f] border border-[#494949] border-t-0"
    >
      <a href="#" className="">
        <img src={x} className="w-[40px] ml-[10px] mt-[40px]" alt="xのロゴ" />
      </a>
      <a href="#">
        <img
          src={instagram}
          className="w-[40px] ml-[10px] mt-[40px]"
          alt="instagramのロゴ"
        />
      </a>
      <a href="https://github.com/tttazttt">
        <img
          src={github}
          className="w-[40px] ml-[10px] mt-[40px]"
          alt="githubのロゴ"
        />
      </a>
      <a href="#">
        <img
          src={youtube}
          className="w-[40px] ml-[10px] mt-[40px]"
          alt="xのロゴ"
        />
      </a>
    </div>
  );
};

export default Sidebar;
