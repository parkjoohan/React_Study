import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(["남자코트 추천", "강남 우동맛집", "파이썬독학"]);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');

  // function 제목변경() {
  //   var newArray = [...글제목];
  //   newArray[0] = "여자코트 추천";
  //   글제목변경(newArray);
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {글제목.map(function (글, i) {
        return (
          <div className="list">
            <h3 onClick={() => {누른제목변경(i)}}>{글}{" "} <span onClick={() => { 따봉변경(따봉 + 1); }}>👍</span>{" "}{따봉}</h3>
            <p>1월 15일 발행</p>
            <hr />
          </div>
        );
      })}

      <input />

      <button onClick={() => modal변경(!modal)}>열고닫기</button>
      {modal === true ? <Modal 글제목={글제목} 누른제목={누른제목} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <h2>제목{props.글제목[props.누른제목]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
}

export default App;
