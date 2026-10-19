// ============================================================
//  db.js — Base de Dados Catalogada
//  Raízes e Rotas · Monsenhor Hipólito, PI
//  Escola CETIJAB · Prof.ª Jordana Yrla
//  Registros georreferenciados reais com fotos e Google Maps
// ============================================================

const DB_REGISTROS = [
  // ── FÉ & TRADIÇÃO ──────────────────────────────────────────
  {
    codigo: "MH-REL-01",
    icone: "⛪",
    categoria: "fe",
    cat_label: "Fé & Tradição",
    nome: "Igreja Matriz de Santa Ana",
    tipo: "Templo Católico · Patrimônio Religioso",
    descricao: "Centro devocional católico na Praça Central de Monsenhor Hipólito, sede da Paróquia Santa Ana (Diocese de Picos). Palco dos tradicionais Festejos de Santa Ana (17 a 26 de Julho) com novenários noturnos, quermesse, apresentações culturais e grande procissão com andores iluminados percorrendo as ruas da cidade.",
    epoca: "17–26 de Julho (Festa da Padroeira)",
    infra: "Praça Central, estacionamento, quiosques",
    imagem: "assets/images/igreja_matriz.jpg",
    lat: -7.7488,
    lng: -41.0295
  },
  {
    codigo: "MH-REL-02",
    icone: "⛰️",
    categoria: "fe",
    cat_label: "Fé & Tradição",
    nome: "Morro da Cruz (Cruzeiro)",
    tipo: "Santuário Natural · Ponto de Peregrinação",
    descricao: "Principal destino de peregrinação religiosa da cidade, o Morro da Cruz é o ponto culminante de penitência e oração durante a Semana Santa. Do alto da Cruz, os fiéis contemplam a singular formação geográfica em depressão rodeada de serras que abriga o núcleo urbano — uma paisagem única no semiárido piauiense.",
    epoca: "Semana Santa (Abril) · Ano todo",
    infra: "Acesso por estrada, trilha, área de oração",
    imagem: "assets/images/morro_da_cruz.jpg",
    lat: -7.7452,
    lng: -41.0268
  },
  {
    codigo: "MH-REL-03",
    icone: "🤠",
    categoria: "fe",
    cat_label: "Fé & Tradição",
    nome: "Festa do Vaqueiro e do Agricultor",
    tipo: "Festa Religiosa Campal · Tradição Sertaneja",
    descricao: "Homenagem solene à figura do sertanejo piauiense, realizada no 1º domingo de Maio. A celebração campal inclui missa de bênção dos vaqueiros encourados trajando gibão e perneira de couro, grande cavalgada pelas ruas, alvorada festiva e confraternização com café da manhã comunitário. Evento símbolo da fé e resistência do povo do sertão.",
    epoca: "1º Domingo de Maio",
    infra: "Praça Central, campo aberto, curral de rodeio",
    imagem: "assets/images/vaquejada_missa.jpg",
    lat: -7.7489,
    lng: -41.0294
  },

  // ── NATUREZA & LAZER ───────────────────────────────────────
  {
    codigo: "MH-ECO-01",
    icone: "💦",
    categoria: "nat",
    cat_label: "Natureza & Lazer",
    nome: "Bica das Nascenças",
    tipo: "Oásis Ecológico · Turismo de Natureza",
    descricao: "Joia natural do sertão piauiense: água cristalina que brota diretamente das rochas o ano inteiro, formando uma bica com mais de 12 metros de altura e piscinas naturais para banho em plena Caatinga. Verdadeiro oásis ecológico, As Nascenças representam o contraste deslumbrante entre a aridez do semiárido e a exuberância das águas perenes.",
    epoca: "Ano todo · Pico Jan–Abr (maior volume)",
    infra: "Área de banho, sombra nativa, trilha de acesso",
    imagem: "assets/images/nascencas_cachoeira.jpg",
    lat: -7.7201,
    lng: -41.0089
  },
  {
    codigo: "MH-ECO-02",
    icone: "🌄",
    categoria: "nat",
    cat_label: "Natureza & Lazer",
    nome: "Mirante do Morro da Cruz",
    tipo: "Mirante · Ecoturismo · Trilha Contemplativa",
    descricao: "Espaço privilegiado de ecoturismo e caminhadas contemplativas no ponto mais alto do município. O mirante proporciona vista panorâmica única da formação geográfica em depressão que abriga o núcleo urbano, circundado por serras e pelo verde do carnaubal. Destino ideal para fotografia, meditação ao amanhecer e observação das estrelas à noite.",
    epoca: "Ano todo · Amanhecer e entardecer",
    infra: "Estrada de acesso, área de contemplação, Cruz",
    imagem: "assets/images/morro_da_cruz.jpg",
    lat: -7.7450,
    lng: -41.0265
  },
  {
    codigo: "MH-ECO-03",
    icone: "🌳",
    categoria: "nat",
    cat_label: "Natureza & Lazer",
    nome: "Praça da Matriz / Convivência",
    tipo: "Espaço Público · Socialização Urbana",
    descricao: "Coração social de Monsenhor Hipólito, a Praça da Matriz combina arborização nativa com infraestrutura de lazer. Centro de socialização familiar com quiosques, bancos à sombra de árvores centenárias e ponto de encontro entre gerações. Durante as festas religiosas e cívicas, a praça transforma-se em palco vivo da cultura local.",
    epoca: "Ano todo · Fins de semana e feriados",
    infra: "Quiosques, bancos, iluminação pública, WiFi",
    imagem: "assets/images/praca_matriz.jpg",
    lat: -7.7490,
    lng: -41.0296
  },
  {
    codigo: "MH-ECO-04",
    icone: "🌊",
    categoria: "nat",
    cat_label: "Natureza & Lazer",
    nome: "Bacia do Rio Riachão e Açudes",
    tipo: "Recursos Hídricos · Ecossistema Sertanejo",
    descricao: "O Rio Riachão — que deu nome ao primitivo Arraial e à atual cidade — percorre a bacia local juntamente com açudes que são mananciais fundamentais para o ecossistema sertanejo. Cursos d'água perenes e intermitentes sustentam a fauna da Caatinga, a agricultura familiar e oferecem cenários naturais para pesca, contemplação e fotografias.",
    epoca: "Jan–Mai (rios cheios) · Set–Dez (paisagem seca)",
    infra: "Acesso rural, pesca artesanal, açudes comunitários",
    imagem: "assets/images/rio_riachao.jpg",
    lat: -7.7550,
    lng: -41.0350
  },

  // ── CULTURA, ARTE & SABORES ────────────────────────────────
  {
    codigo: "MH-CUL-01",
    icone: "💄",
    categoria: "cult",
    cat_label: "Cultura & Sabores",
    nome: "Festa dos Batonzeiros",
    tipo: "Festa Sociocultural Única · Identidade Local",
    descricao: "Fenômeno sociocultural e econômico singular de Monsenhor Hipólito. Os Batonzeiros são os revendedores de cosméticos — majoritariamente homens — que partem da cidade para comercializar produtos por todo o Brasil e regressam periodicamente à terra natal para celebrar suas raízes. A festa que os homenageia reúne bailes, forró pé de serra e é símbolo da identidade, força e empreendedorismo do povo hipolitense.",
    epoca: "Geralmente Julho (junto às festas de aniversário)",
    infra: "Praça Central, quadra de eventos, palco",
    imagem: "assets/images/festa_batonzeiros.jpg",
    lat: -7.7489,
    lng: -41.0294
  },
  {
    codigo: "MH-CUL-02",
    icone: "🎉",
    categoria: "cult",
    cat_label: "Cultura & Sabores",
    nome: "Aniversário de Emancipação — 26 de Julho",
    tipo: "Megaevento Cívico-Cultural",
    descricao: "O maior evento do calendário municipal celebra a instalação oficial do município em 26/07/1957. A programação inclui alvorada festiva com fogos, maratona atlética pelas ruas da cidade, corte do bolo gigante na Praça Central, solenidade cívica com hasteamento de bandeiras, shows de forró e vaquejada, além de apresentações de artistas regionais e nacionais.",
    epoca: "26 de Julho (anual)",
    infra: "Praça Central, parque de vaquejada, palco oficial",
    imagem: "assets/images/festa_batonzeiros.jpg",
    lat: -7.7488,
    lng: -41.0293
  },
  {
    codigo: "MH-CUL-03",
    icone: "🛒",
    categoria: "cult",
    cat_label: "Cultura & Sabores",
    nome: "Feira Livre & Circuito Gastronômico Sertanejo",
    tipo: "Mercado Popular · Gastronomia Típica · Artesanato",
    descricao: "A Feira Livre de Monsenhor Hipólito concentra o artesanato autêntico: selaria e artigos em couro legítimo trabalhado à mão, trançados em palha de carnaúba e bordados de artesãs locais. No entorno, o Circuito Gastronômico Sertanejo oferece carne de sol com macaxeira na manteiga de garrafa, baião de dois com feijão-verde e queijo de coalho, carneirada e buchada, galinha caipira ao molho pardo, doces cristalizados de caju e a refrescante cajuína piauiense gelada.",
    epoca: "Semanal (geralmente sábados) · Festas locais",
    infra: "Barracas cobertas, estacionamento, área gastronômica",
    imagem: "assets/images/carne_de_sol.jpg",
    lat: -7.7485,
    lng: -41.0292
  }
];
