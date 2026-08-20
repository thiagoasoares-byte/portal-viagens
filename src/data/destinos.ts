export interface Destino {
  id: string;
  nome: string;
  pais: string;
  codigo: string; // código estilo "carimbo de passaporte", ex: "BR-RJ"
  imagem: string;
  descricaoCurta: string;
  descricao: string;
  epocaIdeal: string;
  clima: string;
  atividades: string[];
}

export const destinos: Destino[] = [
  {
    id: "rio-de-janeiro",
    nome: "Rio de Janeiro",
    pais: "Brasil",
    codigo: "BR-RJ",
    imagem: "https://i.postimg.cc/63B9RLMD/praia.webp",
    descricaoCurta: "Mar, morro e a cidade que nunca se leva a sério demais.",
    descricao:
      "Entre o Corcovado e o Pão de Açúcar, o Rio combina praias urbanas, trilhas na Mata Atlântica e uma vida noturna que começa no fim da tarde, com a roda de samba tomando as ruas de Lapa e Santa Teresa.",
    epocaIdeal: "Abril a junho, quando o calor dá uma trégua",
    clima: "Tropical úmido, com verões intensos",
    atividades: [
      "Subir o Pão de Açúcar de bondinho",
      "Caminhar na trilha do Corcovado",
      "Assistir ao pôr do sol na Pedra do Arpoador",
    ],
  },
  {
    id: "fernando-de-noronha",
    nome: "Fernando de Noronha",
    pais: "Brasil",
    codigo: "BR-PE",
    imagem: "https://i.postimg.cc/FKVv9kh7/fernando-de-noronha.jpg",
    descricaoCurta: "Arquipélago vulcânico com o mar mais transparente do país.",
    descricao:
      "Um santuário ecológico no meio do Atlântico, com baías protegidas, golfinhos-rotadores nadando ao amanhecer e um número limitado de visitantes por dia para preservar os recifes de corais.",
    epocaIdeal: "Setembro a novembro, mar mais calmo e visibilidade máxima",
    clima: "Tropical oceânico, seco na maior parte do ano",
    atividades: [
      "Mergulho de snorkel na Baía dos Porcos",
      "Observar os golfinhos na Baía dos Golfinhos ao nascer do sol",
      "Trilha até o Mirante dos Golfinhos",
    ],
  },
  {
    id: "chapada-diamantina",
    nome: "Chapada Diamantina",
    pais: "Brasil",
    codigo: "BR-BA",
    imagem: "https://i.postimg.cc/7PWkYkr9/chapada-diamantinas.webp",
    descricaoCurta: "Cânions, cachoeiras e grutas no coração da Bahia.",
    descricao:
      "Um mosaico de serras antigas esculpidas pelo tempo, onde cachoeiras despencam de paredões de arenito e rios subterrâneos formam poços de água azul-turquesa dentro de grutas de calcário.",
    epocaIdeal: "Maio a setembro, estação seca e trilhas mais acessíveis",
    clima: "Semiárido de altitude, noites frias e dias amenos",
    atividades: [
      "Descer de rapel na Cachoeira da Fumaça",
      "Nadar no Poço Azul dentro da gruta",
      "Trilha até o Vale do Pati",
    ],
  },
  {
    id: "foz-do-iguacu",
    nome: "Foz do Iguaçu",
    pais: "Brasil",
    codigo: "BR-PR",
    imagem: "https://i.postimg.cc/zvL4RyYp/foz-do-iguacu.jpg",
    descricaoCurta: "As Cataratas que dividem a fronteira entre três países.",
    descricao:
      "Um dos maiores conjuntos de quedas d'água do planeta, com passarelas que colocam o visitante a poucos metros da força da água e vistas que se estendem até a Argentina e o Paraguai.",
    epocaIdeal: "Agosto a outubro, menor volume de chuva e céu mais aberto",
    clima: "Subtropical úmido, chuvas bem distribuídas no ano",
    atividades: [
      "Caminhar pelas passarelas do Parque Nacional",
      "Passeio de barco até a Garganta do Diabo",
      "Visitar a Usina Hidrelétrica de Itaipu",
    ],
  },
  {
    id: "salvador",
    nome: "Salvador",
    pais: "Brasil",
    codigo: "BR-BA",
    imagem: "https://i.postimg.cc/TYDZd59x/salvador.webp",
    descricaoCurta: "Primeira capital do Brasil, berço da cultura afro-brasileira.",
    descricao:
      "As ladeiras coloridas do Pelourinho guardam séculos de história, capoeira nas praças e um axé que sai dos tambores direto para a rua, enquanto o Farol da Barra observa o encontro da baía com o oceano.",
    epocaIdeal: "Dezembro a março, temporada de festas populares",
    clima: "Tropical litorâneo, quente o ano inteiro",
    atividades: [
      "Explorar as ladeiras do Pelourinho",
      "Assistir a uma roda de capoeira ao vivo",
      "Ver o pôr do sol no Farol da Barra",
    ],
  },
  {
    id: "jalapao",
    nome: "Jalapão",
    pais: "Brasil",
    codigo: "BR-TO",
    imagem: "https://i.postimg.cc/GpcNx712/jalapo.webp",
    descricaoCurta: "Dunas douradas e fervedouros no cerrado profundo.",
    descricao:
      "Um dos últimos grandes redutos preservados do cerrado, onde dunas de areia dourada encontram rios de água cristalina e os fervedouros criam piscinas naturais que empurram o corpo para cima como se fosse ar.",
    epocaIdeal: "Maio a setembro, estação seca com céu limpo",
    clima: "Tropical de savana, chuvas concentradas no verão",
    atividades: [
      "Flutuar no Fervedouro do Ceiça",
      "Subir as Dunas do Jalapão ao entardecer",
      "Banho na Cachoeira da Velha",
    ],
  },
];

export function getDestinoById(id: string): Destino | undefined {
  return destinos.find((destino) => destino.id === id);
}
