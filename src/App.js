import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PersonnelTab from "./components/personnelTab";
import DepartmentTab from "./components/departmentTab";
import LoginForm from "./components/common/loginForm";
import axios from "axios";
import "./App.css";
import RegisterForm from "./components/common/registerForm";

const apiEndpoint = "https://6304c49194b8c58fd724aabc.mockapi.io/api/v1/user";

class App extends Component {
  state = {
    users: [],
  };

  login = async () => {
    // pending
    const { data: users } = await axios.get(apiEndpoint);
    this.setState({ users });
  };

  register = async (e) => {
    // create correct format compatible object for server
    const obj = {
      name: "Kaleb Besufikad",
      password: "Cal@ohm",
      email: "kworkalemhu@ohmswich.com",
    };
    // pass the data to server
    const { data: user } = await axios.post(apiEndpoint, obj);
    console.log(user);
  };
  render() {
    return (
      <React.Fragment>
        <main>
          <Router>
            <Routes>
              <Route path="/" element={<PersonnelTab />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/login" element={<LoginForm login={this.login} />} />
              <Route
                path="/personnel"
                element={<PersonnelTab register={this.register} />}
              />
              <Route path="/department" element={<DepartmentTab />} />
            </Routes>
            {/* FOOTER */}
          </Router>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
