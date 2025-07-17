import React from 'react';
import { useIntersectionObserver } from '../Hooks/useIntersectionObserver';

function TxtHome() {
  const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div 
      ref={containerRef} 
      className={`Container-txt ${isVisible ? 'is-visible' : ''}`}
    >
        <div className='Titulo-slogan'>
            <p>Explore nossa mercadoria</p>
        </div>
        <div className='Slogan-txt'>
            <p><span className='Color-yellow'>Popular no nome,</span><span className='Color-green'> Popular no preço</span></p>
        </div>
    </div>
  )
}

export default TxtHome;