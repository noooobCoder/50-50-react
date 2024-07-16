import React, { useState } from "react";
import styles from "./styles.module.css";
import GithubUser from "../../components/GithubUser";
// import axios from "axios";

const GithubProfilesPage = () => {
  const [username, setUsername] = useState("");
  const [searchUser, setSearchUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username) {
      setSearchUser(username);
      setUsername("");
    }
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className={styles.body}>
      <form className={styles.userForm} onSubmit={handleSubmit}>
        <i className={`${styles.icon} fa fa-search icon`}></i>
        <input
          className={styles.input}
          type="text"
          placeholder="Search a Github User"
          value={username}
          onChange={handleChange}
        />
      </form>
      <main className={styles.main}>
        {searchUser && <GithubUser username={searchUser} />}
      </main>
    </div>
  );
};

export default GithubProfilesPage;
