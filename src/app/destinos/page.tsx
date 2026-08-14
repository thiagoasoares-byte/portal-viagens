import type { Metadata } from "next";
import { destinos } from "@/data/destinos";
import CardDestino from "@/components/CardDestino/CardDestino";
import styles from "./destinos.module.css";

export const metadata: Metadata = {
  title: "Destinos | Rota Aberta",
  description: "Listagem de destinos turísticos pelo Brasil.",
};

export default function DestinosPage() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>
          {String(destinos.length).padStart(2, "0")} destinos catalogados
        </span>
        <h1 className={styles.title}>Destinos</h1>
        <p className={styles.subtitle}>
          Escolha um cartão para ver clima, época ideal e o que fazer em
          cada lugar.
        </p>
      </div>

      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino key={destino.id} destino={destino} />
        ))}
      </div>
    </section>
  );
}
