import React, { useState, useEffect, useRef } from 'react';
import apiClient from '../api'; // Importa nosso cliente de API

const categorias = ['PADARIA', 'CARNES E FRIOS', 'HORTIFRÚTI', 'LATICÍNIOS E CEREAIS', 'BEBIDAS', 'CONGELADOS'];
const TOTAL_FATIAS = categorias.length;
const ANGULO_POR_FATIA = 360 / TOTAL_FATIAS;

const RoletaModal = ({ isOpen, onClose }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [podeGirar, setPodeGirar] = useState(false);
  const [tempoRestante, setTempoRestante] = useState('');
  const roletaRef = useRef(null);
  const intervalRef = useRef(null);

  // Função para buscar o status da roleta no backend
  const atualizarStatusRoleta = async () => {
    try {
      const { data } = await apiClient.get('/roleta/status');
      setPodeGirar(data.pode_girar);

      // Se não pode girar, inicia o contador regressivo
      if (!data.pode_girar && data.proximo_giro_disponivel_em) {
        const proximoGiroTimestamp = new Date(data.proximo_giro_disponivel_em).getTime();

        if (intervalRef.current) clearInterval(intervalRef.current);
        
        intervalRef.current = setInterval(() => {
          const agora = new Date().getTime();
          const distancia = proximoGiroTimestamp - agora;

          if (distancia < 0) {
            clearInterval(intervalRef.current);
            setPodeGirar(true);
            setTempoRestante('');
          } else {
            const horas = String(Math.floor((distancia / (1000 * 60 * 60)) % 24)).padStart(2, '0');
            const minutos = String(Math.floor((distancia / 1000 / 60) % 60)).padStart(2, '0');
            const segundos = String(Math.floor((distancia / 1000) % 60)).padStart(2, '0');
            setTempoRestante(`${horas}h ${minutos}m ${segundos}s`);
          }
        }, 1000);
      } else {
         if (intervalRef.current) clearInterval(intervalRef.current);
      }
    } catch (error) {
      console.error("Erro ao buscar status da roleta:", error);
      setPodeGirar(false);
    }
  };
  
  // Efeito que roda quando o modal é aberto
  useEffect(() => {
    if (isOpen) {
      atualizarStatusRoleta();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isOpen]);

  // Função para girar a roleta
  const handleGirar = async () => {
    if (isSpinning || !podeGirar) return;

    setIsSpinning(true);
    setResultado(null);

    // Reseta a posição visual da roleta
    if (roletaRef.current) {
        roletaRef.current.style.transition = 'none';
        roletaRef.current.style.transform = 'rotate(0deg)';
    }

    try {
        // Pede para o backend sortear e salvar o prêmio
        const { data } = await apiClient.post('/roleta/girar');
        const categoriaSorteada = data.categoria_premiada;
        const indiceSorteado = categorias.findIndex(c => c === categoriaSorteada);

        // Inicia a animação da roleta para parar no prêmio correto
        setTimeout(() => {
            if (roletaRef.current) {
                roletaRef.current.style.transition = 'transform 7s cubic-bezier(.2,.9,.3,1)';
                const anguloDeParada = 270 - (indiceSorteado * ANGULO_POR_FATIA) - (ANGULO_POR_FATIA / 2);
                const voltasExtras = 360 * 5;
                const rotacaoTotal = voltasExtras + anguloDeParada;

                roletaRef.current.style.transform = `rotate(${rotacaoTotal}deg)`;

                // Após a animação, mostra o resultado e atualiza o status
                setTimeout(() => {
                    setIsSpinning(false);
                    setResultado(categoriaSorteada);
                    atualizarStatusRoleta();
                    // Força o recarregamento da página para os descontos serem aplicados
                    // em todos os lugares.
                    alert(`Parabéns! Você ganhou 15% de desconto em ${categoriaSorteada} por 4 horas! A página será atualizada.`);
                    window.location.reload();
                }, 7000);
            }
        }, 50);

    } catch(error) {
        console.error("Erro ao girar a roleta", error);
        alert('Não foi possível girar a roleta. Tente novamente mais tarde.');
        setIsSpinning(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="roleta-modal-overlay" onClick={onClose}>
      <div className="roleta-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="roleta-modal-fechar" onClick={onClose}>×</button>
        
        {!podeGirar && !isSpinning ? (
          <div className="roleta-timer-container">
            Próximo giro em: <span>{tempoRestante}</span>
          </div>
        ) : (
          <>
            <h2 className="roleta-titulo">Roleta de Promoção</h2>
            <p className="roleta-subtitulo">Gire uma vez por dia para ganhar um super desconto!</p>
          </>
        )}
        
        <div className="roleta-container">
            <div className="roleta-disco" ref={roletaRef}></div>
            <div className="roleta-ponteiro-central"></div>
        </div>
        
        <button 
            className="roleta-btn-girar" 
            onClick={handleGirar} 
            disabled={isSpinning || !podeGirar}
        >
            {isSpinning ? 'Girando...' : 'Girar'}
        </button>

        {resultado && (
          <div className="roleta-resultado-texto">
            Parabéns! Você ganhou 15% de desconto em: <strong>{resultado}</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoletaModal;