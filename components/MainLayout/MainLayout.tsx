import React from "react";
import styles from "../../styles/components/MainLayout.module.scss";
import Image from "next/image";
import { BottomLeftDots, TopRightDots } from "../Dots";

export const MainLayout = () => {
  return (
    <div className={styles.main}>
      <div className={styles.layout}>
        <div className={styles.main__layout__wrapper}>
          <div className={styles.left__layout}>
            <div className={styles.banner__image}>
              <div className={styles.image__border}>
                <Image src={"/banner1.png"} height={700} width={720} />
              </div>
              <TopRightDots />
              <BottomLeftDots />
            </div>
          </div>
          <div className={styles.right__layout}>div3</div>
        </div>
      </div>
    </div>
  );
};
