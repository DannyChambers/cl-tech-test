import React, { useEffect, useState } from "react";

const HomePage = (props) => {
	return (
		<div
			{...props}
			data-testid='123abc'
			className={`home-page ${props.classes}`}
		>
			Home
		</div>
	);
};

export default HomePage;
