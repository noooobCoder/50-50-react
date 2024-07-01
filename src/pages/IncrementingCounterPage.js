import React from "react";
import styles from "../styles/IncrementingCounterPage.module.css";
import Counter from "../components/Counter";

const IncrementingCounterPage = () => {
  const iconClasses = [
    {
      id: 1,
      name: "Twitter",
      icon: `fab fa-twitter fa-3x`,
      data: 12000,
      text: "Twitter Followers",
    },
    {
      id: 2,
      name: "Youtube",
      icon: `fab fa-youtube fa-3x`,
      data: 5000,
      text: "Youtube Followers",
    },
    {
      id: 3,
      name: "Facebook",
      icon: `fab fa-facebook fa-3x`,
      data: 7500,
      text: "Facebook Fans",
    },
  ];

  return (
    <div className={styles.body}>
      {iconClasses.map((iconClass) => (
        <Counter
          key={iconClass.id}
          icon={iconClass.icon}
          data={iconClass.data}
          text={iconClass.text}
        />
      ))}
    </div>
  );
};

export default IncrementingCounterPage;
