import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

/*import "./styles.css";

// useInput
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

function App() {
  const maxLen = (value) => !value.includes("@"); //value.length <= 10
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}*/

//useTabs
/*
const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};
*/

// // useEffect
// const App = () => {
//   const sayHello = () => console.log("hello");
//   const [number, setNumber] = useState(0);
//   const [aNumber, setAnumber] = useState(0);
//   useEffect(sayHello, [number]);
//   return (
//     <div className="App">
//       <div>Hi</div>
//       <button onClick={() => setNumber(number + 1)}>{number}</button>
//       <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
//     </div>
//   );
// };

// //useTitle
// const useTitle = (initialTitle) => {
//   const [title, setTitle] = useState(initialTitle);
//   const updateTitle = () => {
//     const htmlTitle = document.querySelector("title");
//     htmlTitle.innerText = title;
//   };
//   useEffect(updateTitle, [title]);
//   return setTitle;
// };

// const App = () => {
//   const titleUpdater = useTitle("Loading...");
//   setTimeout(() => titleUpdater("Home"), 5000);
//   return (
//     <div className="App">
//       <div>Hi</div>
//     </div>
//   );
// };

// // useRef + setTimeout
// const App = () => {
//   const potato = useRef();
//   setTimeout(() => potato.current.focus(), 1000);
//   return (
//     <div className="App">
//       <div>Hi</div>
//       <input ref={potato} placeholder="la" />
//     </div>
//   );
// };

// // useClick
// const useClick = (onClick) => {
//   const element = useRef();
//   useEffect(() => {
//     if (element.current) {
//       element.current.addEventListener("click", onClick);
//     }
//     return () => {
//       if (element.current) {
//         element.current.removeEventListener("click", onClick);
//       }
//     };
//   }, []);
//   return element;
// };
// const App = () => {
//   const sayHello = () => console.log("Say Hello");
//   const title = useClick(sayHello);
//   return (
//     <div className="App">
//       <h1 ref={title}>Hi</h1>
//     </div>
//   );
// };

// // useconfirm
// const useConfirm = (message = "", collback, rejection) => {
//   if (typeof collback !== "function") {
//     return;
//   }
//   const confirmAction = () => {
//     if (window.confirm(message)) {
//       collback();
//     } else {
//       rejection();
//     }
//   };
//   return confirmAction;
// };

// const App = () => {
//   const deleteWorld = () => console.log("Deleting the world...");
//   const abort = () => console.log("Aborted");
//   const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
//   return (
//     <div className="App">
//       <button onClick={confirmDelete}>Delete the world</button>
//     </div>
//   );
// };

// // usePreventLeave
// const usePreventLeave = () => {
//   const listener = (event) => {
//     event.preventDefault();
//     event.returnValue = "";
//   };
//   const enablePrevent = () => window.addEventListener("beforeunload", listener);
//   const disablePrevent = () =>
//     window.removeEventListener("beforeunload", listener);
//   return { enablePrevent, disablePrevent };
// };

// const App = () => {
//   const { enablePrevent, disablePrevent } = usePreventLeave();
//   return (
//     <div className="App">
//       <button onClick={enablePrevent}>Protect</button>
//       <button onClick={disablePrevent}>Unprotect</button>
//     </div>
//   );
// };

// // useBeforeLeave
// const useBeforeLeave = (onBefore) => {
//   useEffect(() => {
//     document.addEventListener("mouseleave", handle);
//     return () => document.removeEventListener("mouseleave", handle);
//   }, []);
//   if (typeof onBefore !== "function") {
//     return;
//   }
//   const handle = () => {
//     console.log("leaving");
//   };
// };
// const App = () => {
//   const begForLife = () => console.log("Plz dont leave");
//   useBeforeLeave(begForLife);
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//     </div>
//   );
// };

// // useFadeIn
// const useFadeIn = (duration = 1, delay = 0) => {
//   const element = useRef();
//   useEffect(() => {
//     if (element.current) {
//       const { current } = element;
//       current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
//       current.style.opacity = 1;
//     }
//   }, []);
//   if (typeof duration !== "number" || typeof delay !== "number") {
//     return;
//   }
//   return { ref: element, style: { opacity: 0 } };
// };

// const App = () => {
//   const fadeInH1 = useFadeIn(1, 2);
//   const fadeInP = useFadeIn(5, 10);
//   return (
//     <div className="App">
//       <h1 {...fadeInH1}>Hello</h1>
//       <p {...fadeInP}>lorem ipsum lalalal</p>
//     </div>
//   );
// };

// // useScroll
// const useScroll = () => {
//   const [state, setState] = useState({
//     x: 0,
//     y: 0,
//   });
//   const onScroll = (event) => {
//     setState({ y: window.scrollY, x: window.scrollX });
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);
//   return state;
// };

// const App = () => {
//   const { y } = useScroll();
//   return (
//     <div className="App" style={{ height: "1000vh" }}>
//       <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
//         Hello
//       </h1>
//     </div>
//   );
// };

//useFullScreen
const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="http://akns-images.eonline.com/eol_images" />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
