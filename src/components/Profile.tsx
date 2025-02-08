type props = {
  clicked: boolean;
};

const Profile = (props: props) => {
  return (
    <section
      className="h-[920px] bg-[#201f1f] text-[#c6c6c6] text-md container mx-auto flex justify-center items-center"
      id="profile"
    >
      <div className="w-[60%] tracking-[2px] bg-[#252526] flex-1 py-[150px] px-[50px] rounded-3xl">
        <p>
          <span className="text-[#0aa8f1]">const</span>{" "}
          <span className="text-[#A7D3E7] text-4xl">Profile</span> ={" "}
          <span className="text-[#7331ef]">{"{"}</span>
        </p>
        <p className="ml-[30px] py-3 pt-5">
          <span className="text-[#eef095]">name</span> : "Kazuki Ito",
        </p>
        <p className="ml-[30px] py-3">
          <span className="text-[#eef095]">age</span> : 36,
        </p>
        <p className="ml-[30px] py-3">
          <span className="text-[#eef095]">birth</span> :
          "神奈川県川崎市生まれ愛知県名古屋市育ち",
        </p>
        <p className="ml-[30px] py-3">
          <span className="text-[#eef095]">academicHistory</span> :
          "青山学院大学経済学部経済学科中退"
        </p>
        <p className="ml-[30px] py-3 pb-5">
          <span className="text-[#eef095]">Program</span> :
          "実務経験無し。職業訓練校のJava開発コースを受講し、初めてプログラミングに触れる。
          2ヶ月程の講座でHTML,CSS,JavaScript,Javaを一通り学ぶ為、大まかな概要を理解するにどどまる。コードから数年離れた後、再度興味が湧き独学で現在学習中。訓練校時代含め、マークアップ言語を2ヶ月程、JavaScript,TypeScript,Reactを計2ヶ月程学ぶ。その過程で現場での経験の重要度を認識し、今回応募到しました。",
        </p>
        <p className="ml-[30px] py-3">
          <span className="text-[#eef095]">like</span> :
          "ボクシング,サッカー,進撃の巨人,PSYCHO-PASS,APEX,valorant,ジンジャーエール,回胴"
        </p>
        {props.clicked ? (
          <p className="ml-[30px] py-3" id="objective">
            <span className="text-[#ef2e2e]">objective</span> :
            自身の性格に合っている仕事をようやく見つけることが出来たと感じました。圧倒的に知識,経験が足りないので学び続け、御社の成長に貢献が出来ると信じています。
          </p>
        ) : (
          ""
        )}
        <p>
          <span className="text-[#7331ef]">{"}"}</span>
        </p>
      </div>
    </section>
  );
};

export default Profile;
