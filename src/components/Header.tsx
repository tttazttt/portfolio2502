const Header = () => {
  return (
    <header className="h-[40px] bg-[#1E1E1E] relative flex items-center border border-[#494949]">
      <ul className="">
        <li>
          <div className="circle bg-[#FF5F57] size-[12px] rounded-[50%] absolute top-3.5 left-3"></div>
        </li>
        <li>
          <div className="circle bg-[#FEBD2D] size-[12px] rounded-[50%] absolute top-3.5 left-8"></div>
        </li>
        <li>
          <div className="circle bg-[#2AC840] size-[12px] rounded-[50%] absolute top-3.5 left-13"></div>
        </li>
      </ul>
      <h1 className="text-[#E7E7E7] w-[40%] h-[28px] text-center mx-auto bg-[#3C3C3C] rounded-md border border-[#585858]">
        MyPortfolio
      </h1>
    </header>
  );
};

export default Header;
