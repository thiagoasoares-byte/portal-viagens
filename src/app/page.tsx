import Link from "next/link";
import { destinos } from "@/data/destinos";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Portal de viagens</span>
          <h1 className={styles.title}>
            Um roteiro pelos <em>cantos do Brasil</em> que ainda
            valem a pena ser descobertos.
          </h1>
          <p className={styles.subtitle}>
            Do arquipélago mais preservado do Atlântico às dunas douradas do
            cerrado, reunimos {destinos.length} destinos com informações
            reais sobre clima, época ideal e o que fazer por lá.
          </p>
          <Link href="/destinos" className={styles.cta}>
            Explorar destinos
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className={styles.preview}>
        <div className={styles.previewInner}>
          <p className={styles.previewLabel}>Na mala esta temporada</p>
          <ul className={styles.previewList}>
            {destinos.slice(0, 4).map((destino) => (
              <li key={destino.id} className={styles.previewItem}>
                <span className={styles.previewCode}>{destino.codigo}</span>
                {destino.nome}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
