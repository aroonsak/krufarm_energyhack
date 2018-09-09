import { List, Row, Col, Progress, Tag, Button } from "antd";
import { Line, Bar } from "react-chartjs-2";
import * as _ from "lodash";
import styled from "styled-components";

import Daily from "../lib/usage_daily.json";

const MonthlyWrapper = styled.div`
	overflow: scroll;
	height: 60vh;

	.ant-progress-status-success .ant-progress-bg {
		background-color: #3e90f7;
	}
`;

export const MonthlyUsageComponent_1 = (props) => {
	const energyConsumption = _.map(props.data, (e) => {
		return e.energyConsumption;
	});
	const maxEnergy = _.max(energyConsumption);
	const minEnergy = _.min(energyConsumption);

	return (
		<>
			<MonthlyWrapper>
				<List
					itemLayout="horizontal"
					dataSource={props.data}
					renderItem={(item) => (
						<List.Item style={{ padding: 0, marginBottom: 5 }}>
							<Row type="flex" style={{ width: "100%" }}>
								<Col
									style={{
										width: 100,
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										background: "rgba(0,0,0,0.1)",
									}}
								>
									<h3>{_.split(item.dateMonthly, "-")[1]}</h3>
								</Col>
								<Col>
									<span style={{ fontSize: 11 }}>
										{`${_.split(item.dateMonthly, "-")[0]}-${
											_.split(item.dateMonthly, "-")[1]
										}-01  -  ${item.dateMonthly}`}
									</span>
									<Tag
										style={{
											padding: 6,
											borderRadius: "8px",
											margin: 4,
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}
										color="#98CD74"
									>
										{item.energyConsumption} <small>kw/hr</small>
									</Tag>
								</Col>
								<Col style={{ flex: 1, alignSelf: "flex-end" }}>
									<Progress
										percent={_.round((item.energyConsumption / maxEnergy) * 100, 2)}
										showInfo={false}
									/>
								</Col>
								<Col>
									<Button>Detail</Button>
								</Col>
								{/* <Col style={{ flex: 1, padding: 10 }}>
							
							</Col> */}
							</Row>
						</List.Item>
					)}
				/>
			</MonthlyWrapper>
		</>
	);
};
export class MonthlyUsageComponent extends React.Component {
	state = {
		select: "",
	};
	render() {
		const props = this.props;
		const data = props.data;
		const yearly_date = _.map(data, (e) => {
			return e.dateMonthly;
		});
		const yearly_energy = _.map(data, (e) => {
			return e.energyConsumption;
		});

		const daily_date = _.map(Daily, (e) => {
			return e.Time;
		});

		const daily_energy = _.map(Daily, (e) => {
			return e.kw;
		});
		return (
			<>
				<MonthlyWrapper>
					<h4>Electricity Consumption in 2018</h4>

					<Bar
						onElementsClick={(e) => {
							const dataChart = e[0];
							this.setState({ select: "2017-02-28" });
						}}
						width={500}
						height={300}
						data={{
							labels: yearly_date,
							datasets: [
								{
									data: yearly_energy,
									label: "energy consumption",
									borderColor: "#3e95cd",
									fill: false,
								},
							],
						}}
						options={{
							elements: {
								line: {
									tension: 0, // disables bezier curves
								},
								label: false,
							},
							legend: {
								display: false,
							},
						}}
					/>
					{this.state.select == "2017-02-28" && (
						<Row style={{ paddingBottom: 100 }}>
							<h4>Febuary 2018</h4>
							<Line
								onElementsClick={(e) => {
									console.log(e);
								}}
								width={500}
								height={400}
								data={{
									labels: daily_date,
									datasets: [
										{
											data: daily_energy,
											label: "energy consumption",
											borderColor: "#3e95cd",
											fill: false,
										},
									],
								}}
								options={{
									elements: {
										line: {
											tension: 0, // disables bezier curves
										},
										label: false,
									},
									legend: {
										display: false,
									},
								}}
							/>
						</Row>
					)}
				</MonthlyWrapper>
			</>
		);
	}
}
