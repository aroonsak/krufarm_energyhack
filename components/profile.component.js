import styled from "styled-components";
import { Card, Row, Col, Icon, List, Button } from "antd";
import * as _ from "lodash";
import { HeaderCard } from "./header.component";
import FarmerProfile from "../lib/farmer_profile.json";
import Usage from "../lib/farmer_consumption.json";

const remapFarmerProfile = _.map(FarmerProfile, (e) => {
	return { ...e, name: `${e.firstName} ${e.middleName} ${e.lastName}` };
});

export class ProfileCard extends React.Component {
	state = {
		trigger: false,
	};
	render() {
		const props = this.props;
		const userData = props.userId
			? _.find(remapFarmerProfile, { farmerId: props.userId })
			: { name: "Aroonsak Bootchai", des: "Energy Score : 1,450", img: "/static/profile_farmer_thumb.jpg" };
		const userUsage1 = _.filter(Usage, { farmerId: userData.farmerId });
		const userUsage2 = _.map(userUsage1, (e) => {
			return { title: `date:${e.dateMonthly} energy:${e.energyConsumption}` };
		});
		console.log(userUsage1);
		return (
			<div style={{ maxHeight: "50vh", overflow: "scroll" }}>
				<Row type="flex" gutter={8} style={{ transition: "200ms all", transitionDelay: 200 }}>
					<Col>
						<div style={{ padding: 2, border: "3px solid #98C379", borderRadius: "50%" }}>
							<div
								style={{
									width: 50,
									height: 50,
									borderRadius: "50%",
									background: `url(${userData.img})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
									margin: 2,
								}}
							/>
						</div>
					</Col>
					<Col style={{ flex: 1, paddingLeft: 10 }}>
						<h4>{userData.name}</h4>
						<span>{userData.des}</span>
					</Col>
					<Col>
						<Row style={{ display: "flex", flexDirection: "column" }}>
							<Icon type="qrcode" theme="outlined" style={{ fontSize: 24 }} />
							<div style={{ marginTop: 20 }}>
								<Icon type="ellipsis" theme="outlined" style={{ fontSize: 24 }} />
							</div>
						</Row>
					</Col>
				</Row>
				<div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
					<div
						style={{ width: "100px", height: "5px", borderRadius: "4", background: "#D3D3D3" }}
						onClick={() => this.setState({ trigger: !this.state.trigger })}
					/>
				</div>

				{this.state.trigger && (
					<div>
						<Button>Invest</Button>
						<List
							itemLayout="horizontal"
							dataSource={userUsage2}
							renderItem={(item) => <List.Item>{item.title}</List.Item>}
						/>
					</div>
				)}
			</div>
		);
	}
}

export const ContentCardList = (props) => {
	return (
		<Card style={{ marginBottom: 4 }}>
			<Row style={{ display: "flex" }}>
				<Col style={{ flex: 1 }}>{props.children}</Col>
				<Col style={{ display: "flex" }}>
					{props.notification ? (
						<div
							style={{
								background: "#E06C75",
								color: "white",
								borderRadius: "4px",
								fontSize: 10,
								padding: "2px 10px",
								height: 20,
							}}
						>
							{props.notification}
						</div>
					) : null}
					{props.condition ? (
						<>
							{props.condition == "good" && (
								<Icon type="smile" theme="filled" style={{ color: "#F2AD3D", fontSize: 20 }} />
							)}
							{props.condition == "bad" && (
								<Icon type="frown" theme="filled" style={{ color: "#E35059", fontSize: 20 }} />
							)}
							{props.condition == "soso" && (
								<Icon type="meh" theme="filled" style={{ color: "#F2F2F2", fontSize: 20 }} />
							)}
						</>
					) : null}
				</Col>
			</Row>
		</Card>
	);
};

export const DigitizeComponent = (props) => {
	return (
		<div style={{ paddingBottom: 10 }}>
			<h4>{props.label}</h4>
			<div
				style={{
					background: "#282C34",
					color: "#E5C07B",
					height: 100,
					display: "flex",
					justifyContent: "flex-end",
					alignItems: "center",
					borderRadius: 8,
				}}
			>
				<div style={{ color: "white", position: "relative", zIndex: 3000 }}>
					<img src="" alt="" />
				</div>
				<div style={{ flex: 1 }}>
					<span
						style={{
							fontSize: 60,
							fontFamily: "digital-7regular",
							justifyContent: "flex-end",
							display: "flex",
						}}
					>
						{_.replace(props.value, /\B(?=(\d{3})+(?!\d))/g, ",")}
					</span>
				</div>
				<div
					style={{
						width: 10,
						height: 10,
						background: "#D19A66",
						position: "relative",
						left: 20,
						top: 20,
						zIndex: 2500,
					}}
				/>
				<span style={{ marginLeft: "auto", marginTop: "auto", paddingRight: 20 }}>{props.unit}</span>
			</div>
		</div>
	);
};
