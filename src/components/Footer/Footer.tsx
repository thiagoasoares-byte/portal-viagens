import styles from "./Footer.module.css";

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.brand}>Rota Aberta</p>
        <p className={styles.meta}>
          Projeto de estudo com Next.js — listagem e rotas dinâmicas de
          destinos turísticos.
        </p>
        <p className={styles.copy}>© {anoAtual} · feito por Thiago Alves Soares</p>
      </div>
    </footer>
  );
}
