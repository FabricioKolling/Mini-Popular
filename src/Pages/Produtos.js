import React from 'react';
import ProdutoCard from '../Components/ProdutoCard';
import BannerPromocao from '../Components/BannerPromocao';

function Produto() {
  return (

    <div>
       <BannerPromocao/>
    <div className="container-pagina-principal">

      {/* --- Categoria: Padaria --- */}
      <div className="container-categoria">
        <h2 className="titulo-secao-categoria">Padaria</h2>
        <div className="lista-produtos-categoria">

          <ProdutoCard
            nome="Pão Francês Fresquinho"
            descricao="Tradicional pão francês assado na hora."
            preco="0,80"
            emOferta={false}
            urlImagem="https://conteudo.imguol.com.br/c/entretenimento/65/2020/10/19/pao-frances-1603114029092_v2_4x3.jpg"
          />

          <ProdutoCard
            nome="Bolo de Chocolate Artesanal"
            descricao="Delicioso bolo de chocolate com cobertura cremosa."
            preco="25,99"
            emOferta={false}
            urlImagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRONuNfcFx0X33jkgY6TMlVTqmawk8AtSzsFg&s"
          />

          <ProdutoCard
            nome="Biscoitos Amanteigados Caseiros"
            descricao="Derretem na boca! Perfeitos para o café."
            preco="8,50"
            emOferta={false}
            urlImagem="https://lecado.com.br/wp-content/uploads/2019/03/lecado_amanteigados.jpg"
          />

          <ProdutoCard
            nome="Sonho de Doce de Leite"
            descricao="Massa leve e recheio cremoso de doce de leite."
            preco="6,00"
            emOferta={false}
            urlImagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUNtqzi_BhTs84ksf74i2udSVtxvafBSiAAWB61eNYNsmxQhOvH-Af7eMxOwqAH_WOid8&usqp=CAU"
          />

          <ProdutoCard
            nome="Mini Pizza Congelada"
            descricao="Saborosa e prática para um lanche rápido."
            preco="12,00"
            emOferta={false}
            urlImagem="https://giassi.vtexassets.com/arquivos/ids/2754395/Pizza-Frango-com-Bacon-e-Creme-de-Requeijao-Perdigao-Caixa-460g.png?v=638627497481800000"
          />

          <ProdutoCard
            nome="Rosquinhas de Coco"
            descricao="Leves e crocantes, com sabor natural de coco."
            preco="7,20"
            emOferta={false}
            urlImagem="https://vitarella.com.br/wp-content/uploads/2020/11/Rosquinha_Coco-737x737.png"
          />

          <ProdutoCard
            nome="Pão de Forma Integral"
            descricao="Fatias nutritivas para sanduíches saudáveis."
            preco="9,50"
            emOferta={false}
            urlImagem="https://wickbold.com.br/wp-content/uploads/2018/10/20230223_AF_DO_FORNO_100_INTEGRAL_V423_FRENTE-1.png"
          />
        </div>
      </div>

      {/* --- Categoria: Laticínios e Cereais --- */}
      <div className="container-categoria">
        <h2 className="titulo-secao-categoria">Laticínios e Cereais</h2>
        <div className="lista-produtos-categoria">

          <ProdutoCard
            nome="Leite Integral Longa Vida"
            descricao="Puro e nutritivo, essencial para sua família."
            preco="5,80"
            emOferta={false}
            urlImagem="https://shoppr.com.br/cdn/shop/products/Imagem8_d0942472-c732-4e47-b9b1-b41dfb3a1d8e.png?v=1545049563"
          />

          <ProdutoCard
            nome="Iogurte Natural Cremoso"
            descricao="Sem açúcar, ideal para combinar com frutas."
            preco="4,20"
            emOferta={false}
            urlImagem="https://s3-sa-east-1.amazonaws.com/superimg/img.produtos/7891000072950/img_1200_1.png"
          />

          <ProdutoCard
            nome="Cereal Matinal Crocante"
            descricao="Com fibras e vitaminas para um café da manhã energético."
            preco="15,99"
            emOferta={false}
            urlImagem="https://giassi.vtexassets.com/arquivos/ids/2041386/Cereal-Matinal-Chocolate-Crunch-Nestle-Sache-120g.png?v=638588848074700000"
          />

          <ProdutoCard
            nome="Queijo Mussarela Fatiado"
            descricao="Perfeito para sanduíches e pizzas. Embalagem de 200g."
            preco="14,50"
            emOferta={false}
            urlImagem="https://www.itambe.com.br/portal/Images/Produto/mkpitambequeijomussarela3001_full.png"
          />

          <ProdutoCard
            nome="Manteiga com Sal 250g"
            descricao="Saborosa e cremosa, ideal para pães e torradas."
            preco="9,80"
            emOferta={false}
            urlImagem="https://piracanjuba-institucional-prd.s3.sa-east-1.amazonaws.com/product_images/image/manteiga-com-sal-piracanjuba-500g-848x1007px-215.webp"
          />

          <ProdutoCard
            nome="Granola com Frutas Secas"
            descricao="Mistura nutritiva de grãos e frutas para seu café."
            preco="18,00"
            emOferta={false}
            urlImagem="https://nutriwieder.com.br/wp-content/uploads/2023/10/IMG_8369.png"
          />
        </div>
      </div>

      {/* --- Categoria: Hortifrúti --- */}
      <div className="container-categoria">
        <h2 className="titulo-secao-categoria">Hortifrúti</h2>
        <div className="lista-produtos-categoria">

          <ProdutoCard
            nome="Maçãs Fuji (kg)"
            descricao="Maçãs frescas e crocantes, ideais para lanches."
            preco="7,99"
            emOferta={false}
            urlImagem="https://superprix.vteximg.com.br/arquivos/ids/175177/Maca-Fuji--1-unidade-aprox.-200g-.png?v=636294176957700000"
          />

          <ProdutoCard
            nome="Bananas Nanicas (cacho)"
            descricao="Doces e energéticas, perfeitas para qualquer hora."
            preco="6,50"
            emOferta={false}
            urlImagem="https://vallefrutas.com.br/wp-content/uploads/banana-nanica.png"
          />

          <ProdutoCard
            nome="Alface Crespa Orgânica"
            descricao="Fresca e crocante, direto da horta para sua mesa."
            preco="3,00"
            emOferta={false}
            urlImagem="https://www.atlantikos.com.br/wp-content/uploads/2025/02/AXA_Ifood-159.png"
          />
 
          <ProdutoCard
            nome="Tomate Cereja (bandeja)"
            descricao="Doces e suculentos, ótimos para saladas e petiscos."
            preco="5,99"
            emOferta={false}
            urlImagem="https://tdc01z.vteximg.com.br/arquivos/ids/160154-1000-1000/21398-tomate-cereja-bandeja-280g.png?v=637897732586600000"
          />

          <ProdutoCard
            nome="Laranja Pêra (kg)"
            descricao="Perfeita para sucos ou consumo in natura."
            preco="4,20"
            emOferta={false}
            urlImagem="https://www.jauserve.com.br/dw/image/v2/BFJL_PRD/on/demandware.static/-/Sites-jauserve-master/default/dw506f717b/7286.png?sw=1800"
          />
        </div>
      </div>

      {/* --- Categoria: Carnes e Frios --- */}
      <div className="container-categoria">
        <h2 className="titulo-secao-categoria">Carnes e Frios</h2>
        <div className="lista-produtos-categoria">

          <ProdutoCard
            nome="Picanha Bovina Resfriada (kg)"
            descricao="Corte nobre para seu churrasco. Qualidade garantida."
            preco="69,90"
            emOferta={false}
            urlImagem="https://giassi.vtexassets.com/arquivos/ids/2046389/Picanha-Bovina-Resfriada-sem-Osso-Montana-Kg.png?v=638589124941270000"
          />

          <ProdutoCard
            nome="Peito de Frango Congelado (kg)"
            descricao="Macio e suculento, ideal para diversas receitas."
            preco="19,50"
            emOferta={false}
            urlImagem="https://www.seara.com.br/wp-content/uploads/2024/08/File-de-Peito-Seara-1kg-1.webp"
          />

          <ProdutoCard
            nome="Presunto Cozido Fatiado (200g)"
            descricao="Fatias finas, sabor suave. Perfeito para sanduíches."
            preco="9,99"
            emOferta={false}
            urlImagem="https://www.perdigao.com.br/assets/_images/9fa1b6b5d53330be2e03e1ffff98609a73634cea.png"
          />

          <ProdutoCard
            nome="Bacon Defumado em Cubos"
            descricao="Sabor marcante para realçar seus pratos."
            preco="16,00"
            emOferta={false}
            urlImagem="https://cdn.awsli.com.br/2500x2500/1676/1676415/produto/66131692/mockup_bacon-em-cubos-5zm6kcan02.png"
          />

          <ProdutoCard
            nome="Salame Italiano Fatiado"
            descricao="Um clássico italiano para aperitivos e petiscos."
            preco="18,70"
            emOferta={false}
            urlImagem="https://www.searafoodsolutions.com.br/wp-content/uploads/2023/08/555657-salame-tipo-italiano-fatiado-seara-gourmet-100g-min-1024x1024.png"
          />
        </div>
      </div>

      {/* --- Categoria: Bebidas --- */}
      <div className="container-categoria">
        <h2 className="titulo-secao-categoria">Bebidas</h2>
        <div className="lista-produtos-categoria">

          <ProdutoCard
            nome="Suco de Laranja Natural 1L"
            descricao="100% puro, sem adição de açúcar. Gelado e refrescante."
            preco="8,99"
            emOferta={false}
            urlImagem="https://obahortifruti.vtexassets.com/arquivos/ids/6148742/Suco-De-Laranja-Sem-Casca-Oba-Bem-Querer-1l.png?v=638456683184600000"
          />

          <ProdutoCard
            nome="Água Mineral sem Gás (12x500ml)"
            descricao="Pacote com 12 garrafas de água pura e leve."
            preco="15,00"
            emOferta={false}
            urlImagem="https://embalandofestas.com.br/storage/products/2024/05/IMG_20240502_085203-removebg-preview.png"
          />

          <ProdutoCard
            nome="Refrigerante Cola Zero Açúcar (2L)"
            descricao="Sabor intenso e refrescante, sem calorias."
            preco="6,50"
            emOferta={false}
            urlImagem="https://superrissul.vtexassets.com/arquivos/ids/793051/Refrigerante-CocaCola-sem-Acar-Pet-2L.png?v=638869854761730000"
          />

          <ProdutoCard
            nome="Cerveja Lager Puro Malte (Pack 6x350ml)"
            descricao="Leve e refrescante, ideal para relaxar."
            preco="22,99"
            emOferta={false}
            urlImagem="https://www.extrabom.com.br/uploads/produtos_packs/20220526175610_thumb_102411.png"
          />

          <ProdutoCard
            nome="Chá Gelado Sabor Limão (1.5L)"
            descricao="Sabor cítrico e refrescante para o verão."
            preco="4,80"
            emOferta={false}
            urlImagem="https://chasleao.com.br/wp-content/uploads/2023/11/Gelado_iceLimao-1-768x768.png"
          />
        </div>
      </div>

    </div>
    </div>
  );
}

export default Produto;
