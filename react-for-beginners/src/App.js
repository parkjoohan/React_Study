import { useState, useEffect } from "react";

/*useEffect : render를 한번만 진행하고자 할때 사용 (ex. API를 한번만 받아올때)*/
/*
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  // useEffect(() => {
  //   if (keyword !== "" && keyword.length > 5) {
  //     console.log("I run when 'keyword' changes.", keyword);
  //   }
  // }, [keyword]);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter changes.");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
*/

// // version 1
// function Hello() {
//   useEffect(() => {
//     console.log("created :)");
//     // cleanup function
//     return () => console.log("destroyed :(");
//   }, []);
//   return <h1>Hello</h1>;
// }

// //version 2
// function Hello() {
//   function destroyed() {
//     console.log("destroyed :(");
//   }
//   function created() {
//     console.log("created :)");
//     return destroyed;
//   }
//   useEffect(created, []);
//   return <h1>Hello</h1>;
// }

// //version 3
// function Hello() {
//   useEffect(function () {
//     console.log("created :)");
//     return function () {
//       console.log("destroyed :(");
//     };
//   }, []);
//   return <h1>Hello</h1>;
// }

//version 4
function Hello() {
  useEffect(function () {
    console.log("created :)");
    return () => console.log("destroyed :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
