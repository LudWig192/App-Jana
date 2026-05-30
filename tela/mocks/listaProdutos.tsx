const lista_produto = {

    itens: {

        titulo: "Nossos Serviços",

        subtitulo:
            "Escolha o estilo perfeito para valorizar ainda mais sua beleza.",

        lista: [

            {
                id: '1',
                nome: 'Preto Elegance',
                descricao:
                    'Unhas sofisticadas com acabamento preto brilhante, perfeitas para um visual moderno, marcante e cheio de personalidade.',
                preco: 'R$ 69,90',
                imagem:
                    require('../../assets/preto.jpg'),
            },

            {
                id: '2',
                nome: 'Rosa Glow',
                descricao:
                    'Um tom rosa vibrante e delicado que transmite feminilidade, charme e um toque moderno para qualquer ocasião.',

                preco: 'R$ 59,90',
                imagem:
                    require('../../assets/unhas rosa 1.jpg'),
            },

            {
                id: '3',
                nome: 'Vermelho Rubi',
                descricao:
                    'Clássico e elegante, com esmaltação vermelha intensa e acabamento premium para destacar sua beleza.',

                preco: 'R$ 64,90',
                imagem:
                    require('../../assets/unhas vermelhas.jpg'),
            },

            {
                id: '4',

                nome: 'Natural Beauty',
                descricao:
                    'Unhas simples e delicadas para quem ama um visual minimalista, leve e elegante no dia a dia.',
                preco: 'R$ 44,90',
                imagem:
                    require('../../assets/Unhas simples 3.jpg'),
            },

            {
                id: '5',

                nome: 'Floral Charm',
                descricao:
                    'Nail art floral com detalhes delicados e acabamento artístico para um visual romântico e exclusivo.',
                preco: 'R$ 79,90',
                imagem:
                    require('../../assets/flores.jpg'),
            },

        ]
    }
}

export default lista_produto;