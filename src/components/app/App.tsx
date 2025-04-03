import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import styles from "./App.module.scss";
import { Home } from "../home/home";
import Account from "../account/Account";
import Login from "../account/Login";
// import { Login } from "../login/Login";
// import SignUp from "../signup/SignUp";
// import NewContact from '../newContact/NewContact'
// import EditContact from "../editContact/EditContact";
// import ContactsList from "../home/ContactsList";

const App: FC = () => (
  <Router>
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/watchlist" element={<Watchlist />} /> */}
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  </Router>
);

export default App