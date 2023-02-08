import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("Hi :)");
    return () => console.log("bye :(");
  }, []);
  return (
    <h1>Hello</h1>
  )
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(e => !e)
  return (
    <div>
      {/* <Hello /> */}
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "show"}</button>
    </div>
  );
}

export default App;
