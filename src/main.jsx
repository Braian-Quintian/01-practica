import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";

ReactDOM.createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
        <Header />
        <Nav />
        <Main />
    </React.StrictMode>
);