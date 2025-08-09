// src/Pages/Produtos.js

import React, { useState, useEffect, useCallback } from 'react';
import ProdutoCard from '../Components/ProdutoCard';
import BannerPromocao from '../Components/BannerPromocao';
import api from '../api';

function Produto() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProdutos = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/produtos');
      setProdutos(data); 
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProdutos();
  }, [fetchProdutos]);

  const findProduto = (nome, categoria) => {
    return produtos.find(p => p.nome === nome && p.categoria === categoria) || { nome: 'Carregando...', preco: '...' };
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px', fontSize: '1.5rem' }}>Carregando produtos...</div>;
  }

  return (
    <div>
      <BannerPromocao />
    <div className="container-pagina-principal">
      {/* --- Categoria: Padaria --- */}
      <div className="container-categoria">
        <h2 className="titulo-secao-categoria">Padaria</h2>
        <div className="lista-produtos-categoria">
          <ProdutoCard {...findProduto('Bolo de Chocolate Artesanal', 'Padaria')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Bolo de cenoura', 'Padaria')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Pão Francês Fresquinho', 'Padaria')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Pão de Forma Integral', 'Padaria')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Pão de queijo', 'Padaria')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Mini Calzone de presunto e queijo', 'Padaria')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Sonho de Doce de Leite', 'Padaria')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Cueca Virada', 'Padaria')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Biscoitos Amanteigados Caseiros', 'Padaria')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Rosquinhas de Coco', 'Padaria')} onDescontoRemovido={fetchProdutos} />
        </div>
      </div>

      {/* --- Categoria: Laticínios e Cereais --- */}
      <div className="container-categoria">
        <h2 className="titulo-secao-categoria">Laticínios e Cereais</h2>
        <div className="lista-produtos-categoria">
          <ProdutoCard {...findProduto('Iogurte Natural Cremoso', 'Laticínios e Cereais')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Leite Integral Longa Vida', 'Laticínios e Cereais')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Yakult (6 uni)', 'Laticínios e Cereais')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Queijo Mussarela Fatiado', 'Laticínios e Cereais')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Cereal Matinal Crocante', 'Laticínios e Cereais')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Amendoim Japonês (500g)', 'Laticínios e Cereais')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Granola com Frutas Secas', 'Laticínios e Cereais')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Manteiga com Sal 250g', 'Laticínios e Cereais')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Arroz (1kg)', 'Laticínios e Cereais')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Feijão (1kg)', 'Laticínios e Cereais')} onDescontoRemovido={fetchProdutos} />
        </div>
      </div>

      {/* --- Categoria: Hortifrúti --- */}
      <div className="container-categoria">
        <h2 className="titulo-secao-categoria">Hortifrúti</h2>
        <div className="lista-produtos-categoria">
          <ProdutoCard {...findProduto('Maçãs Fuji (kg)', 'Hortifrúti')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Bananas Nanicas (cacho)', 'Hortifrúti')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Laranja Pêra (kg)', 'Hortifrúti')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Morango (bandeja)', 'Hortifrúti')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Uva Niagara Rosa (kg)', 'Hortifrúti')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Alface Crespa Orgânica', 'Hortifrúti')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Tomate Cereja (bandeja)', 'Hortifrúti')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Cenoura (kg)', 'Hortifrúti')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Berinjela (kg)', 'Hortifrúti')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Abóbora (kg)', 'Hortifrúti')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Rúcula (uni)', 'Hortifrúti')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Beterraba (kg)', 'Hortifrúti')} onDescontoRemovido={fetchProdutos} />
        </div>
      </div>

      {/* --- Categoria: Carnes e Frios --- */}
      <div className="container-categoria">
        <h2 className="titulo-secao-categoria">Carnes e Frios</h2>
        <div className="lista-produtos-categoria">
          <ProdutoCard {...findProduto('Picanha Bovina Resfriada (kg)', 'Carnes e Frios')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Peito de Frango Congelado (kg)', 'Carnes e Frios')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Contra Filé (kg)', 'Carnes e Frios')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Fraldinha (kg)', 'Carnes e Frios')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Carne Moída (kg)', 'Carnes e Frios')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Tilápia (kg)', 'Carnes e Frios')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Presunto Cozido Fatiado (200g)', 'Carnes e Frios')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Lombo Defumado (kg)', 'Carnes e Frios')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Salame Italiano Fatiado', 'Carnes e Frios')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Bacon Defumado em Cubos', 'Carnes e Frios')} onDescontoRemovido={fetchProdutos} />
        </div>
      </div>

      {/* --- Categoria: Bebidas --- */}
      <div className="container-categoria">
        <h2 className="titulo-secao-categoria">Bebidas</h2>
        <div className="lista-produtos-categoria">
          <ProdutoCard {...findProduto('Refrigerante Cola Zero Açúcar (2L)', 'Bebidas')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Refrigerante Fruki (2L)', 'Bebidas')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Refrigerante Laranjinha Max (2L)', 'Bebidas')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Suco de Laranja Natural (1L)', 'Bebidas')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Energético Bally (1L)', 'Bebidas')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Água Mineral com Gás (12x500ml)', 'Bebidas')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Água Mineral sem Gás (12x500ml)', 'Bebidas')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Cerveja Lager Puro Malte (Pack 6x350ml)', 'Bebidas')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Corote de Limão (500ml)', 'Bebidas')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Chá Gelado Sabor Limão (1.5L)', 'Bebidas')} onDescontoRemovido={fetchProdutos} />
         </div>
      </div>
        
      {/* --- Categoria: Congelados --- */}
      <div className="container-categoria">
        <h2 className="titulo-secao-categoria">Congelados</h2>
        <div className="lista-produtos-categoria">
          <ProdutoCard {...findProduto('Batata Frita Congelada (1kg)', 'Congelados')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Nugget de Frango (500g)', 'Congelados')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Pão de Queijo Congelado (500g)', 'Congelados')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Lasanha Congelada (500g)', 'Congelados')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Hot Bowls Sadia (400g)', 'Congelados')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Hambúrguer Congelado', 'Congelados')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Pizza Congelada de Frango', 'Congelados')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Bolinha de Queijo Congelada (500g)', 'Congelados')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Milho e Ervilha Congelado (1kg)', 'Congelados')} onDescontoRemovido={fetchProdutos} />
          <ProdutoCard {...findProduto('Gelo (3kg)', 'Congelados')} onDescontoRemovido={fetchProdutos} />
        </div>
      </div>
    </div>
      
    </div>
  );
}

export default Produto;