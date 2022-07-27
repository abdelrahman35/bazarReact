import React from "react";
import styles from "./Home.module.css";
import headerImg from "../../assets/images/headerImg.png";
import itemCard from "../../assets/images/itemCard.png";

function Home() {
  return (
    <>
      <section>
        <div className="container-fluid p-0 m-0 mb-5">
          <header className={styles.banner}>
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-7">
                  <div className={styles.content}>
                    <h1>Create a beautiful user experience in no time</h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available,but the majority have suffered alteration in
                      some form,by injected humour,or randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>
                </div>
                <div className="col-5">
                  <img src={headerImg} alt="Logo" />
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className={` text-center  ${styles.deals}`}>
          <div
            className={`  d-flex flex-column justify-content-center align-items-center   ${styles.title}`}
          >
            <h3>BAZAAR DEALS!</h3>
            <div className={styles.HR}></div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className={`w-100 h-100`}></div>
              </div>
              <div className="col-6">
                <div className="card">
                  <img src="..." className="card-img-top flex" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="card justify-content-">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
