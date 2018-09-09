import { Row, Col, Button, Icon, Card, Tag, Drawer } from "antd";
import styled from "styled-components";
import * as _ from "lodash";
import homeApplianceData from "../lib/home_appliances.json";
import Link from "next/link";

export class DevicesComponent extends React.Component {
	state = {
		drawer: false,
	};
	render() {
		return (
			<div style={{ padding: "20px 10px" }}>
				<div style={{ display: "flex", alignItems: "center", padding: "10px 0" }}>
					<Row style={{ display: "flex", width: "100%" }}>
						<Col style={{ flex: 1 }}>
							<h4>Appliance list</h4>
						</Col>
						<Col>
							<Button onClick={() => this.setState({ drawer: true })}>
								<Icon type="plus-circle" theme="filled" style={{ fontSize: 16 }} />
								Add Device
							</Button>
						</Col>
					</Row>
				</div>
				<Card bodyStyle={{ padding: 10, minHeight: 150 }} style={{ borderRadius: 8 }}>
					<BubbleTag>
						<Tag>Television</Tag>
						<Tag>Refridgerator</Tag>
						<Tag>Fan X 2</Tag>
						<Tag>Pump</Tag>
						<Tag>Submerged Pump</Tag>
					</BubbleTag>
				</Card>
				<Drawer
					title="Devices List"
					placement="right"
					closable={true}
					visible={this.state.drawer}
					onClose={() => this.setState({ drawer: false })}
					width="100vw"
					push
				>
					<Row style={{ width: "100%", display: "flex", flexWrap: "wrap" }} gutter={10}>
						<SelectorTag>
							{_.map(homeApplianceData, (e, i) => {
								return <Tag key={i}>{e.device}</Tag>;
							})}
						</SelectorTag>
					</Row>
				</Drawer>
			</div>
		);
	}
}

export const DeviceButton = styled(Button)`
	font-size: 12px;
	width: 100%;
	border-radius: 20px;
	border: 2px solid rgba(0, 0, 0, 0.15);
	&:hover {
		border: 2px solid #5ba8f8;
	}
`;

export const BubbleTag = styled.div`
	.ant-tag {
		border-radius: 30px;
		height: auto;
		padding: 4px 20px;
		background: white;
		margin-bottom: 4px;
		overflow: hidden;
		word-break: break-all;
		text-overflow: ellipsis;
	}
`;

export const SelectorTag = styled.div`
	.ant-tag {
		border-radius: 30px;
		height: auto;
		width: 30%;
		padding: 10px 20px;
		background: white;
		margin-bottom: 4px;
		margin-right: 3%;
		overflow: hidden;
		word-break: break-all;
		text-overflow: ellipsis;
	}

	.ant-tag :hover {
		background: #e06c75;
	}
`;
