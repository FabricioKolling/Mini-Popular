import React from "react";

const Maps = () => {
	return (
		<section className="mapa_secao">
			<iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221.06436604275189!2d-48.516131343138184!3d-27.561583848031045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527399e100dc523%3A0x7d12126bac6dd050!2sCasa%20do%20V%C3%B4!5e0!3m2!1spt-BR!2sbr!4v1752062717799!5m2!1spt-BR!2sbr"
				height="450"
				style={{ border: 0, width: "100%" }}
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				title="Mapa atual 100% atualizado da sua localização"
			></iframe>
		</section>
	);
};

export default Maps;