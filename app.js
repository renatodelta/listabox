// ListaBox - State & Core Logic

// Default seed data to initialize LocalStorage if empty
const DEFAULT_SCHOOLS = [
    { id: "anglo", name: "Colégio Anglo" },
    { id: "objetivo", name: "Colégio Objetivo" },
    { id: "montessori", name: "Escola Montessori" },
    { id: "sao-jose", name: "Instituto São José" }
];

const DEFAULT_LISTS = [
    {
        id: "anglo-infantil",
        schoolId: "anglo",
        grade: "Infantil (Preschool)",
        year: "2026",
        title: "Lista do Infantil - Anglo",
        description: "Kit completo de materiais obrigatórios para o ano letivo de 2026. Aprovado pela coordenação pedagógica.",
        originalPrice: 256.50,
        bundlePrice: 229.00,
        image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=600",
        verified: true,
        items: [
            { id: "item-1", name: "Lápis de Cor Jumbo (12 cores)", category: "writing", description: "Formato triangular ergonômico, ideal para mãos pequenas.", price: 42.90, mandatory: true, checked: true, image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=200" },
            { id: "item-2", name: "Caderno de Desenho Espiral A3", category: "art", description: "Papel encorpado 120g, ideal para tintas e canetinhas.", price: 31.50, mandatory: true, checked: true, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=200" },
            { id: "item-3", name: "Cola Bastão Não-Tóxica (3 un)", category: "art", description: "Fórmula livre de solventes, segura para crianças.", price: 15.90, mandatory: false, checked: false, image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=200" },
            { id: "item-4", name: "Canetinhas Hidrocor Laváveis (10 cores)", category: "writing", description: "Ponta grossa, fáceis de limpar da pele e tecidos.", price: 28.00, mandatory: true, checked: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=200" },
            { id: "item-5", name: "Tesoura Sem Ponta (Infantil)", category: "art", description: "Lâminas de aço inox com cabo plástico ergonômico.", price: 12.50, mandatory: true, checked: true, image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80&w=200" },
            { id: "item-6", name: "Massa de Modelar (6 cores)", category: "art", description: "Não resseca, base vegetal, cores super vibrantes.", price: 18.90, mandatory: true, checked: true, image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=200" },
            { id: "item-7", name: "Gibi para leitura (Turma da Mônica)", category: "others", description: "HQ infantil para incentivo à leitura.", price: 9.90, mandatory: false, checked: false, image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=200" },
            { id: "item-8", name: "Pincel Chato nº 12", category: "art", description: "Ideal para têmpera guache e colagens.", price: 4.80, mandatory: true, checked: true, image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80&w=200" },
            { id: "item-9", name: "Tinta Guache Acrilex (6 cores)", category: "art", description: "Têmpera guache escolar atóxica.", price: 11.50, mandatory: true, checked: true, image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=200" },
            { id: "item-10", name: "Pasta Aba Elástico Polionda A4", category: "notebook", description: "Pasta de plástico polionda com elástico.", price: 7.90, mandatory: true, checked: true, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=200" },
            { id: "item-11", name: "Papel Criativo Colorset A4 (24 fls)", category: "notebook", description: "Papéis coloridos sortidos de alta gramatura.", price: 14.90, mandatory: true, checked: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=200" },
            { id: "item-12", name: "Avental Escolar Impermeável", category: "others", description: "Avental para atividades artísticas.", price: 24.90, mandatory: true, checked: true, image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=200" },
            { id: "item-13", name: "Lenço Umedecido (Higiene)", category: "others", description: "Para higienização rápida das mãos.", price: 12.90, mandatory: false, checked: false, image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=200" }
        ]
    },
    {
        id: "objetivo-fundamental",
        schoolId: "objetivo",
        grade: "1º Ano - Fundamental",
        year: "2026",
        title: "Lista de 1º Ano - Objetivo",
        description: "Material oficial para ingresso no Ensino Fundamental. Foco em alfabetização e artes.",
        originalPrice: 268.00,
        bundlePrice: 239.00,
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600",
        verified: true,
        items: [
            { id: "item-obj-1", name: "Lápis Preto Grafite HB (4 un)", category: "writing", description: "Grafite macio para as primeiras palavras escritas.", price: 9.90, mandatory: true, checked: true, image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=200" },
            { id: "item-obj-2", name: "Borracha Branca com Capa", category: "writing", description: "Livre de PVC, apaga sem borrar o papel.", price: 6.50, mandatory: true, checked: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=200" },
            { id: "item-obj-3", name: "Caderno Brochura Pautado (96 fls)", category: "notebook", description: "Capa dura resistente na cor azul padrão.", price: 18.90, mandatory: true, checked: true, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=200" },
            { id: "item-obj-4", name: "Avental Plástico para Pintura", category: "art", description: "Impermeável, ideal para aulas de artes.", price: 24.90, mandatory: false, checked: false, image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=200" },
            { id: "item-obj-5", name: "Estojo Escolar Duplo", category: "others", description: "Zíper reforçado, espaçoso para guardar tudo.", price: 35.00, mandatory: true, checked: true, image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=200" },
            { id: "item-obj-6", name: "Lápis de Cor Faber-Castell (12 cores)", category: "writing", description: "Lápis de cor sextavados de excelente cobertura.", price: 29.90, mandatory: true, checked: true, image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=200" },
            { id: "item-obj-7", name: "Apontador de Lápis com Depósito", category: "writing", description: "Evita sujeiras, lâmina de alta durabilidade.", price: 7.50, mandatory: true, checked: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=200" },
            { id: "item-obj-8", name: "Régua Plástica 30cm flexível", category: "writing", description: "Régua flexível inquebrável, ideal para crianças.", price: 5.50, mandatory: true, checked: true, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=200" },
            { id: "item-obj-9", name: "Tesoura Escolar Sem Ponta", category: "writing", description: "Lâmina com escala em centímetros, segura.", price: 9.90, mandatory: true, checked: true, image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80&w=200" },
            { id: "item-obj-10", name: "Cola Líquida Branca 90g (Tenaz)", category: "art", description: "Cola líquida ideal para colagens escolares.", price: 6.90, mandatory: true, checked: true, image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=200" },
            { id: "item-obj-11", name: "Papel Sulfite A4 Branco (100 fls)", category: "notebook", description: "Papel sulfite branco 75g de alta qualidade.", price: 12.50, mandatory: true, checked: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=200" },
            { id: "item-obj-12", name: "Pasta Polionda com Alça e Elástico", category: "notebook", description: "Pasta maleta polionda com lombada de 2cm.", price: 15.90, mandatory: true, checked: true, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=200" },
            { id: "item-obj-13", name: "Caderno de Caligrafia Brochura (40 fls)", category: "notebook", description: "Pautas específicas para auxílio na escrita cursiva.", price: 9.90, mandatory: true, checked: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=200" },
            { id: "item-obj-14", name: "Dicionário Escolar da Língua Portuguesa", category: "notebook", description: "Minidicionário da língua portuguesa atualizado.", price: 24.90, mandatory: false, checked: false, image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=200" },
            { id: "item-obj-15", name: "Etiquetas Adesivas Personalizadas (Kit)", category: "others", description: "Kit com 30 etiquetas para identificação de materiais.", price: 19.90, mandatory: false, checked: false, image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=200" }
        ]
    },
    {
        id: "sao-jose-maternal",
        schoolId: "sao-jose",
        grade: "Maternal (2 Anos)",
        year: "2026",
        title: "Lista do Maternal - Inst. São José",
        description: "Módulo Básico Girolhar e materiais individuais/coletivos recomendados para crianças de 2 anos no Instituto São José.",
        originalPrice: 574.60,
        bundlePrice: 499.00,
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600",
        verified: true,
        items: [
            { id: "sjm-1", name: "Coleção Girolhar - Módulo Básico", category: "notebook", description: "Material didático básico adotado pela escola.", price: 180.00, mandatory: true, checked: true },
            { id: "sjm-2", name: "Música - Quebrando a Casca - Maternal (Livro)", category: "notebook", description: "Livro de música para atividades em sala.", price: 45.00, mandatory: true, checked: true },
            { id: "sjm-3", name: "Projeto - Para Sempre - Coleção Música em Família (Livro)", category: "notebook", description: "Material do projeto Música em Família.", price: 50.00, mandatory: true, checked: true },
            { id: "sjm-4", name: "Caneta Hidrocor Grossa 12 cores - Jumbão (Faber Castell)", category: "writing", description: "Formato anatômico, ideal para mãozinhas de 2 anos.", price: 39.90, mandatory: true, checked: true },
            { id: "sjm-5", name: "Ecogiz de Cera 12 cores + apontador (Faber Castell)", category: "writing", description: "Giz de cera macio com apontador.", price: 19.90, mandatory: true, checked: true },
            { id: "sjm-6", name: "Cola Branca 110g (Tenaz)", category: "art", description: "Fórmula de alta aderência lavável.", price: 9.50, mandatory: true, checked: true },
            { id: "sjm-7", name: "Cola em Bastão 40g (Pritt)", category: "art", description: "Secagem rápida, não enruga o papel.", price: 14.90, mandatory: true, checked: true },
            { id: "sjm-8", name: "Tinta Guache em Bastão 10g - 6 cores Neon (Acrilex)", category: "art", description: "Cores neon vibrantes e de fácil aplicação.", price: 22.90, mandatory: true, checked: true },
            { id: "sjm-9", name: "Aquarela Pastilha 12 cores (Acrilex/Faber)", category: "art", description: "Cores solúveis em água para atividades artísticas.", price: 18.50, mandatory: true, checked: true },
            { id: "sjm-10", name: "Avental Infantil Impermeável com manga", category: "art", description: "Proteção completa para aulas de artes e pintura.", price: 29.90, mandatory: true, checked: true },
            { id: "sjm-11", name: "Lupa Pequena", category: "others", description: "Para exploração e atividades ao ar livre.", price: 12.00, mandatory: true, checked: true },
            { id: "sjm-12", name: "Lanterna Pequena com pilha", category: "others", description: "Ideal para atividades de luz e sombra.", price: 15.00, mandatory: true, checked: true },
            { id: "sjm-13", name: "Lenços de papel (2 caixas)", category: "others", description: "Caixa com lenços de papel higiênico e macio.", price: 8.00, mandatory: true, checked: true },
            { id: "sjm-14", name: "Lenços umedecidos (3 pacotes)", category: "others", description: "Lenços umedecidos para higiene individual do aluno.", price: 19.90, mandatory: true, checked: true },
            { id: "sjm-15", name: "Pote de argilinha (Uti Guti)", category: "art", description: "Argila pronta para modelagem.", price: 7.90, mandatory: false, checked: false },
            { id: "sjm-16", name: "Tintas Guache 250ml (2 unidades)", category: "art", description: "Garrafa com tinta guache escolar líquida.", price: 16.00, mandatory: false, checked: false },
            { id: "sjm-17", name: "Potes de massa de modelar 500g (2 unidades)", category: "art", description: "Massa macia e colorida de 500g.", price: 24.90, mandatory: false, checked: false },
            { id: "sjm-18", name: "Bloco de Papel Canson A3 branco (20 folhas)", category: "notebook", description: "Papel de alta gramatura para técnicas secas ou úmidas.", price: 22.90, mandatory: false, checked: false },
            { id: "sjm-19", name: "Bloco de Papel Canson A3 colorido (20 folhas)", category: "notebook", description: "Bloco com folhas Canson coloridas sortidas.", price: 24.90, mandatory: false, checked: false },
            { id: "sjm-20", name: "Sacos plásticos grossos A3 (10 unidades)", category: "others", description: "Sacos plásticos resistentes para guardar produções.", price: 12.00, mandatory: false, checked: false },
            { id: "sjm-21", name: "Fitas crepe grossas (2 unidades)", category: "others", description: "Fita adesiva crepe para fixações diversas.", price: 15.00, mandatory: false, checked: false },
            { id: "sjm-22", name: "Rolos de durex grosso (2 unidades)", category: "others", description: "Durex largo transparente.", price: 12.00, mandatory: false, checked: false },
            { id: "sjm-23", name: "Refis de cola quente (grosso e fino)", category: "others", description: "Bastão de adesivo termoplástico.", price: 10.00, mandatory: false, checked: false },
            { id: "sjm-24", name: "Esponja simples para pintura", category: "art", description: "Esponja multiuso para técnicas de textura.", price: 3.50, mandatory: false, checked: false }
        ]
    },
    {
        id: "sao-jose-infantil1",
        schoolId: "sao-jose",
        grade: "Infantil I (3 Anos)",
        year: "2026",
        title: "Lista do Infantil I - Inst. São José",
        description: "Módulo Girolhar, Programa Bilíngue, Música e todos os materiais individuais e coletivos indicados para crianças de 3 anos.",
        originalPrice: 865.90,
        bundlePrice: 749.90,
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600",
        verified: true,
        items: [
            { id: "sji-1", name: "Coleção Girolhar - Módulo Básico", category: "notebook", description: "Material básico oficial da rede Salesiana.", price: 180.00, mandatory: true, checked: true },
            { id: "sji-2", name: "Livro Bilíngue: Welcome to Our World Bundle Level 1", category: "notebook", description: "Kit de inglês contendo Student Book + Activity Book.", price: 160.00, mandatory: true, checked: true },
            { id: "sji-3", name: "Música - Quebrando a Casca - Volume 1 (Livro)", category: "notebook", description: "Material didático voltado para musicalização infantil.", price: 45.00, mandatory: true, checked: true },
            { id: "sji-4", name: "Projeto: Para Sempre - Coleção Música em Família (Livro)", category: "notebook", description: "Livro com canções e atividades familiares.", price: 50.00, mandatory: true, checked: true },
            { id: "sji-5", name: "Caneta Hidrocor 12 cores grossa - Jumbão (Faber)", category: "writing", description: "Hidrocor jumbo lavável, cores vivas.", price: 39.90, mandatory: true, checked: true },
            { id: "sji-6", name: "Giz de Cera Retrátil (Acrilex)", category: "writing", description: "Mecanismo retrátil que evita a quebra do giz.", price: 24.90, mandatory: true, checked: true },
            { id: "sji-7", name: "Lápis Grafite Triangular Jumbão (Faber)", category: "writing", description: "Facilita a empunhadura correta para escrita.", price: 6.50, mandatory: true, checked: true },
            { id: "sji-8", name: "Apontador para Lápis Jumbão", category: "writing", description: "Lâmina afiada específica para bitola maior.", price: 8.90, mandatory: true, checked: true },
            { id: "sji-9", name: "Cola Branca 500g (Tenaz)", category: "art", description: "Tubo grande de cola branca escolar.", price: 18.90, mandatory: true, checked: true },
            { id: "sji-10", name: "Cola em Bastão 40g (Pritt)", category: "art", description: "Fórmula à base de amido, livre de solventes.", price: 14.90, mandatory: true, checked: true },
            { id: "sji-11", name: "Avental Infantil Impermeável com manga", category: "art", description: "Protege o uniforme das tintas e colas.", price: 29.90, mandatory: true, checked: true },
            { id: "sji-12", name: "Saquinho de Argilinha (Acrilex)", category: "art", description: "Argila escolar macia para trabalhos tridimensionais.", price: 7.90, mandatory: true, checked: true },
            { id: "sji-13", name: "Guache Bastão 6 cores (Acrilex)", category: "art", description: "Tinta guache sólida, rápida secagem sem sujeira.", price: 22.90, mandatory: true, checked: true },
            { id: "sji-14", name: "Rolinho de fita de cetim fina nº 3", category: "others", description: "Fita de cetim de cor variada.", price: 5.00, mandatory: true, checked: true },
            { id: "sji-15", name: "Limpador de cachimbo colorido (10 un)", category: "others", description: "Hastes de metal flexíveis revestidas com pelúcia.", price: 8.00, mandatory: true, checked: true },
            { id: "sji-16", name: "Lanterna Pequena com pilha", category: "others", description: "Equipamento para projetos de iluminação.", price: 15.00, mandatory: true, checked: true },
            { id: "sji-17", name: "Massinha de modelar 6 cores (Bilíngue)", category: "art", description: "Massinha para o projeto bilíngue internacional.", price: 6.90, mandatory: true, checked: true },
            { id: "sji-18", name: "Bloco de Papel Canson A3 branco (Bilíngue)", category: "notebook", description: "Canson para atividades artísticas bilíngues.", price: 22.90, mandatory: true, checked: true },
            { id: "sji-19", name: "Bloco de Papel Canson A3 colorido (Bilíngue)", category: "notebook", description: "Canson colorido para atividades bilíngues.", price: 24.90, mandatory: true, checked: true },
            { id: "sji-20", name: "Pasta catálogo com 50 plásticos (Bilíngue)", category: "notebook", description: "Para portfólio de atividades bilíngues.", price: 29.90, mandatory: true, checked: true },
            { id: "sji-21", name: "Livro de História Infantil em inglês (Bilíngue)", category: "notebook", description: "Contos clássicos infantis em língua inglesa.", price: 35.00, mandatory: true, checked: true },
            { id: "sji-22", name: "Bloco de papel Canson A3 colorido 20 folhas", category: "notebook", description: "Papel Canson colorido (Uso Coletivo).", price: 24.90, mandatory: false, checked: false },
            { id: "sji-23", name: "Papel Criativo Colorido Color set A4", category: "notebook", description: "Pacote Color Set A4 (Uso Coletivo).", price: 15.90, mandatory: false, checked: false },
            { id: "sji-24", name: "Bloco de papel Canson Branco A3 20 folhas", category: "notebook", description: "Papel Canson branco de 20 folhas (Uso Coletivo).", price: 22.90, mandatory: false, checked: false },
            { id: "sji-25", name: "Massa de modelar 500g (Acrilex) (Coletivo)", category: "art", description: "Super bloco de massa de modelagem.", price: 14.90, mandatory: false, checked: false },
            { id: "sji-26", name: "Tintas guache 250ml cores primárias (2 un)", category: "art", description: "Guaches líquidas (Uso Coletivo).", price: 16.00, mandatory: false, checked: false },
            { id: "sji-27", name: "Rolinho para pintura (Coletivo)", category: "art", description: "Espuma para técnicas de pintura uniforme.", price: 6.00, mandatory: false, checked: false },
            { id: "sji-28", name: "Trincha 2 polegadas (Coletivo)", category: "art", description: "Pincel largo para colorir grandes áreas.", price: 8.50, mandatory: false, checked: false },
            { id: "sji-29", name: "Refis de cola quente (fino e grosso) (Coletivo)", category: "others", description: "Munição de cola térmica.", price: 10.00, mandatory: false, checked: false },
            { id: "sji-30", name: "Pincel nº 20 (Coletivo)", category: "art", description: "Pincel de ponta redonda nº 20.", price: 7.50, mandatory: false, checked: false }
        ]
    }
];

const DEFAULT_ORDERS = [
    {
        id: "LBOX-9874",
        parentName: "Mariana Souza",
        studentName: "Lucas Souza",
        schoolName: "Colégio Anglo",
        gradeName: "Infantil (Preschool)",
        phone: "(11) 98765-4321",
        address: "Av. Paulista, 1000 - Apto 51 - Bela Vista, São Paulo - SP",
        paymentMethod: "pix",
        total: 190.70,
        status: "preparing", // received, preparing, shipping, delivered
        date: "2026-06-09T20:15:00-03:00",
        items: ["Lápis de Cor Jumbo", "Caderno de Desenho Espiral", "Canetinhas Hidrocor", "Tesoura Sem Ponta"]
    }
];

// App State
let state = {
    schools: [],
    lists: [],
    orders: [],
    currentView: "home", // home, list-detail, checkout, success, tracking, admin
    selectedList: null,
    cart: {
        items: [],
        listId: null,
        isCustom: false,
        total: 0
    },
    activeFilter: "all",
    trackingOrder: null,
    adminActiveTab: "lists", // lists, orders
    adminSelectedList: null
};

// Initialize Application Data
function initData() {
    if (!localStorage.getItem("listabox_schools")) {
        localStorage.setItem("listabox_schools", JSON.stringify(DEFAULT_SCHOOLS));
    }
    if (!localStorage.getItem("listabox_lists")) {
        localStorage.setItem("listabox_lists", JSON.stringify(DEFAULT_LISTS));
    }
    if (!localStorage.getItem("listabox_orders")) {
        localStorage.setItem("listabox_orders", JSON.stringify(DEFAULT_ORDERS));
    }

    state.schools = JSON.parse(localStorage.getItem("listabox_schools"));
    state.lists = JSON.parse(localStorage.getItem("listabox_lists"));
    state.orders = JSON.parse(localStorage.getItem("listabox_orders"));
    
    // Check and merge new defaults if missing
    let updatedSchools = false;
    if (!state.schools.some(s => s.id === "sao-jose")) {
        state.schools.push({ id: "sao-jose", name: "Instituto São José" });
        updatedSchools = true;
    }
    
    let updatedLists = false;
    DEFAULT_LISTS.forEach(l => {
        const idx = state.lists.findIndex(sl => sl.id === l.id);
        if (idx > -1) {
            // Force update all default lists to sync their expanded items
            state.lists[idx] = l;
            updatedLists = true;
        } else {
            state.lists.push(l);
            updatedLists = true;
        }
    });

    if (updatedSchools) {
        saveData("listabox_schools", state.schools);
    }
    if (updatedLists) {
        saveData("listabox_lists", state.lists);
    }

    // Ensure cart state is fully initialized
    state.cart = {
        lists: [],
        items: [],
        listId: null,
        isCustom: false,
        total: 0,
        promoDiscount: 0,
        promoCode: ""
    };
}

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Utility formatting
function formatCurrency(value) {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
}

// Navigation View switcher
function setView(viewName) {
    state.currentView = viewName;
    
    // Hide all views
    document.querySelectorAll(".app-view").forEach(el => el.classList.add("hidden"));
    
    // Show active view
    const activeView = document.getElementById(`view-${viewName}`);
    if (activeView) {
        activeView.classList.remove("hidden");
        activeView.classList.add("animate-fade-in");
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Header logic updates
    updateHeaderNav();
}

function updateHeaderNav() {
    const adminBtn = document.getElementById("header-admin-btn");
    if (state.currentView === "admin") {
        adminBtn.innerHTML = `<span class="material-symbols-outlined mr-1 text-[20px]">storefront</span> Ver Loja`;
        adminBtn.classList.remove("bg-secondary-container", "text-on-secondary-container");
        adminBtn.classList.add("bg-primary", "text-on-primary");
    } else {
        adminBtn.innerHTML = `<span class="material-symbols-outlined mr-1 text-[20px]">admin_panel_settings</span> Painel`;
        adminBtn.classList.add("bg-secondary-container", "text-on-secondary-container");
        adminBtn.classList.remove("bg-primary", "text-on-primary");
    }
}

// Renderers
function renderHome() {
    const schoolSelect = document.getElementById("search-school");
    const gradeSelect = document.getElementById("search-grade");
    const listsGrid = document.getElementById("home-lists-grid");

    // Populate Schools
    schoolSelect.innerHTML = `<option value="">Todas as Escolas</option>`;
    state.schools.forEach(school => {
        schoolSelect.innerHTML += `<option value="${school.id}">${school.name}</option>`;
    });

    // Handle grade options dynamically (extract unique grades)
    const uniqueGrades = [...new Set(state.lists.map(l => l.grade))];
    gradeSelect.innerHTML = `<option value="">Todas as Series</option>`;
    uniqueGrades.forEach(grade => {
        gradeSelect.innerHTML += `<option value="${grade}">${grade}</option>`;
    });

    // Filter and render lists
    filterHomeLists();
}

function filterHomeLists() {
    const schoolVal = document.getElementById("search-school").value;
    const gradeVal = document.getElementById("search-grade").value;
    const searchVal = document.getElementById("search-text").value.toLowerCase();
    const listsGrid = document.getElementById("home-lists-grid");

    let filtered = state.lists;

    if (schoolVal) {
        filtered = filtered.filter(l => l.schoolId === schoolVal);
    }
    if (gradeVal) {
        filtered = filtered.filter(l => l.grade === gradeVal);
    }
    if (searchVal) {
        filtered = filtered.filter(l => 
            l.title.toLowerCase().includes(searchVal) || 
            l.description.toLowerCase().includes(searchVal)
        );
    }

    listsGrid.innerHTML = "";
    if (filtered.length === 0) {
        listsGrid.innerHTML = `
            <div class="col-span-full text-center py-12 bg-surface-container-low rounded-xl border border-outline-variant">
                <span class="material-symbols-outlined text-[48px] text-outline">search_off</span>
                <p class="font-headline-sm text-headline-sm text-primary mt-2">Nenhuma lista encontrada</p>
                <p class="font-body-md text-body-md text-on-surface-variant">Tente mudar seus filtros ou busque por outro termo.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(list => {
        const itemQty = list.items.length;
        const school = state.schools.find(s => s.id === list.schoolId);
        const schoolName = school ? school.name : "Escola";

        listsGrid.innerHTML += `
            <div onclick="selectList('${list.id}')" class="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_4px_12px_rgba(26,35,126,0.08)] hover-glow border border-transparent hover:border-primary transition-all duration-300 cursor-pointer group flex flex-col h-full">
                <div class="aspect-[16/10] w-full bg-surface-container relative overflow-hidden">
                    <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="${list.image || 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=400'}" alt="${list.title}">
                    <div class="absolute top-sm right-sm">
                        <span class="bg-secondary-container text-on-secondary-container px-sm py-xs rounded-full font-label-md text-label-md shadow-sm">Verificada ${list.year}</span>
                    </div>
                </div>
                <div class="p-md flex flex-col flex-grow">
                    <span class="text-[12px] font-bold uppercase tracking-wider text-on-surface-variant mb-xs flex items-center gap-xs">
                        <span class="material-symbols-outlined text-[14px]">school</span> ${schoolName}
                    </span>
                    <h3 class="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors mb-sm">${list.title}</h3>
                    <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-md flex-grow">${list.description}</p>
                    
                    <div class="flex items-center justify-between border-t border-outline-variant pt-sm mt-auto">
                        <div>
                            <p class="font-label-md text-label-md text-on-surface-variant">${itemQty} itens inclusos</p>
                            <p class="font-headline-sm text-headline-sm text-primary font-bold">${formatCurrency(list.bundlePrice)}</p>
                        </div>
                        <span class="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform bg-primary-fixed p-2 rounded-full">arrow_forward</span>
                    </div>
                </div>
            </div>
        `;
    });
}

function selectList(listId) {
    const list = state.lists.find(l => l.id === listId);
    if (!list) return;

    state.selectedList = JSON.parse(JSON.stringify(list)); // deep clone to handle customized checkboxes locally
    state.activeFilter = "all";
    
    renderListDetail();
    setView("list-detail");
}

function renderListDetail() {
    const list = state.selectedList;
    if (!list) return;

    const school = state.schools.find(s => s.id === list.schoolId);
    const schoolName = school ? school.name : "";

    // Header & Breadcrumb
    document.getElementById("detail-breadcrumb-school").textContent = schoolName;
    document.getElementById("detail-breadcrumb-list").textContent = list.title;
    document.getElementById("detail-title").textContent = list.title;
    document.getElementById("detail-desc").textContent = list.description;
    document.getElementById("detail-cover-img").src = list.image;
    document.getElementById("detail-item-count-badge").textContent = `${list.items.length} itens inclusos nesta lista`;

    // School specs card
    document.getElementById("spec-institution").innerHTML = `<span class="material-symbols-outlined text-primary">school</span> Escola: ${schoolName}`;
    document.getElementById("spec-grade").innerHTML = `<span class="material-symbols-outlined text-primary">child_care</span> Série: ${list.grade}`;
    document.getElementById("spec-year").innerHTML = `<span class="material-symbols-outlined text-primary">calendar_today</span> Ano Letivo: ${list.year}`;

    // Calculate Prices & Bundle original vs discount
    document.getElementById("detail-original-price").textContent = formatCurrency(list.originalPrice);
    document.getElementById("detail-bundle-price").textContent = formatCurrency(list.bundlePrice);
    const savingsPercent = Math.round(((list.originalPrice - list.bundlePrice) / list.originalPrice) * 100);
    document.getElementById("detail-savings-badge").textContent = `Economize ${savingsPercent}% comprando o Kit`;

    renderDetailItems();
    updateDetailTotals();
}

function renderDetailItems() {
    const list = state.selectedList;
    const itemsGrid = document.getElementById("detail-items-grid");
    
    // Set active status on tabs
    ["all", "art", "writing", "notebook", "others"].forEach(cat => {
        const tabEl = document.getElementById(`tab-${cat}`);
        if (tabEl) {
            if (state.activeFilter === cat) {
                tabEl.classList.add("bg-primary", "text-on-primary");
                tabEl.classList.remove("hover:bg-surface-variant");
            } else {
                tabEl.classList.remove("bg-primary", "text-on-primary");
                tabEl.classList.add("hover:bg-surface-variant");
            }
        }
    });

    let items = list.items;
    if (state.activeFilter !== "all") {
        items = items.filter(item => item.category === state.activeFilter);
    }

    itemsGrid.innerHTML = "";
    if (items.length === 0) {
        itemsGrid.innerHTML = `
            <div class="col-span-full text-center py-12 bg-surface-container-low rounded-xl border border-outline-variant">
                <span class="material-symbols-outlined text-[36px] text-outline">info</span>
                <p class="font-label-lg text-label-lg text-primary mt-2">Nenhum item nesta categoria</p>
            </div>
        `;
        return;
    }

    items.forEach(item => {
        itemsGrid.innerHTML += `
            <div class="bg-surface-container-lowest p-sm rounded-xl shadow-[0px_4px_12px_rgba(26,35,126,0.08)] border border-transparent hover:border-primary transition-all duration-300 group hover:-translate-y-1">
                <div class="flex gap-md">
                    <div class="w-20 h-20 bg-surface-container rounded-lg overflow-hidden shrink-0">
                        <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src="${item.image || 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=200'}" alt="${item.name}">
                    </div>
                    <div class="flex-grow">
                        <div class="flex justify-between items-start">
                            <span class="${item.mandatory ? 'bg-tertiary-fixed text-on-tertiary-fixed-variant' : 'bg-surface-container-highest text-on-surface-variant'} px-xs rounded text-[10px] uppercase font-bold">
                                ${item.mandatory ? 'Obrigatório' : 'Opcional'}
                            </span>
                            <input type="checkbox" onchange="toggleItemSelection('${item.id}', this.checked)" ${item.checked ? 'checked' : ''} class="w-6 h-6 rounded border-outline text-primary focus:ring-primary cursor-pointer"/>
                        </div>
                        <h4 class="font-label-lg text-label-lg text-primary mt-xs">${item.name}</h4>
                        <p class="font-body-sm text-body-sm text-on-surface-variant mb-sm line-clamp-1">${item.description}</p>
                        <p class="font-label-lg text-label-lg text-primary">${formatCurrency(item.price)}</p>
                    </div>
                </div>
            </div>
        `;
    });
}

function filterCategory(category) {
    state.activeFilter = category;
    renderDetailItems();
}

function toggleItemSelection(itemId, isChecked) {
    const list = state.selectedList;
    const item = list.items.find(i => i.id === itemId);
    if (item) {
        item.checked = isChecked;
    }
    updateDetailTotals();
}

function updateDetailTotals() {
    const list = state.selectedList;
    if (!list) return;

    // Calculate total price of currently checked items
    const selectedItems = list.items.filter(i => i.checked);
    const customTotal = selectedItems.reduce((acc, item) => acc + item.price, 0);

    // Update the custom selection elements
    document.getElementById("custom-total-price").textContent = formatCurrency(customTotal);

    // Determine if custom total qualifies for bundle price if all items are selected
    const allSelected = list.items.every(i => i.checked);
    const cartButton = document.getElementById("add-custom-cart-btn");
    
    if (allSelected) {
        document.getElementById("custom-total-label").textContent = "Total Selecionado (Preço do Kit Completo!)";
        document.getElementById("custom-total-price").textContent = formatCurrency(list.bundlePrice);
    } else {
        document.getElementById("custom-total-label").textContent = "Total dos Itens Selecionados";
    }

    if (selectedItems.length === 0) {
        cartButton.disabled = true;
        cartButton.classList.add("opacity-50", "cursor-not-allowed");
    } else {
        cartButton.disabled = false;
        cartButton.classList.remove("opacity-50", "cursor-not-allowed");
    }
}

// Add to Cart / Checkout Trigger
function updateCartBadge() {
    const badge = document.getElementById("cart-badge");
    let count = 0;
    if (state.cart && state.cart.lists) {
        state.cart.lists.forEach(l => {
            count += l.items.length;
        });
    }
    if (count > 0) {
        badge.textContent = count;
        badge.classList.remove("hidden");
    } else {
        badge.classList.add("hidden");
    }
}

function buyBundle() {
    const list = state.selectedList;
    if (!list) return;

    const school = state.schools.find(s => s.id === list.schoolId);
    const schoolName = school ? school.name : "Escola";

    const cartList = {
        listId: list.id,
        title: list.title,
        schoolName: schoolName,
        grade: list.grade,
        items: list.items.map(i => ({ ...i, quantity: 1, checked: true }))
    };

    if (!state.cart.lists) {
        state.cart.lists = [];
    }

    const existingIndex = state.cart.lists.findIndex(l => l.listId === list.id);
    if (existingIndex > -1) {
        state.cart.lists[existingIndex] = cartList;
    } else {
        state.cart.lists.push(cartList);
    }

    updateCartBadge();
    openCartView();
}

function buyCustom() {
    const list = state.selectedList;
    if (!list) return;

    const school = state.schools.find(s => s.id === list.schoolId);
    const schoolName = school ? school.name : "Escola";

    const selectedItems = list.items.filter(i => i.checked);
    if (selectedItems.length === 0) return;

    const cartList = {
        listId: list.id,
        title: list.title,
        schoolName: schoolName,
        grade: list.grade,
        items: selectedItems.map(i => ({ ...i, quantity: 1, checked: true }))
    };

    if (!state.cart.lists) {
        state.cart.lists = [];
    }

    const existingIndex = state.cart.lists.findIndex(l => l.listId === list.id);
    if (existingIndex > -1) {
        state.cart.lists[existingIndex] = cartList;
    } else {
        state.cart.lists.push(cartList);
    }

    updateCartBadge();
    openCartView();
}

function openCartView() {
    setView("cart");
    renderCart();
}

function renderCart() {
    const container = document.getElementById("cart-lists-container");
    container.innerHTML = "";

    const lists = state.cart.lists || [];
    let totalItems = 0;

    if (lists.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12 bg-surface-container-low rounded-xl border border-outline-variant">
                <span class="material-symbols-outlined text-[48px] text-outline">shopping_cart</span>
                <p class="font-headline-sm text-headline-sm text-primary mt-2">Seu carrinho está vazio</p>
                <p class="font-body-md text-body-md text-on-surface-variant">Selecione uma lista de material na página inicial para começar.</p>
                <button onclick="setView('home')" class="bg-primary text-on-primary px-lg py-sm rounded-lg font-button text-button mt-md">Ver Listas</button>
            </div>
        `;
        document.getElementById("cart-items-count-badge").textContent = "0 Itens";
        updateCartTotals();
        return;
    }

    lists.forEach(list => {
        let listTotal = 0;
        let itemsHtml = "";

        list.items.forEach(item => {
            totalItems += item.quantity;
            const itemSubtotal = item.price * item.quantity;
            listTotal += itemSubtotal;

            itemsHtml += `
                <div class="flex items-center gap-md py-sm border-b border-surface-variant last:border-0">
                    <img class="w-16 h-16 object-cover rounded-lg bg-surface-container" src="${item.image}" alt="${item.name}"/>
                    <div class="flex-1">
                        <div class="flex justify-between items-start">
                            <h4 class="font-label-lg text-label-lg text-primary">${item.name}</h4>
                            <span class="font-label-lg text-label-lg text-primary font-bold">${formatCurrency(item.price)}</span>
                        </div>
                        <div class="flex items-center gap-xs mt-1">
                            <span class="${item.mandatory ? 'bg-tertiary-fixed text-on-tertiary-fixed-variant' : 'bg-surface-container-high text-on-surface-variant'} px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider">${item.mandatory ? 'Obrigatório' : 'Opcional'}</span>
                        </div>
                        <div class="flex items-center justify-between mt-sm">
                            <div class="flex items-center border border-outline-variant rounded-lg overflow-hidden h-8 bg-surface">
                                <button onclick="updateCartQuantity('${list.listId}', '${item.id}', -1)" class="px-3 hover:bg-surface-variant text-on-surface-variant transition-colors font-bold">-</button>
                                <span class="px-4 font-label-md text-label-md border-x border-outline-variant">${item.quantity}</span>
                                <button onclick="updateCartQuantity('${list.listId}', '${item.id}', 1)" class="px-3 hover:bg-surface-variant text-on-surface-variant transition-colors font-bold">+</button>
                            </div>
                            <button onclick="removeCartItem('${list.listId}', '${item.id}')" class="text-on-surface-variant hover:text-error transition-colors">
                                <span class="material-symbols-outlined text-[20px]">close</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });

        container.innerHTML += `
            <div id="cart-list-${list.listId}" class="bg-surface-container-lowest rounded-xl shadow-[0px_4px_12px_rgba(26,35,126,0.08)] overflow-hidden border border-outline-variant">
                <div class="p-md bg-surface-container-low flex justify-between items-center">
                    <div>
                        <h3 class="font-headline-sm text-headline-sm text-primary font-bold">${list.schoolName}</h3>
                        <p class="text-on-surface-variant font-body-sm text-body-sm">${list.grade}</p>
                    </div>
                    <button onclick="removeCartList('${list.listId}')" class="text-error flex items-center gap-xs hover:bg-error-container/50 px-sm py-xs rounded-lg transition-colors font-button text-body-sm">
                        <span class="material-symbols-outlined text-[20px]">delete</span>
                        Remover Lista
                    </button>
                </div>
                <div class="p-md space-y-sm">
                    ${itemsHtml}
                </div>
                <div class="px-md py-sm bg-surface-container-low/50 flex justify-end">
                    <p class="font-label-lg text-label-lg text-primary">Subtotal da Lista: <span class="text-primary font-bold">${formatCurrency(listTotal)}</span></p>
                </div>
            </div>
        `;
    });

    document.getElementById("cart-items-count-badge").textContent = `${totalItems} Itens`;
    updateCartTotals();
}

function updateCartQuantity(listId, itemId, delta) {
    const list = state.cart.lists.find(l => l.listId === listId);
    if (!list) return;

    const item = list.items.find(i => i.id === itemId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeCartItem(listId, itemId);
    } else {
        renderCart();
    }
    updateCartBadge();
}

function removeCartItem(listId, itemId) {
    const list = state.cart.lists.find(l => l.listId === listId);
    if (!list) return;

    list.items = list.items.filter(i => i.id !== itemId);
    
    if (list.items.length === 0) {
        removeCartList(listId);
    } else {
        renderCart();
    }
    updateCartBadge();
}

function removeCartList(listId) {
    state.cart.lists = state.cart.lists.filter(l => l.listId !== listId);
    renderCart();
    updateCartBadge();
}

function updateCartTotals() {
    let subtotal = 0;
    const lists = state.cart.lists || [];
    
    lists.forEach(l => {
        l.items.forEach(i => {
            subtotal += i.price * i.quantity;
        });
    });

    let discount = state.cart.promoDiscount || 0;
    let total = subtotal - discount;
    if (total < 0) total = 0;

    state.cart.total = total;
    state.cart.items = lists.flatMap(l => l.items);

    document.getElementById("cart-summary-subtotal").textContent = formatCurrency(subtotal);
    document.getElementById("cart-summary-total").textContent = formatCurrency(total);

    const checkoutBtn = document.getElementById("cart-checkout-btn");
    if (subtotal === 0) {
        checkoutBtn.disabled = true;
        checkoutBtn.classList.add("opacity-50", "cursor-not-allowed");
    } else {
        checkoutBtn.disabled = false;
        checkoutBtn.classList.remove("opacity-50", "cursor-not-allowed");
    }
}

function applyPromoCode() {
    const input = document.getElementById("cart-promo-input").value.trim().toUpperCase();
    if (input === "LISTA10") {
        let subtotal = 0;
        const lists = state.cart.lists || [];
        lists.forEach(l => {
            l.items.forEach(i => {
                subtotal += i.price * i.quantity;
            });
        });
        state.cart.promoDiscount = subtotal * 0.10;
        state.cart.promoCode = "LISTA10";
        alert("Cupom LISTA10 aplicado! 10% de desconto concedido.");
    } else {
        alert("Cupom inválido ou expirado.");
        state.cart.promoDiscount = 0;
        state.cart.promoCode = "";
    }
    updateCartTotals();
}

function goToCheckout() {
    setView("checkout");
    openCheckout();
}

function openCheckout() {
    const checkoutSummary = document.getElementById("checkout-summary-items");
    checkoutSummary.innerHTML = "";

    let subtotal = 0;
    const lists = state.cart.lists || [];
    
    lists.forEach(list => {
        list.items.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            checkoutSummary.innerHTML += `
                <div class="flex justify-between items-center text-body-sm py-1 border-b border-outline-variant">
                    <span class="text-on-surface-variant font-medium">${item.name} x${item.quantity}</span>
                    <span class="text-primary font-bold">${formatCurrency(itemTotal)}</span>
                </div>
            `;
        });
    });

    let promoDiscount = state.cart.promoDiscount || 0;
    let total = subtotal - promoDiscount;
    if (total < 0) total = 0;

    document.getElementById("checkout-subtotal").textContent = formatCurrency(subtotal);
    document.getElementById("checkout-discount").textContent = `-${formatCurrency(promoDiscount)}`;
    document.getElementById("checkout-total").textContent = formatCurrency(total);

    // Metadata school lists titles combined
    const schoolTitles = lists.map(l => `${l.schoolName} (${l.grade})`).join(" + ");
    document.getElementById("checkout-school-info").textContent = schoolTitles || "Diversas Escolas";
}

// Simulated Checkout submission
function handleCheckoutSubmit(event) {
    event.preventDefault();

    const parentName = document.getElementById("client-parent-name").value;
    const studentName = document.getElementById("client-student-name").value;
    const phone = document.getElementById("client-phone").value;
    const address = document.getElementById("client-address").value;
    const paymentMethod = document.querySelector('input[name="payment_method"]:checked').value;

    const orderId = `LBOX-${Math.floor(1000 + Math.random() * 9000)}`;

    const lists = state.cart.lists || [];
    const schoolName = lists.map(l => l.schoolName).filter((v, i, a) => a.indexOf(v) === i).join(" + ") || "Outro";
    const gradeName = lists.map(l => l.grade).filter((v, i, a) => a.indexOf(v) === i).join(" + ") || "Geral";

    const newOrder = {
        id: orderId,
        parentName,
        studentName,
        schoolName: schoolName,
        gradeName: gradeName,
        phone,
        address,
        paymentMethod,
        total: state.cart.total,
        status: "received",
        date: new Date().toISOString(),
        items: lists.flatMap(l => l.items).map(i => `${i.name} (x${i.quantity})`)
    };

    // Add order to global list and update localStorage
    state.orders.push(newOrder);
    saveData("listabox_orders", state.orders);

    // Clear cart after checkout
    state.cart = {
        lists: [],
        items: [],
        listId: null,
        isCustom: false,
        total: 0,
        promoDiscount: 0,
        promoCode: ""
    };
    updateCartBadge();

    // Show Success screen with Pix instruction or generic confirmation
    showSuccessScreen(newOrder);
}

function showSuccessScreen(order) {
    document.getElementById("success-order-id").textContent = order.id;
    document.getElementById("success-total").textContent = formatCurrency(order.total);

    const pixContainer = document.getElementById("pix-qr-container");
    if (order.paymentMethod === "pix") {
        pixContainer.classList.remove("hidden");
    } else {
        pixContainer.classList.add("hidden");
    }

    // Set tracking context
    state.trackingOrder = order;

    setView("success");
}

function startOrderTracking() {
    setView("tracking");
    renderTrackingDetails();
}

function renderTrackingDetails() {
    const order = state.trackingOrder;
    if (!order) return;

    document.getElementById("track-order-id").textContent = order.id;
    document.getElementById("track-school-grade").textContent = `${order.schoolName} - ${order.gradeName}`;
    document.getElementById("track-student").textContent = order.studentName;
    document.getElementById("track-total").textContent = formatCurrency(order.total);

    // Address & Date details
    document.getElementById("track-address").textContent = order.address;
    document.getElementById("track-date").textContent = formatDate(order.date);

    // Status classes
    const stages = ["received", "preparing", "shipping", "delivered"];
    const currentIdx = stages.indexOf(order.status);

    stages.forEach((stage, idx) => {
        const stepCircle = document.getElementById(`track-step-${stage}`);
        const stepLine = document.getElementById(`track-line-${stage}`);
        const stepText = document.getElementById(`track-text-${stage}`);

        if (idx <= currentIdx) {
            // Completed or active stage
            stepCircle.classList.remove("bg-outline", "text-surface-container");
            stepCircle.classList.add("bg-primary", "text-on-primary");
            if (stepLine) {
                stepLine.classList.remove("bg-outline-variant");
                stepLine.classList.add("bg-primary");
            }
            stepText.classList.add("text-primary", "font-bold");
            stepText.classList.remove("text-on-surface-variant");
        } else {
            // Future stage
            stepCircle.classList.add("bg-outline", "text-surface-container");
            stepCircle.classList.remove("bg-primary", "text-on-primary");
            if (stepLine) {
                stepLine.classList.add("bg-outline-variant");
                stepLine.classList.remove("bg-primary");
            }
            stepText.classList.remove("text-primary", "font-bold");
            stepText.classList.add("text-on-surface-variant");
        }
    });
}

// MERCHANT ADMIN DASHBOARD LOGIC

function toggleAdminView() {
    if (state.currentView === "admin") {
        setView("home");
        renderHome();
    } else {
        setView("admin");
        renderAdmin();
    }
}

function setAdminTab(tabName) {
    state.adminActiveTab = tabName;
    renderAdmin();
}

function renderAdmin() {
    // Nav highlight
    const tabLists = document.getElementById("admin-tab-lists");
    const tabOrders = document.getElementById("admin-tab-orders");
    const tabSchools = document.getElementById("admin-tab-schools");

    if (state.adminActiveTab === "lists") {
        tabLists.classList.add("border-primary", "text-primary");
        tabLists.classList.remove("border-transparent", "text-on-surface-variant");
        tabOrders.classList.remove("border-primary", "text-primary");
        tabOrders.classList.add("border-transparent", "text-on-surface-variant");
        if (tabSchools) {
            tabSchools.classList.remove("border-primary", "text-primary");
            tabSchools.classList.add("border-transparent", "text-on-surface-variant");
        }

        document.getElementById("admin-lists-section").classList.remove("hidden");
        document.getElementById("admin-orders-section").classList.add("hidden");
        document.getElementById("admin-schools-section").classList.add("hidden");
        renderAdminLists();
    } else if (state.adminActiveTab === "orders") {
        tabOrders.classList.add("border-primary", "text-primary");
        tabOrders.classList.remove("border-transparent", "text-on-surface-variant");
        tabLists.classList.remove("border-primary", "text-primary");
        tabLists.classList.add("border-transparent", "text-on-surface-variant");
        if (tabSchools) {
            tabSchools.classList.remove("border-primary", "text-primary");
            tabSchools.classList.add("border-transparent", "text-on-surface-variant");
        }

        document.getElementById("admin-lists-section").classList.add("hidden");
        document.getElementById("admin-orders-section").classList.remove("hidden");
        document.getElementById("admin-schools-section").classList.add("hidden");
        renderAdminOrders();
    } else if (state.adminActiveTab === "schools") {
        if (tabSchools) {
            tabSchools.classList.add("border-primary", "text-primary");
            tabSchools.classList.remove("border-transparent", "text-on-surface-variant");
        }
        tabLists.classList.remove("border-primary", "text-primary");
        tabLists.classList.add("border-transparent", "text-on-surface-variant");
        tabOrders.classList.remove("border-primary", "text-primary");
        tabOrders.classList.add("border-transparent", "text-on-surface-variant");

        document.getElementById("admin-lists-section").classList.add("hidden");
        document.getElementById("admin-orders-section").classList.add("hidden");
        document.getElementById("admin-schools-section").classList.remove("hidden");
        renderAdminSchools();
    }
}

function renderAdminLists() {
    const listContainer = document.getElementById("admin-lists-container");
    listContainer.innerHTML = "";

    state.lists.forEach(list => {
        const school = state.schools.find(s => s.id === list.schoolId);
        listContainer.innerHTML += `
            <div class="bg-surface-container-lowest p-md rounded-xl border border-outline-variant shadow-sm flex flex-col md:flex-row justify-between gap-md">
                <div>
                    <span class="bg-primary-fixed text-primary px-sm py-xs rounded text-body-sm font-semibold mr-xs">
                        ${school ? school.name : "Geral"}
                    </span>
                    <span class="text-on-surface-variant text-body-sm">${list.grade} | ${list.year}</span>
                    <h4 class="font-headline-sm text-headline-sm text-primary mt-sm">${list.title}</h4>
                    <p class="font-body-sm text-body-sm text-on-surface-variant mt-xs">${list.items.length} itens cadastrados</p>
                    <p class="font-label-lg text-label-lg text-primary mt-sm">Preço do Kit: ${formatCurrency(list.bundlePrice)}</p>
                </div>
                <div class="flex items-center gap-sm">
                    <button onclick="openEditListModal('${list.id}')" class="bg-secondary-container text-on-secondary-container px-md py-sm rounded-lg flex items-center gap-xs font-button text-button hover:opacity-95 transition-opacity">
                        <span class="material-symbols-outlined">edit</span> Editar Itens
                    </button>
                    <button onclick="deleteSchoolList('${list.id}')" class="bg-error-container text-on-error-container p-sm rounded-lg hover:opacity-95 transition-opacity">
                        <span class="material-symbols-outlined">delete</span>
                    </button>
                </div>
            </div>
        `;
    });
}

function renderAdminOrders() {
    const ordersContainer = document.getElementById("admin-orders-container");
    ordersContainer.innerHTML = "";

    if (state.orders.length === 0) {
        ordersContainer.innerHTML = `
            <div class="text-center py-12 bg-surface-container-low rounded-xl border border-outline-variant">
                <span class="material-symbols-outlined text-[48px] text-outline">shopping_cart</span>
                <p class="font-label-lg text-label-lg text-primary mt-2">Nenhum pedido recebido ainda</p>
            </div>
        `;
        return;
    }

    // Sort orders from newest to oldest
    const sortedOrders = [...state.orders].sort((a, b) => new Date(b.date) - new Date(a.date));

    sortedOrders.forEach(order => {
        ordersContainer.innerHTML += `
            <div class="bg-surface-container-lowest p-md rounded-xl border border-outline-variant shadow-sm space-y-md">
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-outline-variant pb-sm">
                    <div>
                        <span class="font-bold text-primary font-headline-sm">${order.id}</span>
                        <span class="text-body-sm text-on-surface-variant ml-sm">${formatDate(order.date)}</span>
                    </div>
                    <div class="flex items-center gap-sm mt-sm md:mt-0">
                        <span class="text-body-sm text-on-surface-variant font-medium">Status:</span>
                        <select onchange="updateOrderStatus('${order.id}', this.value)" class="bg-surface-container border border-outline text-primary text-body-sm rounded px-sm py-1 font-medium focus:ring-primary">
                            <option value="received" ${order.status === 'received' ? 'selected' : ''}>Recebido</option>
                            <option value="preparing" ${order.status === 'preparing' ? 'selected' : ''}>Separando Material</option>
                            <option value="shipping" ${order.status === 'shipping' ? 'selected' : ''}>Rota de Entrega</option>
                            <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>Entregue</option>
                        </select>
                    </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-sm text-body-sm text-on-surface-variant">
                    <div>
                        <p class="text-on-surface"><strong>Cliente (Responsável):</strong> ${order.parentName}</p>
                        <p><strong>Estudante:</strong> ${order.studentName}</p>
                        <p><strong>WhatsApp:</strong> ${order.phone}</p>
                        <p><strong>Endereço de Entrega:</strong> ${order.address}</p>
                    </div>
                    <div>
                        <p class="text-on-surface"><strong>Lista de Material:</strong> ${order.schoolName} - ${order.gradeName}</p>
                        <p><strong>Total:</strong> <strong class="text-primary text-[18px]">${formatCurrency(order.total)}</strong> (${order.paymentMethod.toUpperCase()})</p>
                        <p><strong>Itens inclusos:</strong> ${order.items.join(', ')}</p>
                    </div>
                </div>
            </div>
        `;
    });
}

function updateOrderStatus(orderId, newStatus) {
    const order = state.orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        saveData("listabox_orders", state.orders);
        
        // If the tracking order matches, sync it
        if (state.trackingOrder && state.trackingOrder.id === orderId) {
            state.trackingOrder = order;
        }
    }
}

// Add List Admin flows
function openAddListModal() {
    const schoolSelect = document.getElementById("admin-add-school");
    schoolSelect.innerHTML = "";
    state.schools.forEach(school => {
        schoolSelect.innerHTML += `<option value="${school.id}">${school.name}</option>`;
    });

    document.getElementById("admin-list-modal").classList.remove("hidden");
    document.getElementById("admin-list-modal").classList.add("flex");
}

function closeAddListModal() {
    document.getElementById("admin-list-modal").classList.add("hidden");
    document.getElementById("admin-list-modal").classList.remove("flex");
}

function handleAddListSubmit(event) {
    event.preventDefault();

    const title = document.getElementById("admin-add-title").value;
    const schoolId = document.getElementById("admin-add-school").value;
    const grade = document.getElementById("admin-add-grade").value;
    const year = document.getElementById("admin-add-year").value;
    const bundlePrice = parseFloat(document.getElementById("admin-add-price").value);
    const originalPrice = bundlePrice * 1.15; // default simulated markup saving

    const newList = {
        id: `list-${Date.now()}`,
        schoolId,
        grade,
        year,
        title,
        description: `Kit escolar completo e customizável para o ano letivo de ${year}.`,
        originalPrice,
        bundlePrice,
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600",
        verified: true,
        items: []
    };

    state.lists.push(newList);
    saveData("listabox_lists", state.lists);

    closeAddListModal();
    renderAdmin();
}

function deleteSchoolList(listId) {
    if (confirm("Tem certeza que deseja remover esta lista de materiais?")) {
        state.lists = state.lists.filter(l => l.id !== listId);
        saveData("listabox_lists", state.lists);
        renderAdmin();
    }
}

// Edit items modal
function openEditListModal(listId) {
    const list = state.lists.find(l => l.id === listId);
    if (!list) return;

    state.adminSelectedList = list;

    document.getElementById("admin-edit-title").textContent = `Itens de: ${list.title}`;
    renderAdminListItems();

    document.getElementById("admin-edit-items-modal").classList.remove("hidden");
    document.getElementById("admin-edit-items-modal").classList.add("flex");
}

function closeEditListModal() {
    document.getElementById("admin-edit-items-modal").classList.add("hidden");
    document.getElementById("admin-edit-items-modal").classList.remove("flex");
    state.adminSelectedList = null;
    renderAdmin();
}

function renderAdminListItems() {
    const list = state.adminSelectedList;
    const container = document.getElementById("admin-items-list-container");
    container.innerHTML = "";

    if (list.items.length === 0) {
        container.innerHTML = `<p class="text-body-md text-on-surface-variant py-4 text-center">Nenhum item cadastrado nesta lista.</p>`;
        return;
    }

    list.items.forEach(item => {
        container.innerHTML += `
            <div class="flex justify-between items-center bg-surface-container p-sm rounded-lg text-body-sm text-on-surface">
                <div>
                    <strong>${item.name}</strong> - ${formatCurrency(item.price)}
                    <span class="ml-sm font-semibold text-[10px] uppercase bg-primary-fixed text-primary px-1 rounded">
                        ${item.category}
                    </span>
                    <span class="ml-xs font-semibold text-[10px] uppercase bg-surface-container-highest text-on-surface-variant px-1 rounded">
                        ${item.mandatory ? 'Obrigatório' : 'Opcional'}
                    </span>
                </div>
                <button onclick="deleteAdminItem('${item.id}')" class="text-error hover:text-red-700">
                    <span class="material-symbols-outlined">delete</span>
                </button>
            </div>
        `;
    });
}

function handleAddItemSubmit(event) {
    event.preventDefault();

    const list = state.adminSelectedList;
    if (!list) return;

    const name = document.getElementById("admin-item-name").value;
    const price = parseFloat(document.getElementById("admin-item-price").value);
    const category = document.getElementById("admin-item-category").value;
    const mandatory = document.getElementById("admin-item-mandatory").checked;
    const description = document.getElementById("admin-item-desc").value;

    const imagesByCategory = {
        writing: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=200",
        art: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=200",
        notebook: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=200",
        others: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=200"
    };

    const newItem = {
        id: `item-${Date.now()}`,
        name,
        category,
        description: description || "Material selecionado de excelente qualidade.",
        price,
        mandatory,
        checked: true,
        image: imagesByCategory[category] || imagesByCategory.others
    };

    list.items.push(newItem);
    
    // Recalculate originalPrice sum dynamically based on items
    list.originalPrice = list.items.reduce((acc, i) => acc + i.price, 0);
    // Bundle price matches original or applies a standard 10% discount
    list.bundlePrice = list.originalPrice * 0.9;

    saveData("listabox_lists", state.lists);

    // Reset item form
    document.getElementById("admin-item-form").reset();

    renderAdminListItems();
}

function deleteAdminItem(itemId) {
    const list = state.adminSelectedList;
    if (!list) return;

    list.items = list.items.filter(i => i.id !== itemId);
    
    // Recalculate prices
    list.originalPrice = list.items.reduce((acc, i) => acc + i.price, 0);
    list.bundlePrice = list.originalPrice * 0.9;

    saveData("listabox_lists", state.lists);
    renderAdminListItems();
}

// SCHOOL MANAGEMENT FUNCTIONS

function renderAdminSchools() {
    const container = document.getElementById("admin-schools-container");
    container.innerHTML = "";

    state.schools.forEach(school => {
        // Count lists associated with this school
        const listsCount = state.lists.filter(l => l.schoolId === school.id).length;

        container.innerHTML += `
            <div class="bg-surface-container-lowest p-md rounded-xl border border-outline-variant shadow-sm flex flex-col md:flex-row justify-between gap-md items-center">
                <div>
                    <span class="bg-primary-fixed text-primary px-sm py-xs rounded text-body-sm font-semibold mr-xs">
                        ID: ${school.id}
                    </span>
                    <h4 class="font-headline-sm text-headline-sm text-primary mt-xs">${school.name}</h4>
                    <p class="font-body-sm text-body-sm text-on-surface-variant mt-xs">${listsCount} listas de material vinculadas</p>
                </div>
                <div>
                    <button onclick="deleteSchool('${school.id}')" class="bg-error-container text-on-error-container p-sm rounded-lg hover:opacity-95 transition-opacity flex items-center gap-xs font-button text-body-sm">
                        <span class="material-symbols-outlined">delete</span> Remover Escola
                    </button>
                </div>
            </div>
        `;
    });
}

function openAddSchoolModal() {
    document.getElementById("admin-school-modal").classList.remove("hidden");
    document.getElementById("admin-school-modal").classList.add("flex");
}

function closeAddSchoolModal() {
    document.getElementById("admin-school-modal").classList.add("hidden");
    document.getElementById("admin-school-modal").classList.remove("flex");
    // Clear inputs
    document.getElementById("admin-school-id").value = "";
    document.getElementById("admin-school-name").value = "";
}

function handleAddSchoolSubmit(event) {
    event.preventDefault();

    const id = document.getElementById("admin-school-id").value.trim().toLowerCase();
    const name = document.getElementById("admin-school-name").value.trim();

    if (!id || !name) return;

    // Check if ID already exists
    if (state.schools.some(s => s.id === id)) {
        alert("Já existe uma escola cadastrada com este identificador único.");
        return;
    }

    const newSchool = { id, name };
    state.schools.push(newSchool);
    saveData("listabox_schools", state.schools);

    closeAddSchoolModal();
    renderAdmin();
}

function deleteSchool(schoolId) {
    // Check if there are lists associated with this school
    const hasLists = state.lists.some(l => l.schoolId === schoolId);
    if (hasLists) {
        alert("Não é possível remover esta escola pois existem listas de material associadas a ela. Remova as listas primeiro.");
        return;
    }

    if (confirm("Tem certeza que deseja remover esta escola parceira?")) {
        state.schools = state.schools.filter(s => s.id !== schoolId);
        saveData("listabox_schools", state.schools);
        renderAdmin();
    }
}

// Window Onload initializer
window.addEventListener("DOMContentLoaded", () => {
    initData();
    setView("home");
    renderHome();

    // Bind filters
    document.getElementById("search-school").addEventListener("change", filterHomeLists);
    document.getElementById("search-grade").addEventListener("change", filterHomeLists);
    document.getElementById("search-text").addEventListener("input", filterHomeLists);
});
