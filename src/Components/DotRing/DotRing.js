import { useContext } from "react";
import { MouseContext } from "../../Context/mouse-context";
import useMousePosition from "../../Hooks/useMousePosition";
import "./DotRing.css";


const DotRing = () => {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);

    const { x, y } = useMousePosition();
  return (
    <>
            {/* 2. */}
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={"ring " + cursorType}
      ></div>
      <div
        className={"dot " + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default DotRing;