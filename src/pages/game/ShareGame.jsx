
function ShareGame() {
  return (
    <div className=" justify-center  items-center  text-center bg-black h-full ">
      <div className="justify-center flex items-center text-center bg-black  min-h-[calc(100vh-42px)]">
        <iframe
          src="https://playcanv.as/p/2OlkUaxF/"
          style={{
            width: "100%",
            height: "80vh",
            border: "none",
          }}
        ></iframe>
      </div>
      <p className=" font-mono top-[84%] left-[36.8%] p-4 text-white bg-black absolute  m-auto">
        Harakatlantrish uchun Start tugmasin bosing
      </p>
    </div>
  );
}

export default ShareGame;
