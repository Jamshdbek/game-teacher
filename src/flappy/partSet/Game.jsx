import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Bird from "./Bird";
import Pipe from "./Pipe";
import Foreground from "./Foreground";
import BgImage from "./images/bg.png";
import { PiPlay } from "react-icons/pi";
import { TbPlayerPause } from "react-icons/tb";
import { setPlay } from "../../fullGame/store/reducers/control";
import { useNavigate, useNavigation } from "react-router-dom";
let gameLoop;
let pipeGenerator;

const Game = ({ status, start, fly }) => {
  const dispatcher = useDispatch();
  const [playButton, setPlayButton] = useState(false);
  const initialNodes = useSelector((state) => state.control.controlList);
  const isPlay = useSelector((state) => state.control.play);
  if (status === "game-over") {
    clearInterval(gameLoop);
    clearInterval(pipeGenerator);
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 32) {
      fly();
    }

    if (status !== "playing") {
      start();
    }
  };
  useEffect(() => {
    if (
      initialNodes.find((i) => i.id === "4") &&
      initialNodes.find((i) => i.id !== "5") &&
      isPlay
    ) {
      document.addEventListener("keypress", handleKeyPress);
      setTimeout(() => {
        fly();
        start();
      }, 100);
    }
    if (initialNodes.find((i) => i.id === "5") && isPlay) {
      start(true, isPlay);
    }
  }, [
    initialNodes.find((i) => i.id === "4"),
    initialNodes.find((i) => i.id === "5"),
    isPlay,
    playButton,
  ]);
  const navigation = useNavigate();
  useEffect(() => {
    dispatcher(setPlay(playButton));
  }, [isPlay, playButton]);
  return (
    <>
      {initialNodes.find((i) => i.id === "2") ? (
        <div className="w-full h-[90vh] items-center justify-center bg-[#0c0d10] relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#1f2024 1px, transparent 1px) linear-gradient(to right, #1f2024 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
              zIndex: 0,
            }}
          ></div>
          <div
            style={{
              position: "relative",
              width: 288,
              margin: "auto",
              textAlign: "center",
              marginTop: "10%",
              height: 512,
              background: `url(${BgImage})`,
              overflow: "hidden",
            }}
          >
            {initialNodes.find((i) => i.id === "3") && <Bird />}
            <Pipe />
            <Foreground />
          </div>
          {isPlay ? (
            <div
              className=" relative justify-center pt-[6%] flex items-center text-white gap-2 cursor-pointer "
              onClick={() => setPlayButton(!playButton)}
            >
              <TbPlayerPause
                className="border-white cursor-pointer"
                onClick={() => setPlayButton(!playButton)}
                size={30}
                style={{
                  color: "#ffffff",
                }}
              />
              <p>Pusa</p>
            </div>
          ) : (
            <div
              className=" relative justify-center pt-[6%] flex items-center text-white gap-2 cursor-pointer"
              onClick={() => navigation("/finish_game")}
            >
              <PiPlay
                className="border-white cursor-pointer"
                size={30}
                style={{
                  color: "#ffffff",
                  textAlign: "center",
                }}
              />
              <p>Play</p>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full h-[90vh] bg-[#0c0d10] relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#1f2024 1px, transparent 1px),
                          linear-gradient(to right, #1f2024 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>
      )}
    </>
  );
};

const fly = () => {
  return (dispatch) => {
    dispatch({ type: "FLY" });
  };
};

const start = (isGoo, isPlay) => {
  return (dispatch, getState) => {
    const { status } = getState().game;
    if (isGoo && isPlay) {
      gameLoop = setInterval(() => {
        dispatch({ type: "FALL" });
        dispatch({ type: "RUNNING" });

        check(dispatch, getState);
      }, 200);

      pipeGenerator = setInterval(() => {
        dispatch({ type: "GENERATE" });
      }, 3000);

      dispatch({ type: "START" });
    }
    if (status !== "playing") {
      gameLoop = setInterval(() => {
        dispatch({ type: "FALL" });
        dispatch({ type: "RUNNING" });

        check(dispatch, getState);
      }, 200);

      pipeGenerator = setInterval(() => {
        dispatch({ type: "GENERATE" });
      }, 3000);

      dispatch({ type: "START" });
    }
  };
};

const check = (dispatch, getState) => {
  const state = getState();
  const birdY = state.bird.y;
  const pipes = state.pipe.pipes;
  const x = state.pipe.x;
  const challenge = pipes
    .map(({ topHeight }, i) => {
      return {
        x1: x + i * 200,
        y1: topHeight,
        x2: x + i * 200,
        y2: topHeight + 100,
      };
    })
    .filter(({ x1 }) => {
      if (x1 > 0 && x1 < 288) {
        return true;
      }
    });

  if (birdY > 512 - 108) {
    dispatch({ type: "GAME_OVER" });
  }

  if (challenge.length) {
    const { x1, y1, x2, y2 } = challenge[0];

    if (
      (x1 < 120 && 120 < x1 + 52 && birdY < y1) ||
      (x2 < 120 && 120 < x2 + 52 && birdY > y2)
    ) {
      dispatch({ type: "GAME_OVER" });
    }
  }
};

const mapStateToProps = ({ game }) => ({ status: game.status });
const mapDispatchToProps = { start, fly };

export default connect(mapStateToProps, mapDispatchToProps)(Game);
