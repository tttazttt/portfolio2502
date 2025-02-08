import reactImg from "./img/react.svg";

const Tab = () => {
  return (
    <div
      id="tabs"
      className="bg-[#201f1f] h-[50px] absolute left-15 border-r border-[#494949] text-lg text-[#ede9e9]"
    >
      <div className="w-[280px] h-[50px] inline-block text-left border-r-1 border-[#494949] border-b">
        <img
          src={reactImg}
          alt="reactロゴ"
          className="w-[15px] mx-[10px] py-[16.5px] inline"
        />
        <p className="inline align-middle ">type Profile = {"{"}name: "Kaz</p>
      </div>
      <div className="w-[220px] h-[50px] inline-block align-middle text-left border-r-1 border-[#494949] border-b">
        <img
          src={reactImg}
          alt="reactロゴ"
          className="w-[15px] mx-[10px] py-[16.5px] inline"
        />
        <p className="inline align-middle">let skill: string{"[]"};</p>
      </div>
      <div className="w-[200px] h-[50px] inline-block align-middle text-left border-r-1 border-[#494949] border-b">
        <img
          src={reactImg}
          alt="reactロゴ"
          className="w-[15px] mx-[10px] py-[16.5px] inline"
        />
        <p className="inline align-middle">Work.tsx</p>
      </div>
      <div className="w-[200px] h-[50px] inline-block align-middle text-left border-r-1 border-[#494949] border-b">
        <img
          src={reactImg}
          alt="reactロゴ"
          className="w-[15px] mx-[10px] py-[16.5px] inline"
        />
        <p className="inline align-middle">MyPortfolio.tsx</p>
      </div>
      <div className="w-[220px] h-[50px] inline-block align-middle text-left border-r-1 border-[#494949] border-b">
        <img
          src={reactImg}
          alt="reactロゴ"
          className="w-[15px] mx-[10px] py-[16.5px] inline"
        />
        <p className="inline align-middle">canClickThanks.tsx</p>
      </div>
    </div>
  );
};

export default Tab;
