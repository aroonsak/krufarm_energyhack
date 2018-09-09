import { withRouter } from "next/router";
import { Layout, Row, Col, Icon } from "antd";
const { Header, Footer, Content } = Layout;
import { HeaderBlock } from "./header.component";
import MenuComponent from "./menu.component";
import Link from "next/link";

// MainLayout
// props:{
// 	left,
// 	right,
// 	logo,
// 	children
// }

export const MainLayout = withRouter((props) => {
	return (
		<main>
			<>
				<Layout style={{ minHeight: "100vh" }}>
					<Content>
						<HeaderBlock>
							<Row type="flex">
								{props.left ? (
									<Link href={props.left} passHref>
										<Col
											style={{
												width: "50px",
												display: "flex",
												alignItems: "center",
											}}
										>
											<div>
												<Icon type="arrow-left" theme="outlined" style={{ fontSize: 20 }} />
											</div>
										</Col>
									</Link>
								) : (
									<Col style={{ width: "50px" }} />
								)}
								{props.showLogo ? (
									<Col
										style={{
											fontSize: 20,
											flex: 1,
											minHeight: 60,
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<Icon
											type="left"
											theme="outlined"
											style={{ color: "black", fontWeight: "bolder" }}
										/>
										<Icon
											type="thunderbolt"
											theme="filled"
											style={{ fontSize: 26, color: "#D03E47" }}
										/>
										Energy.Krufarm
										<Icon
											type="right"
											theme="outlined"
											style={{ color: "black", fontWeight: "bolder" }}
										/>
									</Col>
								) : (
									<Col style={{ flex: 1 }}>
										<h2>{props.title || "Title"}</h2>
										<span>{props.description || "description"}</span>
									</Col>
								)}

								{props.right ? (
									<Link href={props.right} passHref>
										<Col
											style={{
												width: "50px",
												display: "flex",
												alignItems: "center",
												justifyContent: "flex-end",
											}}
										>
											<div>
												<Icon type="arrow-right" theme="outlined" style={{ fontSize: 20 }} />
											</div>
										</Col>
									</Link>
								) : null}
							</Row>
						</HeaderBlock>
						<div style={{ overflow: "scroll", height: "calc(100vh - 145px)" }}>{props.children}</div>
					</Content>
					<Footer style={{ background: "white", padding: 0, height: "10vh", maxHeight: "60px" }}>
						<MenuComponent />
					</Footer>
				</Layout>
			</>
		</main>
	);
});
