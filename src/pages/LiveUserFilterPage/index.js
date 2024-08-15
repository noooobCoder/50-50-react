import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const LiveUserFilter = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://randomuser.me/api?results=50");
      const { results } = await res.json();

      setUsers(results);
    };
    getData();
  }, []);

  const highlightSearch = (text, search) => {
    if (!search) return text;
    const regex = new RegExp(`(${search})`, "gi");
    return text.replace(regex, "<strong>$1</strong>");
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h4 className={styles.title}>Live User Filter</h4>
          <small className={styles.description}>
            Search by name and/or location
          </small>
          <input
            className={styles.search}
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </header>
        <ul className={styles.userList}>
          {users
            .filter((user) => {
              const fullName = `${user.name.first} ${user.name.last}`;
              return (
                fullName.toLowerCase().includes(search.toLowerCase()) ||
                user.location.country
                  .toLowerCase()
                  .includes(search.toLowerCase())
              );
            })
            .map((user) => (
              <li key={user.login.uuid}>
                <img src={user.picture.large} alt={user.name.first} />
                <div className={styles.userInfo}>
                  <h4
                    dangerouslySetInnerHTML={{
                      __html: highlightSearch(
                        `${user.name.first} ${user.name.last}`,
                        search
                      ),
                    }}
                  />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: highlightSearch(
                        `${user.location.city}, ${user.location.country}`,
                        search
                      ),
                    }}
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default LiveUserFilter;
