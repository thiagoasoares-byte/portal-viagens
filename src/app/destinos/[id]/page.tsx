import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinos, getDestinoById } from "@/data/destinos";
import styles from "./destino.module.css";

interface DestinoPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return destinos.map((destino) => ({ id: destino.id }));
}

export async function generateMetadata({
  params,
}: DestinoPageProps): Promise<Metadata> {
  const { id } = await params;
  const destino = getDestinoById(id);

  if (!destino) {
    return { title: "Destino não encontrado | Rota Aberta" };
  }

  return {
    title: `${destino.nome} | Rota Aberta`,
    description: destino.descricaoCurta,
  };
}

export default async function DestinoPage({ params }: DestinoPageProps) {
  const { id } = await params;
  const destino = getDestinoById(id);

  if (!destino) {
    notFound();
  }

  return (
    <article>
      <div className={styles.hero}>
        <Image
          src={destino.imagem}
          alt={`Foto de ${destino.nome}`}
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <Link href="/destinos" className={styles.back}>
            ← Todos os destinos
          </Link>
          <span className={styles.stamp}>{destino.codigo}</span>
          <h1 className={styles.title}>{destino.nome}</h1>
          <p className={styles.pais}>{destino.pais}</p>
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.descricao}>{destino.descricao}</p>

        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <span className={styles.infoLabel}>Época ideal</span>
            <p className={styles.infoValue}>{destino.epocaIdeal}</p>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoLabel}>Clima</span>
            <p className={styles.infoValue}>{destino.clima}</p>
          </div>
        </div>

        <div className={styles.atividades}>
          <span className={styles.infoLabel}>O que fazer por lá</span>
          <ul className={styles.atividadesList}>
            {destino.atividades.map((atividade) => (
              <li key={atividade} className={styles.atividadeItem}>
                {atividade}
              </li>
            ))}
          </ul>
        </div>

        <Link href="/destinos" className={styles.cta}>
          Ver outros destinos →
        </Link>
      </div>
    </article>
  );
}
