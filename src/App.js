import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🦘": "Kangaroo",
  "🦨": "Skunk",
  "🦡": "Badger",
  "🦔": "HedgeHog",
  "🦧": "Orangutan",
  "🦖": "T-Rex",
  "🦕": "Sauropod",
  "🦥": "Sloth",
  "🦙": "Llama",
  "🐏": "Ram"
};

var animalist = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Either it is Not An Animal or it is not in Database.";
    }
    setMeaning(meaning);
  }
  function outputHandler(item) {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Find Animal</h1>
      <input onChange={emojiInputHandler}></input>
      <div
        style={{ fontSize: "25px", fontWeight: "bold", margin: "1rem auto" }}
      >
        {meaning}
      </div>
      <div id="output" style={{ margin: "1.4rem auto" }}>
        {animalist.map((item) => {
          return (
            <span onClick={() => outputHandler(item)} key={item}>
              {" "}
              {item}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
