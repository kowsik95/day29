import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./node_modules/bootstrap/dist/css/bootstrap.all.min.css";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import TopBar from "./Topbar";
import User from "./User";
import CreateUsers from "./CreateUsers";
import UserContext, { UserProvider } from "./UserContext";
import { useState } from "react";
import UserView from "./UserView";
import UserEdit from "./UserEdit";

function App() {
  const [name, setName] = useState("Vaandaiyar");
  const [users, setUsers] = useState([]);
  return (
    <BrowserRouter>
      <div id="wrapper">
        <UserProvider value={{ name, setName, users, setUsers }}>
          <Sidebar></Sidebar>
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <TopBar></TopBar>
              <div class="container-fluid">
                <Routes>
                  <Route path="/Dashboard" element={<Dashboard></Dashboard>} />
                  <Route path="/Users" element={<User></User>} />
                  <Route
                    path="/CreateUsers"
                    element={<CreateUsers></CreateUsers>}
                  />
                  <Route
                    path="/user-view/:id"
                    element={<UserView></UserView>}
                  />
                  <Route
                    path="/user-edit/:id"
                    element={<UserEdit></UserEdit>}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
