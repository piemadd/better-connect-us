import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function PieroButton({href, text}) {
  return (
    <Link href={href}>
      <a>
        <h3 className={styles.pieroButton}>{text}</h3>
      </a>
    </Link>
  );
}
