import React, { useState } from "react";

const citrus = ["lime", "lemon", "orange"];
const fruits = ["apple", ...citrus, "banana"];
console.log(fruits);

function App() {
  const [changedevents, setchangedevent] = useState("");
  const [lastevents, setlastevents] = useState("");
  const [emailevent, setemailevent] = useState("");
  function changedevent(event) {
    setchangedevent(event.target.value);
    const firstname = event.target.value;
    console.log(firstname);
  }

  function lastevent(event) {
    setlastevents(event.target.value);
    const lastname = event.target.value;

    console.log(lastname);
  }
  function clicked(event) {
    setlastevents("");
    setchangedevent("");
  }
  function emailed(event) {
    setemailevent(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {changedevents} {lastevents}{" "}
      </h1>
      <p>{emailevent}</p>
      <input
        value={changedevents}
        onChange={changedevent}
        type="text"
        placeholder="What's your first name?"
      />
      <input
        value={lastevent}
        onChange={lastevent}
        type="text"
        placeholder="Last name"
      />
      <input type="text" placeholder="Email" onChange={emailed} />

      <button className="rdn" onClick={clicked}>
        Submit
      </button>
    </div>
  );
}
export default App;
