import FgImage from "./images/fg.png";

const Foreground = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 108,
        background: `url(${FgImage})`,
      }}
    ></div>
  );
};

export default Foreground;
