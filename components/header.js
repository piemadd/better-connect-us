import styles from "../styles/Home.module.css";
import PieroButton from "./piero/button";
import Link from "next/link";

export default function Header() {
  return (
    <section className={styles.header}>
      <PieroButton href={"/"} text={"Home"} />
      <PieroButton href={"/routes"} text={"Routes"} />
      <PieroButton href={"/about"} text={"About"} />
    </section>
  );
}
