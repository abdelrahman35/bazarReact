import React from "react";
import styles from "./Home.module.css";
import headerImg from "../../assets/images/headerImg.png";

function Home() {
  return (
    <>
      <section>
        <header className={styles.banner}>
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-7">
                <div className={styles.content}>
                  <h1>Create a beautiful user experience in no time</h1>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available,but the majority have suffered alteration in some
                    form,by injected humour,or randomised words which don't look
                    even slightly believable.
                  </p>
                </div>
              </div>
              <div className="col-5">
                <img src={headerImg} alt="Logo" />
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
}

export default Home;
