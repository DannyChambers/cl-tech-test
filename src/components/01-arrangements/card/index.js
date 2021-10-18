import React from "react";
import styled, { css } from "styled-components";

import { breakpoints } from "../../00-tokens/dimension";
import Heading from "../../01-arrangements/heading";
import Image from "../../02-patterns/image";

const Card = (props) => {
	const tag = props.href ? "a" : "div";
	const headingLevel = props.level || "2";

	return (
		<El
			as={tag}
			{...props}
			data-testid='123abc'
			className={`page-section ${props.classes}`}
		>
			{(() => {
				if (props.imageSrc) {
					return <Image src={props.imageSrc} />;
				}
			})()}

			{(() => {
				if (props.heading) {
					return (
						<div className='card-heading'>
							<Heading level={headingLevel} appearance='3'>
								{props.heading}
							</Heading>
						</div>
					);
				}
			})()}

			<div className='card-content'>{props.children}</div>
		</El>
	);
};

const El = styled.div`
	background: var(--background-color-1);
	border: 1px solid var(--border-color-1);
	border-radius: var(--radius-half);
	box-shadow: 0px 4px 10px var(--shadow-color-1);
	height: 100%;
	overflow: hidden;

	${(props) =>
		props.href &&
		css`
			display: block;
			cursor: pointer;
			text-decoration: none;
			color: inherit;
			transition: border-color var(--transition-full) ease-in-out;

			&:hover,
			&:active {
				border-color: var(--cta-primary--active);
			}
		`}

	.card-heading {
		padding: var(--spacing-half);

		.heading {
			padding-bottom: 0;
		}
	}

	.card-content {
		padding: 0 var(--spacing-half) var(--spacing-half) var(--spacing-half);
	}

	@media (min-width: ${breakpoints.breakpoint4}px) {
	}
`;

export default Card;
