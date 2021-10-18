import { css } from "styled-components";

import { breakpoints } from "../../00-tokens/dimension";

import InterBold from "./Inter/Inter-Bold.woff";
import InterRegular from "./Inter/Inter-Regular.woff";
import InterLight from "./Inter/Inter-LightBETA.woff";

const Typography = css`
	@font-face {
		font-family: "Inter Bold";
		src: url(${InterBold}) format("woff");
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: "Inter Regular";
		src: url(${InterRegular}) format("woff");
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: "Inter Light";
		src: url(${InterLight}) format("woff");
		font-weight: normal;
		font-style: normal;
	}

	:root {
		//Fonts --
		--bold-font: "Inter Bold", Arial, sans-serif;
		--regular-font: "Inter Regular", Arial, sans-serif;
		--light-font: "Inter Light", Arial, sans-serif;
		font-size: 62.5%;
		//Font sizes --
		--text-size-1: 6.104rem;
		--line-height-1: calc(1em + 0.25);
		--text-size-2: 4.883rem;
		--line-height-2: calc(1em + 0.25);
		--text-size-3: 3.906rem;
		--line-height-3: calc(1em + 0.25);
		--text-size-4: 3.125rem;
		--line-height-4: calc(1em + 0.25);
		--text-size-5: 2.5rem;
		--line-height-5: calc(1em + 0.25);
		--text-size-6: 2rem;
		--line-height-6: calc(1em + 0.25);
		--text-size-7: 1.6rem;
		--line-height-7: calc(1em + 0.25);
		--text-size-8: 1.28rem;
		--line-height-8: calc(1em + 0.25);
	}

	@media (min-width: ${breakpoints.breakpoint4}px) {
		:root {
			//For this, we appear to be the same across devices
		}
	}
`;

export default Typography;
