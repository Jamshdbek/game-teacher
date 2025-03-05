import { useNavigate } from "react-router-dom";
import { BsStars } from "react-icons/bs";
import photo from "../../assets/page.png";
import game from "../../assets/capsule_616x353.jpg"
import set_com from "../../assets/Appnormals1.png"

function HomePage() {
  const nav = useNavigate();
  return (
    <div className="flex w-full overflow-hidden">
      {/* <div className="w-12 bg-customPurple bg-[#7c3aed]  gap3  fixed min-h-full">
        <div className="  border  p-2">
          <GiGamepadCross className=" text-white" size={"30px"} />
        </div>
        <div className="  border  p-2">
          <SiBookstack className=" text-white" size={"30px"} />
        </div>
      </div> */}
      <div className=" ">
        <div className="w-full  p-10 bg-inherit z-40 flex gap-3">
          <div style={{ zIndex: 33 }}>
            <button
              onClick={() => nav("/game-list")}
              className="max-w-[300px]  bg-white w-full h-full border min-w-60  text-center flex items-center rounded-md cursor-pointer shadow-sm hover:shadow"
            >
              <div className="text-center m-auto justify-center">
                <BsStars size={"30px"} color="#7c3aed" className="m-auto" />
                <h1 className="p-2 rounded-md font-mono font-semibold z-20">
                  O'yin yaratish
                </h1>
              </div>
            </button>
          </div>
          <div className=" max-h-[500px] p-2">
            <button
              onClick={() => nav("/labs")}
              className="max-w-[300px]  p-3 bg-white w-full h-full border min-w-60 min-h-40 text-center items-center rounded-md cursor-pointer shadow-sm hover:shadow"
            >
              <img src={game} alt="" />
              <h1 className="font-medium">Kitoblar va Loyihalar</h1>
            </button>
          </div>
          <div className=" max-h-[500px] p-2">
            <button
              className="max-w-[300px]  p-3 bg-white w-full h-full border min-w-60 min-h-40 text-center  items-center rounded-md cursor-pointer shadow-sm hover:shadow"
            >
              <img src={set_com} alt="" />
              <h1 className="  font-medium">Codeing va Dasturlash</h1>
            </button>
          </div>
        </div>
        <div style={{ zIndex: 1 }} className=" z-10  bottom-0 items-center  w-full  absolute  ">
          <img
            src={photo}
            alt="404"
            className="w-full h-full  object-cover z-10"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
