import { useState, useEffect } from "react";

const About = () => {
	const [language, setLanguage] = useState('es');

	useEffect(() => {
    setLanguage('en');
  }, []);

	return (
		<section className="about" id="about">
			<div>
				<img src="/img/PERFIL.png" />
				<h2>Lucía Castro</h2>
				<h3>{language === 'es' ? 'Social Media Manager, Community Manager & Trafficker' : 'Social Media Manager, Community Manager & Trafficker'}</h3>
				<p>{language === 'es' ? 
					'Soy una persona proactiva, curiosa y apasionada por el aprendizaje constante. Me enfoco en conectar marcas con su audiencia de manera auténtica, optimizando cada acción para obtener resultados. Siempre estoy en busca de nuevos desafíos y estrategias para seguir creciendo profesionalmente.' : 
					'I’m a proactive, curious person with a passion for constant learning. I focus on connecting brands with their audience authentically, optimizing every action for results. I’m always seeking new challenges and strategies to keep growing professionally.'}
				</p>
				<p className="clickhere">
					{language === 'es' ? 'Crezcamos juntos' : 'Lets grow together'}
					<button className="email-button">
							<a data-text='Click hereee' href="mailto:. mailto:" target="_blank">{language === 'es' ? 'Click acá' : 'Click here'}</a>
					</button>
				</p>
			</div>
				<button className="lnkdnbutton"><a href="" target="_blank" rel="noopener noreferrer"><img src="/img/lkdn logo.png" alt="" /></a></button>
		</section>
	)
}

export default About