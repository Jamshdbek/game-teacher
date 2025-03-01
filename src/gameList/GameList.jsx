import { Card, Image, Text } from "@geist-ui/core";
import { useNavigate } from "react-router-dom";
import flappy from "../assets/flappy_beard.png";
import tik from "../assets/tic-tac-toe-game.png";
function GameList() {
  const nav = useNavigate();
  const gameLit = [
    {
      img: flappy,
      title: "Flappy Beard",
      des: "Oson va uchar Flappy beard o'yinin yasash",
    },
    // {
    //   img: tik,
    //   title: "Tic-Tac-Toe",
    //   des: "Tic-Tac-Toe (X & O) o'yinin yasash",
    // },
  ];
  return (
    <div className="w-full min-h-full gap-20 pt-40 flex items-center flex-row  content-evenly justify-center">
      {gameLit.map((elm) => (
        <Card
          width="400px"
          className="w-full rounded-md border-2 cursor-pointer  hover:shadow-sm "
          shadow
          onClick={() => nav("/create_flappy")}
        >
          <Image
            src={elm.img}
            height="200px "
            width="400px"
            className="mt-20"
            paddingTop={"20px"}
            draggable={false}
          />
          <Text h2 mb={0}>
            {elm.title}
          </Text>
          <Text type="secondary" small>
            {elm.des}
          </Text>
        </Card>
      ))}
    </div>
  );
}

export default GameList;
