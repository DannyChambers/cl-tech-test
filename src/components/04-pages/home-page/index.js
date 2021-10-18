import React, { useEffect, useState } from "react";

//Arrangements
import Heading from "../../01-arrangements/heading";
import Paragraph from "../../01-arrangements/paragraph";
import Card from "../../01-arrangements/card";

const HomePage = (props) => {
	return (
		<div
			{...props}
			data-testid='123abc'
			className={`home-page ${props.classes}`}
		>
			<Card
				href='#'
				imageSrc='http://placeimg.com/640/480/sports'
				heading='The role of AI in the design industry'
			>
				<Paragraph level='2'>
					The idea of creating a machine that can mimic human
					intelligence is a mainstay in the field of technology.
				</Paragraph>
			</Card>
		</div>
	);
};

export default HomePage;
