import Image from "next/image";
import { Content, Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GitHub, LinkedIn } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
const router = useRouter();

  return (
    <>
      <header className={styles.jumbotron}>
        <h1>ZACH BARNES</h1>
        <h3>SOFTWARE ENGINEER</h3>
      </header>
      <main>
        <section className={styles.mainButtons}>
          <button onClick={() => router.push("/about")}>About</button>
          <button onClick={() => router.push("/work")}>Work</button>
          <button onClick={() => router.push("/contact")}>Contact</button>
        </section>
        <section className={styles.secondaryButtons}>
          <button>
            <GitHub fontSize="large" />
          </button>
          <button>
            <LinkedIn fontSize="large" />
          </button>
        </section>
      </main>
      <footer className={styles.copyright}>
        <p>© Zach Barnes 2023.</p>
      </footer>
    </>
  );
}
