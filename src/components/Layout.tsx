import React from "react";
import styles from "@/styles/components/Layout.module.css";
import Link from "next/link";

export default function Layout({ children }: any) {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <Link href="/">
          <h1>Zach Barnes</h1>
        </Link>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/work">
            <li>Portfolio</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      {children}
      <footer className={styles.copyright}>
        <p>© Zach Barnes 2023.</p>
      </footer>
    </div>
  );
}
