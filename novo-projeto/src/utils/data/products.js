const data = [
    {
        id: 1,
        name: 'Canetas esferográficas',
        price: 1.5,
        image: 'caneta.png',
    },

    {
        id: 2,
        name: 'Caderno',
        price: 15,
        image: 'caderno.png',
    },

    {
        id: 3,
        name: 'Lápis',
        price: 10,
        image: 'lapis.png',
    },

    {
        id: 4,
        name: 'Clips',
        price: 20,
        image: 'clips.png',
    },

    {
        id: 5,
        name: 'Bloco de notas adesivas',
        price: 7,
        image: 'bloco_notas.png',
    },

    {
        id: 6,
        name: 'Grampeador',
        price: 30,
        image: 'grampeador.png',
    },

    {
        id: 7,
        name: 'Grampos para grampeador',
        price: 9.5,
        image: 'grampos.png',
    },

    {
        id: 8,
        name: 'Fita adesiva',
        price: 24,
        image: 'fita_adesiva.png',
    },

    {
        id: 9,
        name: 'Caneta marca-texto',
        price: 12,
        image: 'marca_texto.png',
    },

    {
        id: 10,
        name: 'Papel sulfite',
        price: 30,
        image: 'papel_sulfite.png',
    },

    {
        id: 11,
        name: 'Borrachas',
        price: 8,
        image: 'borracha.png',
    },

    {
        id: 12,
        name: 'Apontador de lápis',
        price: 6.5,
        image: 'apontador.png',
    },

    {
        id: 13,
        name: 'Agenda',
        price: 25,
        image: 'agenda.png',
    },

    {
        id: 14,
        name: 'Tesoura',
        price: 10,
        image: 'tesoura.png',
    },

    {
        id: 15,
        name: 'Réguas',
        price: 3.8,
        image: 'regua.png',
    },

    {
        id: 16,
        name: 'Envelopes',
        price: 12.2,
        image: 'envelopes.png',
    },
    {
        id: 17,
        name: 'Porta-canetas',
        price: 14.9,
        image: 'porta_canetas.png',
    },

    {
        id: 18,
        name: 'Pasta de arquivos',
        price: 27.9,
        image: 'pasta_arquivos.png',
    },

    {
        id: 19,
        name: 'Calculadora',
        price: 50,
        image: 'calculadora.png',
    },

    {
        id: 20,
        name: 'Organizador de escritório',
        price: 85,
        image: 'organizadores_escritorio.png',
    },

    {
        id: 21,
        name: 'Prendedores de papel',
        price: 15.9,
        image: 'prendedores_papel.png',
    },

    {
        id: 22,
        name: 'Porta-retratos',
        price: 15,
        image: 'porta_retratos.png',
    },

    {
        id: 23,
        name: 'Etiquetas adesivas',
        price: 75,
        image: 'etiquetas_adesivas.png',
    },

    {
        id: 24,
        name: 'Canetinha Hidrográfica Faber-Castell 24 Cores 15.0124CZF',
        price: 39.99,
        image: 'Canetinha_Hidrográfica.jpg',
    },

    {
        id: 25,
        name: 'Kit Caneta Esferografica Cis 1.0mm Ultra Bold Com 5un',
        price: 24.99,
        image: 'Kit_Caneta_Cis_Com_5un.jpg',
    },

    {
        id: 26,
        name: 'Estojo Escolar Dac Mulher Maravilha Vm',
        price: 54.99,
        image: 'Estojo_Escolar.jpg',
    },

    {
        id: 27,
        name: 'Caderno Universitário Jandaia On Fleek 200fls 10mat',
        price: 24.99,
        image: 'Caderno_Universitário.jpg',
    },

    {
        id: 28,
        name: 'Kit Face Molin Minnie 7 Pcs',
        price: 64.99,
        image: 'Kit_Minnie.jpg',
    },

    {
        id: 29,
        name: 'Kit Face Molin Spiderman 7 Pcs',
        price: 64.99,
        image: 'Kit_Spiderman.jpg',
    },

    {
        id: 30,
        name: 'Kit Face Molin Avengers 7 Pcs',
        price: 64.99,
        image: 'Kit_Avengers.jpg',
    },

    {
        id: 31,
        name: 'Maleta De Pintura Molin Mickey',
        price: 99.99,
        image: 'Maleta_Mickey.jpg',
    },

    {
        id: 32,
        name: 'Maleta De Pintura Molin Spiderman',
        price: 99.99,
        image: 'Maleta_Spiderman.jpg',
    },

    {
        id: 33,
        name: 'Massa Cerâmica Fria 500g',
        price: 28,
        image: 'Massa_Ceramica.jpg',
    },

    {
        id: 34,
        name: 'Plástico para Plastificação A4 220x307x0,05 125 micras 100un',
        price: 99,
        image: 'Plástico_Plastificação .jpg',
    },

    {
        id: 35,
        name: 'Tesoura Escolar Cis Criatic Ks260 Lamina Plastica',
        price: 14,
        image: 'Tesoura_Escolar.jpg',
    },

    {
        id: 36,
        name: 'Corretivo Fita Cis Milk Shake 5mmx6m',
        price: 20,
        image: 'Corretivo_Fita.jpg',
    },

    {
        id: 37,
        name: 'Kindle Paperwhite 16 GB',
        price: 720,
        image: 'Kindle_Paperwhite.jpg',
    },

    {
        id: 38,
        name: 'Cartas de um diabo a seu aprendiz Capa dura',
        price: 29.50,
        image: 'livro_1.jpg',
    },

    {
        id: 39,
        name: 'Assistente do Vilão',
        price: 34,
        image: 'livro_2.jpg',
    },

    {
        id: 40,
        name: 'O Hobbit',
        price: 38,
        image: 'livro_3.jpg',
    },

    {
        id: 41,
        name: 'Conjunto de Canetas de Desenho Animado Em Gel Apagável, Tinta Azul',
        price: 128,
        image: 'Caneta_apagavel.jpg',
    },

    {
        id: 42,
        name: 'Planner do Secreto - Capa Azul Capa dura',
        price: 44.42,
        image: 'Planner_Secreto.jpg',
    },

    {
        id: 43,
        name: 'Sketch & Planner - Lion Colors black & white',
        price: 24,
        image: 'Planner_leao.jpg',
    },

    {
        id: 44,
        name: '20Pcs Retro Bronze Metal Notebook Diary Photo Album Corner Protection Edge Protection Decoration',
        price: 26.88,
        image: 'Bronze_Metal.jpg',
    },

    {
        id: 45,
        name: 'O Príncipe - Edição de Luxo Almofadada',
        price: 40.93,
        image: 'livro_4.jpg',
    },

]

export default data