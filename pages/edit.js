import { Icon } from "antd";
import { Row, Col, Card } from "antd";
import styled from "styled-components";

import { HeaderCard } from "../components/header.component";
import { MyMapComponent } from "../components/map.component";
import { MainLayout } from "../components/mainlayout";
import { ProfileCard } from "../components/profile.component";
import { MonthlyUsageComponent } from "../components/usage.component";

export default (props) => {
	return (
		<MainLayout left="/profile" right="/chart" title="Potential" description=" ">
			<MarginCard>
				<ProfileCard />
			</MarginCard>

			<MarginCard>Verified Farmer</MarginCard>
			<MarginCard>Farm & Field</MarginCard>
			<MarginCard>House</MarginCard>
			<MarginCard>Product</MarginCard>
		</MainLayout>
	);
};

const MarginCard = (props) => {
	return (
		<Card style={{ margin: 4, width: "97%" }} bodyStyle={{ ...props.bodyStyle, color: "black" }}>
			{props.children}
		</Card>
	);
};
