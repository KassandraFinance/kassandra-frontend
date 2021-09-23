import styled from 'styled-components'

import theme from '../../styles/theme'

export const Web3Disabled = styled.section`
	max-width: 1520px;
	height: calc(100vh - 100px);
	margin: 0 auto;
	padding: 32px;

	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	div {
		width: 100%;
	}
`

export const Header = styled.div`
	border: 1px solid ${theme.colors.amber};

	text-align: center;
	padding: 24px;

	p {
		font-size: ${theme.font.sizes.font24};
	}
`

export const Body = styled.div`
	border-bottom: 1px solid ${theme.colors.amber};
	border-right: 1px solid ${theme.colors.amber};
	border-left: 1px solid ${theme.colors.amber};

	padding: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	height: 266px;

	p {
		font-size: ${theme.font.sizes.font24};
		font-weight: ${theme.font.weight.light};
	}
`