import React, { useEffect, useState } from "react";

import styled, { css } from "styled-components";

//Arrangements
import Heading from "../../01-arrangements/heading";
import Paragraph from "../../01-arrangements/paragraph";
import Card from "../../01-arrangements/card";
import Layout from "../../01-arrangements/layout";

const HomePage = (props) => {
	return (
		<El
			{...props}
			data-testid='123abc'
			className={`home-page ${props.classes}`}
		>
			<Heading classes='visually-hidden'>
				Clearleft technical test
			</Heading>

			<Layout grid='25_25_25_25' breakdown>
				<div className='column'>
					<Card
						href='#'
						imageSrc='http://placeimg.com/640/480/sports'
						heading='The role of AI in the design industry'
					>
						<Paragraph level='2'>
							The idea of creating a machine that can mimic human
							intelligence is a mainstay in the field of
							technology.
						</Paragraph>
					</Card>
				</div>
				<div className='column'>
					<Card
						href='#'
						imageSrc='http://placeimg.com/640/480/sports'
						heading='The role of AI in the design industry'
					>
						<Paragraph level='2'>
							The idea of creating a machine that can mimic human
							intelligence is a mainstay in the field of
							technology.
						</Paragraph>
					</Card>
				</div>
				<div className='column'>
					<Card
						href='#'
						imageSrc='http://placeimg.com/640/480/sports'
						heading='The role of AI in the design industry'
					>
						<Paragraph level='2'>
							The idea of creating a machine that can mimic human
							intelligence is a mainstay in the field of
							technology.
						</Paragraph>
					</Card>
				</div>
				<div className='column'>
					<Card
						href='#'
						imageSrc='http://placeimg.com/640/480/sports'
						heading='The role of AI in the design industry'
					>
						<Paragraph level='2'>
							The idea of creating a machine that can mimic human
							intelligence is a mainstay in the field of
							technology.
						</Paragraph>
					</Card>
				</div>
			</Layout>
		</El>
	);
};

const El = styled.div`
	padding: var(--spacing-full) var(--spacing-half);
`;

export default HomePage;
