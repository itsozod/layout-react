import styles from "./CourseContainer.module.css";

export const CourseContainer = () => {
  return (
    <>
      <div className={styles.course_container}>
        <div className={styles.info_container}>
          <h1 style={{fontSize: "40px", marginBottom: "10px"}}>Maximize skill, minimize budget</h1>
          <p style={{marginBottom: "10px"}}>
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </p>
          <button className={styles.started_btn}>Get started</button>
        </div>
        <div className={styles.picture}>
          <picture>
            <source
              srcSet="/image-hero-mobile.png"
              media="(max-width: 768px)"
            ></source>

            <source
              srcSet="/image-hero-tablet.png"
              media="(max-width: 1200px)"
            ></source>

            <img
              src="/image-hero-desktop.png"
              alt="Responsive Image"
              className={styles.default_img}
            ></img>
          </picture>
        </div>
      </div>
    </>
  );
};
