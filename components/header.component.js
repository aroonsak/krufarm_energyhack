import styled from "styled-components";
import { Layout, Card } from "antd";
const { Header } = Layout;

export const HeaderBlock = styled(Header)`
	background: white;
	padding: 10px;
	line-height: inherit;
	height: auto;

	span {
		padding-left: 20px;
	}
`;

export const HeaderCard = styled(Card)`
	position: absolute;
	width: calc(100% - 20px);
	z-index: 1001;
	margin: 10px;
`;
