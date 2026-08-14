import Link from "next/link";
import styles from "./not-found.module.css";

export default function DestinoNotFound() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.stamp}>404</span>
      <h1 className={styles.title}>Este destino saiu do mapa</h1>
      <p className={styles.subtitle}>
        Não encontramos nenhum destino com esse endereço. Que tal voltar
        para a listagem completa?
      </p>
      <Link href="/destinos" className={styles.cta}>
        Ver todos os destinos →
      </Link>
    </div>
  );
}
