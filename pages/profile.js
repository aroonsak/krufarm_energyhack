import { Icon } from "antd";
import { Row, Col, Card, Button, Avatar } from "antd";

import { HeaderCard } from "../components/header.component";
import { MyMapComponent } from "../components/map.component";
import { MainLayout } from "../components/mainlayout";
import styled from "styled-components";
import { Tag } from "antd";
import * as _ from "lodash";
import { Drawer, List } from "antd";
import homeApplianceData from "../lib/home_appliances.json";
import { Line } from "react-chartjs-2";
import { ContentCardList, DigitizeComponent, MonthlyUsageComponent } from "../components/profile.component";
import DailyJson from "../lib/30-day_energy.json";
import { DevicesComponent } from "../components/device.component";

export default (props) => {
	return (
		<MainLayout left="/" right="/device" title="Profile" description=" ">
			<div id="profile" style={{ background: "white", padding: 10 }}>
				<div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
					<div>
						<div
							style={{
								background: "white",
								height: 150,
								width: 150,
								borderRadius: "50%",
								border: "5px solid #98C379",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<div
								style={{
									background: "url(/static/profile_farmer_thumb.jpg)",
									backgroundSize: "cover",
									backgroundPosition: "center",
									borderRadius: "50%",
									width: "135px",
									height: "135px",
									marginTop: 0.5,
								}}
							/>
						</div>
					</div>
					<div style={{ width: "100%" }} />
					<Row style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
						<strong>Aroonsak Bootchai</strong>
						<span>
							<Tag>Verified</Tag>
							Smart Farmer / <a>Organic Farmer</a>
						</span>
						<span>Prathumthani, Thailand</span>
					</Row>
					<Row
						style={{ width: "100%", display: "flex", justifyContent: "center", paddingTop: 10 }}
						gutter={8}
					>
						<Col>
							<div style={{ height: 30, width: 30, background: "grey" }} />
						</Col>
						<Col>
							<div style={{ height: 30, width: 30, background: "grey" }} />
						</Col>
						<Col>
							<div style={{ height: 30, width: 30, background: "grey" }} />
						</Col>
					</Row>
				</div>
				<div style={{ paddingTop: 10 }}>
					<ContentCardList condition="good">
						<ContentButton type="primary" style={{ background: "#87C540", border: 0 }}>
							Information
						</ContentButton>
					</ContentCardList>
					<ContentCardList condition="good">
						<ContentButton type="primary" style={{ background: "#87C540", border: 0 }}>
							Verification
						</ContentButton>
					</ContentCardList>
					<ContentCardList condition="soso">
						<ContentButton>Document Submit Form</ContentButton>
					</ContentCardList>
				</div>
				<DevicesComponent />
				<DigitizeComponent label="Energy Consumption" value="400" unit="km/hr" />
				<DigitizeComponent label="Saving Cost" value="5000" unit="THB" />
				<DigitizeComponent label="Carbon Save" value="5000" unit="ton" />
			</div>
		</MainLayout>
	);
};

const ContentButton = styled(Button)`
	width: 98%;
`;
