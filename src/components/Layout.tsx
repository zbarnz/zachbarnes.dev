import React, { useState, useEffect } from "react";
import styles from "@/styles/components/Layout.module.css";
import Link from "next/link";
import { Menu, Close } from "@mui/icons-material";
import { useRouter } from "next/router";

export default function Layout({ children }: any) {
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setShowMenu(false);
  }, [router.asPath]);

  function FullScreenMenu() {
    return (
      <div className={styles.fullMenu}>
        <div className={styles.closeIcon} onClick={() => setShowMenu(false)}>
          <Close fontSize="inherit" />
        </div>
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
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {showMenu && <FullScreenMenu />}
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
        <button className={styles.burger} onClick={() => setShowMenu(true)}>
          <Menu />
        </button>
      </nav>
      {children}
    </div>
  );
}
