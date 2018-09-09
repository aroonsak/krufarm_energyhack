import { Col, Row, Icon, Menu } from "antd";
import styled from "styled-components";
import { withRouter } from "next/router";
import Link from "next/link";

const MenuCol = styled(Col)`
	min-width: 60px;
	transition: 200ms all;
	width: 100%;
	height: 100%;
	background: ${(props) => (props.active ? "#F4DEAB" : "white")};
	&:hover {
		background: #f5f5f5;
	}

	&:active {
		background: #fcc659;
	}
`;

const MenuIcon = styled(Icon)`
	font-size: 25px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const MenuButton = withRouter((props) => {
	return (
		<Link href={props.url} passHref>
			{props.router && (
				<MenuCol active={props.router.pathname == props.url ? true : false}>
					<MenuIcon type={props.children} />
				</MenuCol>
			)}
		</Link>
	);
});

class MenuComponent extends React.Component {
	state = {
		current: "mail",
	};

	handleClick = (e) => {
		console.log("click ", e);
		this.setState({
			current: e.key,
		});
	};

	render() {
		return (
			<Row
				onClick={this.handleClick}
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
					zIndex: 1200,
				}}
				gutter={8}
			>
				<MenuButton url="/">home</MenuButton>
				<MenuButton url="/profile">user</MenuButton>
				<MenuButton url="/edit">form</MenuButton>
				<MenuButton url="/summary">stock</MenuButton>
				<MenuButton url="/report">solution</MenuButton>
			</Row>
		);
	}
}

export default withRouter(MenuComponent);
