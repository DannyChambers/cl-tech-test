import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import axios from "axios";
import moment from "moment";

//Arrangements
import Heading from "../../01-arrangements/heading";
import Paragraph from "../../01-arrangements/paragraph";
import Card from "../../01-arrangements/card";
import Layout from "../../01-arrangements/layout";
import ButtonGroup from "../../01-arrangements/button-group";
//Patterns
import Button from "../../02-patterns/button";

const HomePage = (props) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		(async () => {
			const articles = await axios(
				`https://6103a28e79ed680017482595.mockapi.io/api/v1/posts`
			);

			console.log("articles: ", articles);

			setData(articles.data);
		})().catch((err) => {
			console.error(err);
		});
	}, []);

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
				{data &&
					data.map((item) => {
						return (
							<div className='column' key={item.id}>
								<Card
									href='#'
									imageSrc={item.image}
									imageAlt={item.title}
								>
									<Paragraph level='2' classes='date'>
										{moment(item.createdAt).fromNow()}
									</Paragraph>
									<Heading appearance='3' level='2'>
										{item.title}
									</Heading>
									<Paragraph level='2'>
										{item.excerpt}
									</Paragraph>
									<ButtonGroup>
										{item.categories.map((category) => {
											return (
												<Button
													size='small'
													text={category}
												/>
											);
										})}
									</ButtonGroup>
								</Card>
							</div>
						);
					})}
			</Layout>
		</El>
	);
};

const El = styled.div`
	padding: var(--spacing-full) var(--spacing-half);
`;

export default HomePage;
