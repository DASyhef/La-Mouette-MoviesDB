import React from 'react';
import './BG.css';
import Eric from './Eric.png';

const BG = ({ bg1Opacity, bg2Opacity }) => {
	return (
		<section>
			<div className="Eric">
				<img src={Eric} alt="SeagullMan" />
			</div>
			{/* BG1 avec l'opacité transmise en tant que prop */}
			<div className="BG BG1" style={{ opacity: bg1Opacity }} />
			{/* BG2 avec l'opacité transmise en tant que prop */}
			<div className="BG BG2" style={{ opacity: bg2Opacity }} />
		</section>
	);
};

export default BG;
