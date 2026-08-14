import Image from "next/image";
import Link from "next/link";
import { Destino } from "@/data/destinos";
import styles from "./CardDestino.module.css";

interface CardDestinoProps {
  destino: Destino;
}

export default function CardDestino({ destino }: CardDestinoProps) {
  return (
    <Link href={`/destinos/${destino.id}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={destino.imagem}
          alt={`Foto de ${destino.nome}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={styles.image}
        />
        <span className={styles.stamp} aria-hidden="true">
          {destino.codigo}
        </span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.nome}>{destino.nome}</h3>
        <p className={styles.descricao}>{destino.descricaoCurta}</p>
        <span className={styles.link}>Ver detalhes →</span>
      </div>
    </Link>
  );
}
