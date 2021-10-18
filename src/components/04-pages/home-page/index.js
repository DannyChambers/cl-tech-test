import React, { useEffect, useState } from "react";

//Arrangements
import Heading from "../../01-arrangements/heading";
import Paragraph from "../../01-arrangements/paragraph";

const HomePage = (props) => {
	return (
		<div
			{...props}
			data-testid='123abc'
			className={`home-page ${props.classes}`}
		>
			<Heading level='1'>Heading 1</Heading>
			<Heading level='2'>Heading 2</Heading>
			<Heading level='3'>Heading 3</Heading>
			<Heading level='4'>Heading 4</Heading>
			<Heading level='5'>Heading 5</Heading>

			<Paragraph level='1' appearance='3'>
				Paragraph large
			</Paragraph>
			<Paragraph level='2' appearance='4'>
				Paragraph regular
			</Paragraph>
			<Paragraph level='3' appearance='5'>
				Paragraph small
			</Paragraph>
		</div>
	);
};

export default HomePage;
