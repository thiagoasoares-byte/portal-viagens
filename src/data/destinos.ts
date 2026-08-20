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
    imagem: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    imagem: "https://images.unsplash.com/photo-1614723141070-2eec18977122?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    imagem: "https://images.unsplash.com/photo-1587944333503-ef66108afa79?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    imagem: "https://images.unsplash.com/photo-1656288227038-28aaa4f6b8ad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    imagem: "https://images.unsplash.com/photo-1621693247912-767f47a3c382?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    imagem: "https://images.unsplash.com/photo-1662998368456-0817cb60f951?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
