import { useNavigate } from "react-router-dom";
import { BsStars } from "react-icons/bs";
import photo from "../../assets/home_photo.png";

function HomePage() {
  const nav = useNavigate();
  return (
    <div className="flex w-full overflow-y-auto">
      <div className="w-12 bg-customPurple bg-[#7c3aed] min-h-[calc(100vh-41px)] p-2 "></div>
      <div>
        <div className="w-full  bg-white p-10 bg-inherit">
          <div>
            <button
              onClick={() => nav("/game-list")}
              className=" max-w-[300px] w-full h-full border  min-w-60 min-h-40 text-center flex items-center rounded-md cursor-pointer shadow-sm hover:shadow "
            >
              <div className="text-center m-auto  justify-center">
                <BsStars size={"30px"} color="#7c3aed" className=" m-auto" />
                <h1 className="p-2 rounded-md font-mono  font-semibold ">
                  O'yin yaratish
                </h1>
              </div>
            </button>
          </div>
          <br />
          <div className="flex items-center">
            <img className="w-[30vw] ml-14" src={photo} alt="404" />
            <h1 className=" text-[30px] font-mono font-semibold">
             Bolalar uchun boshlang'ich o'yin yaratish ko'nimkmalar 
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
