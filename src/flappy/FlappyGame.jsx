import React, { useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { Background, Controls, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Card, Grid, Modal, Text } from "@geist-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, todoAdded } from "../fullGame/store/reducers/control";
import robot from "../assets/robot_left.png";
import { GrFormNext } from "react-icons/gr";
import TypingText from "../components/TypingText";
import { FiCodepen } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
import { BaseButton } from "../components";
import Game from "./partSet/Game";

const FlappyGame = () => {
  const [temp, setTemp] = useState();

  const initialNodes = useSelector((store) => store.control.controlList);
  const currentStep = useSelector((store) => store.control.currentStep);
  const dispatch = useDispatch();

  const initialEdges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e1-4", source: "1", target: "4" },

    { id: "e3-4", source: "3", target: "4" },
    { id: "e2-5", source: "2", target: "5" },
  ];
  const [state, setState] = useState(false);
  const handlePushInit = () => {
    if (!temp) return;
    dispatch(todoAdded(temp));
    setTemp({});
    setState(false);
  };
  return (
    <>
      <div className="z-50 flex flex-row  ">
        {[1, 2, 3, 4, 5, 6].includes(currentStep) && (
          <div
            style={{ zIndex: 1000 }}
            className=" w-full  font-mono  bottom_line"
          >
            {currentStep === 1 && (
              <div className="flex  items-center justify-between">
                <img
                  src={robot}
                  width={"200px"}
                  alt=""
                  className=" left-0 top-1 "
                />
                <TypingText
                  text="Salom! Mening ismim Robbiy. Men bugun qiziqarli o'yin yasashga yordam beraman. 😊
                "
                />
              </div>
            )}
            {currentStep === 2 && (
              <div className="flex items-center justify-between">
                <img
                  src={robot}
                  width={"200px"}
                  alt=""
                  className=" left-0 top-1 "
                />
                <TypingText text=" Avvalo platforma bilan tanishib olsak! O'ng tarafingizdagi qism bu o'yinning ko'rinish qismi, ya'ni foydalanuvchi ko'radigan qism dasturlash tilida 'front' deb ataladi. 🧑‍💻 " />
              </div>
            )}
            {currentStep === 3 && (
              <div className="flex items-center justify-between">
                <img
                  src={robot}
                  width={"200px"}
                  alt=""
                  className=" left-0 top-1 "
                />
                <TypingText
                  text="Endi e'tiboringizni o'rtadagi katta qismga qarataman. Bu qism funksiyalar va elementlarning ketma-ketligini ko'rsatib turuvchi qism hisoblanadi.


                        Agar e'tibor bergan bo'lsangiz, u yerda (main) nomli element bor. U element eng asosiy elementlardan biri bo'lib, barcha elementlar shu funksiyaga ulangan bo'lishi kerak."
                />
              </div>
            )}
            {currentStep === 4 && (
              <div className="flex items-center justify-between">
                <img
                  src={robot}
                  width={"200px"}
                  alt=""
                  className=" left-0 top-1 "
                />
                <TypingText text="MAIN — bu dasturlash va o'yinlarda barcha elementlarning o'zaro aloqasini ta'minlab beruvchi asosiy qismdir. Ishlash jarayonida bunga o'zingiz guvoh bo'lasiz.⭐" />
              </div>
            )}
            {currentStep === 5 && (
              <div className="flex items-center justify-between">
                <img
                  src={robot}
                  width={"200px"}
                  alt=""
                  className=" left-0 top-1 "
                />
                <TypingText
                  text="Endi esa eng muhim qism — Elementlar qismi. Bu yerda (Element qo'shish) tugmasini bosish orqali o'yinga o'z elementingizni qo'sha olasiz.🤖"
                />
              </div>
            )}
            {currentStep === 6 && (
              <div className="flex items-center justify-between">
                <img
                  src={robot}
                  width={"200px"}
                  alt=""
                  className=" left-0 top-1 "
                />
                <TypingText
                  text="Va nihoyat, o'yinimizning ko'rinish qismini yaratamiz.
1. 'Element qo'shish' tugmasini bosib, 'Object' nomli elementni tanlashingiz kerak bo'ladi."
                />
              </div>
            )}
            <br />
            <BaseButton
              className=" absolute  top-2 right-2"
              onClick={() => dispatch(nextStep())}
              typeSet="success"
            >
              Keying <GrFormNext className=" ml-2" />
            </BaseButton>
          </div>
        )}
        {initialNodes.find((i) => i.id === "2") && currentStep <= 7 && (
          <div
            style={{ zIndex: 1000 }}
            className=" w-full  font-mono  bottom_line"
          >
            <div>
              {currentStep === 7 && (
                <div className="flex  items-center justify-between">
                  <img
                    src={robot}
                    width={"200px"}
                    alt=""
                    className=" left-0 top-1 "
                  />
                  <TypingText
                    text="Ajoyib! Bizning o'yinimiz ko'rina boshladi.😊

                  Xosh endi 🤔 

                (Player) — ya'ni qushni qo'shamiz, (player object) foydalanuvchilar boshqaradigan elementdir. "
                  />
                </div>
              )}
            </div>
            <BaseButton
              className=" absolute top-2 right-2"
              onClick={() => dispatch(nextStep())}
              typeSet="success"
            >
              Keying <GrFormNext className=" ml-2" />
            </BaseButton>
          </div>
        )}
        {initialNodes.find((i) => i.id === "3") && currentStep <= 9 && (
          <div
            style={{ zIndex: 1000 }}
            className=" w-full  font-mono  bottom_line"
          >
            <div>
              {currentStep === 8 && (
                <div className="flex  items-center justify-between">
                  <img
                    src={robot}
                    width={"200px"}
                    alt=""
                    className=" left-0 top-1 "
                  />
                  <TypingText text="Menimcha, o'yinimizning boshlang'ich ko'rinishini yaratib oldik. Endi esa funksiyalarga o'tamiz!" />
                </div>
              )}
              {currentStep === 9 && (
                <div className="flex  items-center justify-between">
                  <img
                    src={robot}
                    width={"200px"}
                    alt=""
                    className=" left-0 top-1 "
                  />
                  <TypingText text="Elementlarda (Action) bo'limidan 'Fly' nomli elementni tanlashingiz kerak. U bizga qushning harakatlanishini ta'minlab beradi." />
                </div>
              )}
            </div>
            <BaseButton
              className=" absolute top-2 right-2"
              onClick={() => dispatch(nextStep())}
              typeSet="success"
            >
              Keying <GrFormNext className=" ml-2" />
            </BaseButton>
          </div>
        )}
        {initialNodes.find((i) => i.id === "4") && currentStep < 12 && (
          <div
            style={{ zIndex: 1000 }}
            className=" w-full  font-mono  bottom_line"
          >
            <div>
              {currentStep === 10 && (
                <div className="flex  items-center justify-between">
                  <img
                    src={robot}
                    width={"200px"}
                    alt=""
                    className=" left-0 top-1 "
                  />
                  <TypingText text="Endi esa sinab ko'ramiz 🧑‍💻  " />
                </div>
              )}
              {currentStep === 11 && (
                <div className="flex  items-center justify-between">
                  <img
                    src={robot}
                    width={"200px"}
                    alt=""
                    className=" left-0 top-1 "
                  />
                  <TypingText text="(Front) qismidagi 'Play' tugmasini bosib, qushning harakatlanishini tekshirib ko'ramiz." />
                </div>
              )}
            </div>
            <BaseButton
              className=" absolute top-2 right-2"
              onClick={() => dispatch(nextStep())}
              typeSet="success"
            >
              Keying <GrFormNext className=" ml-2" />
            </BaseButton>
          </div>
        )}
        {initialNodes.find((i) => i.id === "4") && currentStep < 12 && (
          <div
            style={{ zIndex: 1000 }}
            className=" w-full  font-mono  bottom_line"
          >
            <div>
              {currentStep === 10 && (
                <div className="flex  items-center justify-between">
                  <img
                    src={robot}
                    width={"200px"}
                    alt=""
                    className=" left-0 top-1 "
                  />
                  <TypingText text=" Endi esa testlab ko'ramiz🧑‍💻  " />
                </div>
              )}
              {currentStep === 11 && (
                <div className="flex  items-center justify-between">
                  <img
                    src={robot}
                    width={"200px"}
                    alt=""
                    className=" left-0 top-1 "
                  />
                  <TypingText text="(Front) qismidagi 'Play' tugmasini bosib, qushning harakatlanishini tekshirib ko'ramiz. " />
                </div>
              )}
            </div>
            <BaseButton
              className=" absolute top-2 right-2"
              onClick={() => dispatch(nextStep())}
              typeSet="success"
            >
              Keying <GrFormNext className=" ml-2" />
            </BaseButton>
          </div>
        )}
        {currentStep > 12 && (
          <div
            style={{ zIndex: 1000 }}
            className=" w-full  font-mono  bottom_line"
          >
            <div>
              {currentStep === 13 && (
                <div className="flex  items-center justify-between">
                  <img
                    src={robot}
                    width={"200px"}
                    alt=""
                    className=" left-0 top-1 "
                  />
                  <TypingText text="Endi esa testlab ko'ramiz 🧑‍💻" />
                </div>
              )}
              {currentStep === 14 && (
                <div className="flex  items-center justify-between">
                  <img
                    src={robot}
                    width={"200px"}
                    alt=""
                    className=" left-0 top-1 "
                  />
                  <TypingText text="(Front) qismidagi play tugmasin bosib qushni haraktlanyatganin tekshirib ko'ramiz " />
                </div>
              )}
            </div>
            <BaseButton
              className=" absolute top-2 right-2"
              onClick={() => dispatch(nextStep())}
              typeSet="success"
            >
              Keying <GrFormNext className=" ml-2" />
            </BaseButton>
          </div>
        )}
        <Modal
          onClose={() => setState(false)}
          visible={state}
          className="w-full"
          width={"40vw"}
        >
          <Modal.Title>Maxsus Elementlar</Modal.Title>
          <Modal.Content>
            <div className=" flex gap-3 items-center mb-3">
              Objects - Abyektlar <FiCodepen />{" "}
            </div>
            <Grid.Container gap={2} justify="center">
              <Grid className=" cursor-pointer" xs={6}>
                <Card
                  shadow={temp?.id !== "2"}
                  width="100%"
                  height="50px"
                  onClick={() =>
                    setTemp({
                      id: "2",
                      position: { x: 30, y: 200 },
                      data: { label: "object", color: "blue" },
                    })
                  }
                >
                  <p>Object</p>
                </Card>
              </Grid>
              <Grid className=" cursor-pointer" xs={6}>
                <Card
                  shadow={temp?.id !== "3"}
                  width="100%"
                  height="50px"
                  onClick={() =>
                    setTemp({
                      id: "3",
                      position: { x: 40, y: 400 },
                      data: { label: "player", color: "green" },
                    })
                  }
                >
                  <p>Player</p>
                </Card>
              </Grid>
            </Grid.Container>
            <p className=" my-2" />
            <div className=" flex gap-3 items-center mb-3">
              Actions - Harakatlar <FiTrendingUp />{" "}
            </div>
            <Grid.Container gap={2} justify="center">
              <Grid xs={6}>
                <Card
                  className=" cursor-pointer"
                  shadow={temp?.id !== "4"}
                  width="100%"
                  height="50px"
                  onClick={() =>
                    setTemp({
                      id: "4",
                      position: { x: 500, y: 400 },
                      data: { label: "fly", color: "#ff8200" },
                    })
                  }
                >
                  <p>Fly</p>
                </Card>
              </Grid>
              {/* <Grid xs={6}>
                <Card
                  className=" cursor-pointer"
                  shadow={temp?.id !== "5"}
                  width="100%"
                  height="50px"
                  onClick={() =>
                    setTemp({
                      id: "5",
                      position: { x: 500, y: 400 },
                      data: { label: "action", color: "yellow" },
                    })
                  }
                >
                  <p>Action</p>
                </Card>
              </Grid> */}
            </Grid.Container>
          </Modal.Content>
          <div className=" flex justify-between">
            <button className=" max-w-[100px]" onClick={() => setState(false)}>
              Yopish
            </button>
            <BaseButton
              typeSet="success"
              className=" max-w-[100px]"
              onClick={handlePushInit}
            >
              Keyingi
            </BaseButton>
          </div>
        </Modal>
        <div className=" w-[400px] border">
          {currentStep === 5 && (
            <div className="  w-[210px]  max-h-[30vh] absolute z-10   min-h-[80vh]  opacity-50  bg-blue-400"></div>
          )}
          <div className=" flex p-2  items-center justify-between">
            <Text className="font-medium  text-2xl w-full">Elementlar</Text>
          </div>
          <hr />
          {[7, 8, 10].includes(currentStep) ? (
            <div
              className=" flex  p-4 border m-2 rounded-xl  items-center justify-between cursor-pointer hover:bg-gray-200 "
              onClick={() => setState(true)}
            >
              <p>Element qo'shish</p>
              <MdOutlineAddBox size={"30px"} />
            </div>
          ) : (
            <div className=" flex  p-4 border m-2 rounded-xl  items-center justify-between  opacity-40 cursor-not-allowed">
              <p>Element qo'shish</p>
              <MdOutlineAddBox size={"30px"} />
            </div>
          )}

          <div className=" p-2">
            {initialNodes.map((item) => (
              <div className="flex border   rounded-md mb-2">
                <p
                  className=" w-[10px] rounded-s-md rounded-l-b-md"
                  style={{
                    backgroundColor: item.data.color,
                  }}
                ></p>
                <p className=" py-2 pl-2">{item.data.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-2/3 z-50  relative opacity-100 flex">
          {currentStep === 3 && (
            <div className=" w-full  absolute z-10  min-h-full  opacity-50  shadow-sm bg-blue-400"></div>
          )}

          <div style={{ height: "100%", backgroundColor: "red", zIndex: -1 }}>
            <ReactFlow>
              <Background />
              <Controls />
            </ReactFlow>
          </div>
          <div className=" body_editor w-[60vw] border h-[90vh]">
            <ReactFlow nodes={initialNodes} edges={initialEdges}></ReactFlow>
          </div>
        </div>
        {/* view */}
        <div className=" w-1/2 border min-h-full transition-all duration-300 relative">
          {currentStep === 2 && (
            <div className=" w-full  absolute z-10   min-h-full  opacity-50  shadow-sm bg-blue-400"></div>
          )}
          <Game />
        </div>
      </div>
    </>
  );
};

export default FlappyGame;
