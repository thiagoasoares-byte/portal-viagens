import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandIcon} aria-hidden="true">
            ✈
          </span>
          <span className={styles.brandText}>
            Rota Aberta
            <span className={styles.brandSub}>portal de viagens</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Navegação principal">
          <Link href="/" className={styles.navLink}>
            <span className={styles.navCode}>01</span> Início
          </Link>
          <Link href="/destinos" className={styles.navLink}>
            <span className={styles.navCode}>02</span> Destinos
          </Link>
        </nav>
      </div>
      <div className={styles.perforation} aria-hidden="true" />
    </header>
  );
}
