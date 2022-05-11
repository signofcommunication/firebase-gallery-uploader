import { Login, Register, Reset, Private, Home, AddPost } from "./components";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<Private />}>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route exact path="/add-post" element={<Private />}>
          <Route exact path="/add-post" element={<AddPost />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/forgot-password" element={<Reset />} />
      </Routes>
    </Fragment>
  );
}

export default App;
