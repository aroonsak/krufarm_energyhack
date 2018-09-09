import { Icon } from "antd";
import { Row, Col } from "antd";

import { HeaderCard } from "../components/header.component";
import { MyMapComponent } from "../components/map.component";
import { MainLayout } from "../components/mainlayout";
import { ProfileCard } from "../components/profile.component";

export default class Page extends React.Component {
	state = {
		selectFarmer: "",
	};
	render() {
		return (
			<>
				<MainLayout showLogo right="/profile">
					<HeaderCard bodyStyle={{ paddingBottom: 4 }}>
						<ProfileCard userId={this.state.selectFarmer} />
					</HeaderCard>
					<MyMapComponent
						onSelectFarmer={(e) => {
							this.setState({ selectFarmer: e });
						}}
					/>
				</MainLayout>
			</>
		);
	}
}
