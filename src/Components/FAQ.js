import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

function FAQ() {
  return (
    <div className='faq_wrapper'>
      <Container>
        <h2 className='faq_title'>Perguntas Frequentes</h2>
        <Accordion defaultActiveKey="0">
          
          <Accordion.Item eventKey="0">
            <Accordion.Header>Qual é o endereço e o horário de funcionamento do Mini Popular?</Accordion.Header>
            <Accordion.Body>
              Nosso mercado está localizado no coração do bairro, no endereço Vargem Pequena, Florianópolis - SC, 88052-401. Estamos abertos de Segunda a Sábado, das 8h às 20h, e aos Domingos e feriados, das 8h às 13h. Venha nos visitar!
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Posso fazer minhas compras online e pedir entrega?</Accordion.Header>
            <Accordion.Body>
              Não. Atualmente, <strong>não oferecemos o serviço de compras online nem de entrega</strong>. Nosso site e aplicativo funcionam como um catálogo virtual e uma ferramenta para te ajudar a planejar suas visitas à nossa loja física, garantindo que você economize tempo e aproveite as melhores ofertas.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Qual é a finalidade deste site/app, já que não há entrega?</Accordion.Header>
            <Accordion.Body>
              O objetivo da nossa plataforma é ser sua maior aliada no planejamento! Com ela, você pode:<br/>
              <ul>
                <li>Ver nossos produtos e promoções antes de sair de casa.</li>
                <li>Criar e salvar sua lista de compras para não esquecer nada.</li>
                <li>Conferir os preços e estimar o valor da sua compra.</li>
                <li>Participar de promoções exclusivas, como a Roleta de Descontos.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="3">
            <Accordion.Header>Como funciona a 'Lista de Salvos'?</Accordion.Header>
            <Accordion.Body>
              A 'Lista de Salvos' é a sua lista de compras digital. Ao navegar pelos produtos, clique no botão de "adicionar" (ou um ícone de marcador) para salvá-los. Quando estiver na loja, você pode abrir a lista no seu celular para consultar tudo o que precisa comprar de forma rápida e organizada.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>A 'Roleta de Descontos' é real? Como eu uso o prêmio?</Accordion.Header>
            <Accordion.Body>
              Sim, é 100% real! A roleta é um presente nosso para você. Se você ganhar um prêmio (como um desconto ou um produto), basta <strong>tirar um print (captura de tela) da tela de premiação</strong> e apresentar no caixa da nossa loja física no momento de pagar suas compras. O prêmio é de uso único e válido conforme as regras descritas.
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="5">
            <Accordion.Header>Os preços e as promoções do site são os mesmos da loja física?</Accordion.Header>
            <Accordion.Body>
              Sim! Nosso compromisso é com a transparência. Todos os preços e ofertas que você vê no nosso site são os mesmos que você encontrará em nossas gôndolas. Usamos a plataforma para comunicar nossas promoções e garantir que você fique por dentro de todas as oportunidades de economizar.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>Como sei se um produto que vi no site está disponível na loja?</Accordion.Header>
            <Accordion.Body>
              Nosso site funciona como um catálogo dos produtos que geralmente trabalhamos, mas não mostra o estoque em tempo real. A disponibilidade pode variar. Se você precisa muito de um item específico, a melhor maneira de confirmar é nos visitando.
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="7">
            <Accordion.Header>Não encontrei um produto que costumo comprar. O que eu faço?</Accordion.Header>
            <Accordion.Body>
              Agradecemos o seu feedback! Como nosso site é uma ferramenta de apoio, pode ser que nem todos os itens da loja estejam cadastrados ainda. A melhor forma de saber sobre um produto específico é conversando com um de nossos funcionários durante sua visita à loja.
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="8">
            <Accordion.Header>Posso ligar para reservar um produto?</Accordion.Header>
            <Accordion.Body>
              Devido ao nosso foco em oferecer o melhor atendimento presencial e os melhores preços, não trabalhamos com um sistema de reservas por telefone. A compra de todos os itens é feita diretamente em nossa loja física.
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="9">
            <Accordion.Header>Quais formas de pagamento vocês aceitam na loja?</Accordion.Header>
            <Accordion.Body>
              Em nossa loja, aceitamos diversas formas de pagamento para sua conveniência: dinheiro, cartões de débito, cartões de crédito (Visa, Mastercard, Elo, etc.) e Pix.
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </Container>
    </div>
  );
}

export default FAQ;