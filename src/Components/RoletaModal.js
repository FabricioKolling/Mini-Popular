import React, { useState, useEffect, useRef } from 'react';

const categorias = ['PADARIA', 'CARNE', 'HORTIFRÚTI', 'CEREAIS', 'BEBIDAS', 'CONGELADOS'];
const TOTAL_FATIAS = categorias.length;
const ANGULO_POR_FATIA = 360 / TOTAL_FATIAS;

const RoletaModal = ({ isOpen, onClose }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [hasSpun, setHasSpun] = useState(false);
  const [tempoRestante, setTempoRestante] = useState('');
  const roletaRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const proximoGiroTimestamp = localStorage.getItem('roletaProximoGiro');

    if (proximoGiroTimestamp) {
        setHasSpun(true);
        const intervalo = setInterval(() => {
            const agora = new Date().getTime();
            const distancia = proximoGiroTimestamp - agora;

            if (distancia < 0) {
                clearInterval(intervalo);
                setHasSpun(false);
                setTempoRestante('');
                localStorage.removeItem('roletaProximoGiro');
            } else {
                const horas = String(Math.floor((distancia / (1000 * 60 * 60)) % 24)).padStart(2, '0');
                const minutos = String(Math.floor((distancia / (1000 * 60)) % 60)).padStart(2, '0');
                const segundos = String(Math.floor((distancia / 1000) % 60)).padStart(2, '0');
                setTempoRestante(`${horas}h ${minutos}m ${segundos}s`);
            }
        }, 1000);
        return () => clearInterval(intervalo);
    } else {
        setHasSpun(false);
    }
  }, [isOpen]);

  const handleGirar = () => {
    if (isSpinning || hasSpun) return;

    setIsSpinning(true);
    setResultado(null);

    if (roletaRef.current) {
        roletaRef.current.style.transition = 'none';
        roletaRef.current.style.transform = 'rotate(0deg)';
    }

    setTimeout(() => {
        if (roletaRef.current) {
            roletaRef.current.style.transition = 'transform 7s cubic-bezier(.2,.9,.3,1)';
            const indiceSorteado = Math.floor(Math.random() * TOTAL_FATIAS);
            const anguloDeParada = 270 - (indiceSorteado * ANGULO_POR_FATIA) - (ANGULO_POR_FATIA / 2);
            const voltasExtras = 360 * 5;
            const rotacaoTotal = voltasExtras + anguloDeParada;

            roletaRef.current.style.transform = `rotate(${rotacaoTotal}deg)`;

            setTimeout(() => {
                setIsSpinning(false);
                setResultado(categorias[indiceSorteado]);
                setHasSpun(true);
                
                // =====================================================================
                // === ALTERAÇÃO FEITA AQUI: De 24 horas para 15 segundos ===
                const proximoGiro = new Date().getTime() + 15 * 1000; // 15 segundos
                // =====================================================================
                
                localStorage.setItem('roletaProximoGiro', proximoGiro);

            }, 7000);
        }
    }, 50);
  };

  const podeGirarAgora = !hasSpun && !isSpinning;

  if (!isOpen) return null;

  return (
    <div className="roleta-modal-overlay" onClick={onClose}>
      <div className="roleta-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="roleta-modal-fechar" onClick={onClose}>×</button>
        
        {hasSpun && !isSpinning ? (
          <div className="roleta-timer-container">
            Tempo restante: <span>{tempoRestante}</span>
          </div>
        ) : (
          <>
            <h2 className="roleta-titulo">Roleta de Promoção</h2>
            <p className="roleta-subtitulo">Uma vez por dia, gire para ver qual será seu desconto!</p>
          </>
        )}
        
        <div className="roleta-container">
            <div className="roleta-disco" ref={roletaRef}></div>
            <div className="roleta-ponteiro-central"></div>
        </div>
        
        <button 
            className="roleta-btn-girar" 
            onClick={handleGirar} 
            disabled={!podeGirarAgora}
        >
            Girar
        </button>

        {resultado && (
          <div className="roleta-resultado-texto">
            Parabéns!!! <br/> vc tem desconto em: <strong>{resultado}</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoletaModal;