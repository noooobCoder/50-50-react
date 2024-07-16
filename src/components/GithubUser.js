import React, { useState, useEffect } from "react";
import styles from "../pages/GithubProfilesPage/styles.module.css";
import axios from "axios";

const GithubUser = ({ username }) => {
  const APIURL = "https://api.github.com/users/";
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios(APIURL + username);
        setUser(data);
        getRepos(username);
        setError("");
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setError("No Profile with this Username :(");
          setUser(null);
          setRepos([]);
        } else {
          setError("An error occurred. Please try again.");
        }
      }
    };

    const getRepos = async (login) => {
      try {
        const { data } = await axios(APIURL + login + "/repos?sort=created");
        setRepos(data.slice(0, 5));
      } catch (err) {
        setError("Problem in Fetching Repos :(");
      }
    };

    getUser();
  }, [username]);

  return (
    <>
      {error && (
        <div className={styles.card}>
          <h1>{error}</h1>
        </div>
      )}
      {user && (
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img className={styles.img} src={user.avatar_url} alt={user.name} />
          </div>
          <div className={styles.userInfo}>
            <h2 className={styles.name}>{user.name}</h2>
            <p className={styles.bio}>{user.bio}</p>
            <ul className={styles.ul}>
              <li className={styles.li}>
                {user.followers} <strong>Followers</strong>
              </li>
              <li className={styles.li}>
                {user.following} <strong>Following</strong>
              </li>
              <li className={styles.li}>
                {user.public_repos} <strong>Repos</strong>
              </li>
            </ul>
            <div className={styles.repos}>
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.repo}
                >
                  {repo.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GithubUser;
