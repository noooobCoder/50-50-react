import styles from "./styles.module.css";
import React from "react";

const ContentPlaceholderPage = () => {
  return (
    <div className={styles.body}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <img
            className={styles.background}
            src="/images/01.JPG"
            alt="background-image"
          />
        </div>
        <div className={styles.cardBody}>
          <h3 className={styles.cardTitle}>魔女の旅々</h3>
          <p className={styles.cardExcerpt}>
            この魔女の証であるブローチを付け、灰色の髪をなびかせて、その美しさと才能の輝きに、太陽さえも思わず目を細めてしまうほどの美女は、誰でしょうか？　そう、私です
          </p>
          <div className={styles.author}>
            <div className={styles.authorImg}>
              <img
                className={styles.profile}
                src="/images/05.JPG"
                alt="profile-img"
              />
            </div>
            <div className={styles.authorDetails}>
              <strong className={styles.name}>Elaina</strong>
              <small className={styles.date}>Oct 17, 2024</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPlaceholderPage;
