import React from 'react';
import BannerPromocao from '../Components/BannerPromocao';
import FiltroPesquisa from '../Components/FiltroPesquisa';
import ListaProdutos from '../Components/ListaProdutos';

const Produtos = () => {
  const categorias = [
    {
      titulo: 'Eletrodomésticos',
      produtos: [
        {
          nome: 'Liquidificador Turbo Pro',
          preco: 219.99,
          descricao: 'Alta potência, ideal para sucos e vitaminas.',
          imagem: 'https://via.placeholder.com/100?text=Liquidificador',
          destaque: true
        },
        {
          nome: 'Sanduicheira Inox Compact',
          preco: 149.90,
          descricao: 'Compacta, rápida e fácil de limpar.',
          imagem: 'https://via.placeholder.com/100?text=Sanduicheira'
        },
        {
          nome: 'Batedeira Ultra Mix 3 Velocidades',
          preco: 199.99,
          descricao: 'Leve, potente e silenciosa.',
          imagem: 'https://via.placeholder.com/100?text=Batedeira'
        },
        {
          nome: 'Forno Elétrico 45L Inox',
          preco: 549.99,
          descricao: 'Design moderno e multifunções.',
          imagem: 'https://via.placeholder.com/100?text=Forno'
        },
        {
          nome: 'Micro-ondas Digital 20L',
          preco: 389.00,
          descricao: 'Compacto e econômico.',
          imagem: 'https://via.placeholder.com/100?text=Microondas'
        },
        {
          nome: 'Panela Elétrica Multifuncional',
          preco: 239.90,
          descricao: 'Ideal para arroz, legumes e mais.',
          imagem: 'https://via.placeholder.com/100?text=Panela'
        }
      ]
    },
    {
      titulo: 'Acessórios de Cozinha',
      produtos: [
        {
          nome: 'Jogo de Facas Profissional 7 peças',
          preco: 129.90,
          descricao: 'Lâminas afiadas e duráveis para toda receita.',
          imagem: 'https://via.placeholder.com/100?text=Facas'
        },
        {
          nome: 'Conjunto de Panelas Antiaderente',
          preco: 349.99,
          descricao: 'Cozinhe sem grudar e sem estresse.',
          imagem: 'https://via.placeholder.com/100?text=Panelas'
        },
        {
          nome: 'Espremedor de Frutas Manual',
          preco: 59.90,
          descricao: 'Suco natural com facilidade.',
          imagem: 'https://via.placeholder.com/100?text=Espremedor'
        },
        {
          nome: 'Ralador Multiuso Inox',
          preco: 39.90,
          descricao: 'Rale com praticidade e segurança.',
          imagem: 'https://via.placeholder.com/100?text=Ralador'
        },
        {
          nome: 'Tábua de Corte Antibacteriana',
          preco: 49.90,
          descricao: 'Durável, segura e fácil de lavar.',
          imagem: 'https://via.placeholder.com/100?text=Tabua'
        },
        {
          nome: 'Escorredor de Louça Dobrável',
          preco: 69.90,
          descricao: 'Ideal para espaços pequenos.',
          imagem: 'https://via.placeholder.com/100?text=Escorredor'
        }
      ]
    }
  ];

  return (
    <div className="pagina-produtos" style={{ margin: 0, padding: 0 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', borderRadius: '20px', overflow: 'hidden' }}>
        <BannerPromocao />
      </div>
      <div className="conteudo-principal" style={{ display: 'flex', gap: '2rem', padding: '1rem 0', maxWidth: '1300px', margin: '0 auto' }}>
        <FiltroPesquisa />
        <ListaProdutos categorias={categorias} />
      </div>
    </div>
  );
};

export default Produtos;