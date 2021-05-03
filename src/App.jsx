import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("描画");
  const [num, setNum] = useState(0);
  const [faceShow, setFaceShow] = useState(true);

  const onClickCountUp = () => {
    const newNum = num + 1;
    setNum(newNum);
    // if (newNum % 3 === 0) {
    //   faceShow || setFaceShow(true);
    // } else {
    //   faceShow && setFaceShow(false);
    // }
  };

  const onClickOnOff = () => {
    setFaceShow(!faceShow);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShow || setFaceShow(true);
    } else {
      faceShow && setFaceShow(false);
    }
  }, [num]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <h1 style={{ color: "red" }}>まいど</h1>
      <ColorfulMessage color="green">おおきにぃ</ColorfulMessage>
      <ColorfulMessage color="pink">もうかりまっかぁ</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickOnOff}>on/off</button>
      <p>{num}</p>
      {faceShow && <p>('ω')</p>}
    </>
  );
};

export default App;
