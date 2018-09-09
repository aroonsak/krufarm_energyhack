import { Icon } from "antd";
import { Row, Col, Card, Select } from "antd";
import * as _ from "lodash";

const Option = Select.Option;

import { HeaderCard } from "../components/header.component";
import { MyMapComponent } from "../components/map.component";
import { MainLayout } from "../components/mainlayout";
import { ProfileCard } from "../components/profile.component";
import { MonthlyUsageComponent } from "../components/usage.component";

import dailyUsage from "../lib/usage_daily.json";

import monthlyUsage from "../lib/farmer_consumption.json";
const oneUserUsage = _.sortBy(_.filter(monthlyUsage, { farmerId: 1 }), ["dateMonthly"]);

export default (props) => {
	return (
		<MainLayout left="/profile" right="/report" title="Consumption" description=" ">
			<Card>
				<ProfileCard />
			</Card>
			<Card>
				<Row type="flex" gutter={8}>
					<Col style={{ flex: 1 }}>
						<Select defaultValue="2018" style={{ width: "100%" }}>
							<Option value="2018">2018</Option>
						</Select>
					</Col>
				</Row>
			</Card>
			<Card style={{ margin: 4, width: "97%" }}>
				<MonthlyUsageComponent data={oneUserUsage} />
			</Card>
		</MainLayout>
	);
};
