import React from "react";
import styles from "./AboutUsPage.module.css";
import image1 from "../../assets/images/imageA.png";

function AboutUsPage() {
  return (
    <>
      <section>
        <div className={styles.Banner}>
          <h1>ABOUT BAZAAR !</h1>
        </div>
        <div className={styles.Middle}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
            efficitur neque. Ut diam quam, semper iaculis condimentum ac,
            vestibulum eu nisl.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Curabitur tempus urna at
            turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam
            quam, semper iaculis condimentum ac, vestibulum eu nisl.
          </p>
        </div>
        <div className={styles.LastTitle}>
          <div
            className={`  d-flex flex-column justify-content-center align-items-center  ${styles.title}`}
          >
            <h3>Our Team</h3>
            <div className={styles.HR}></div>
          </div>
          <div className=" container d-flex">
            <div className="row justify-content-center justify-content-lg-between text-center text-md-start align-items-center">
              <div className="col-12 col-md-7">
                <div className={styles.Last}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur tempus urna at
                  turpis condimentutum lobortis. Ut commodo efficitur neque. Ut
                  diam quam, semper iaculis condimentum ac, vestibulum eu
                  nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nunc vulputate libero et velit interdum, ac aliquet odio
                  mattis. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Curabitur tempus urna
                  at turpis condimentum lobortis. Ut commodo efficitur neque. Ut
                  diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div>
                  <img src={image1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUsPage;
