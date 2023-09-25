/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-09-25 17:20:01
 * @LastEditors: ZJJ
 * @LastEditTime: 2023-09-25 17:31:19
 */
import React from "react";
import ReacDOM from "react-dom/client";

function App() {
  return <h1>Hello React</h1>;
}

//React v18: render root
const root = ReacDOM.createRoot(document.getElementById("root"));
//root.render(<App />);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before 18
//import React from "react";
//import ReacDOM from "react-dom"; //不需要client
//ReactDOM.render(<App />);
