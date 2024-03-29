import styles from "./Cards.module.css";
const cardsArray = [
  {
    id: 1,
    img: "/icon-animation.svg",
    title: "Animation",
    info: "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
    btn: "Get Started",
  },
  {
    id: 2,
    img: "/icon-design.svg",
    title: "Design",
    info: "Create beautiful, usable interfaces to help shape the future of how the web looks.",
    btn: "Get Started",
  },
  {
    id: 3,
    img: "/icon-photography.svg",
    title: "Photography",
    info: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
    btn: "Get Started",
  },
  {
    id: 4,
    img: "/icon-crypto.svg",
    title: "Crypto",
    info: "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
    btn: "Get Started",
  },
  {
    id: 5,
    img: "/icon-business.svg",
    title: "Business",
    info: "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
    btn: "Get Started",
  },
];
export const Cards = () => {
  return (
    <div className={styles.cards_container}>
      <h1 className={styles.card1}>Check out our most popular courses!</h1>
      {cardsArray.map((card) => (
        <div className={styles.card} key={card.id}>
          <img className={styles.icon_img} src={card.img} alt={card.title} />
          <h3>{card.title}</h3>
          <p>{card.info}</p>
          <button>{card.btn}</button>
        </div>
      ))}
    </div>
  );
};
