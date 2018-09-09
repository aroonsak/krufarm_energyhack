import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";
import { compose, withProps, withStateHandlers } from "recompose";
import { Icon } from "antd";
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
import LocationJSON from "../lib/farmer_location.json";
import ProfileJSON from "../lib/farmer_profile.json";
import * as _ from "lodash";

export const MyMapComponent = compose(
	withProps({
		googleMapURL:
			"https://maps.googleapis.com/maps/api/js?key=AIzaSyBRTJvM7A26uDXOYwNTytdxoQQRViyr5ZM&v=3.exp&libraries=geometry,drawing,places",
		loadingElement: <div style={{ minHeight: `calc(100vh - 145px)` }} />,
		containerElement: <div style={{ minHeight: `calc(100vh - 145px)` }} />,
		mapElement: <div style={{ minHeight: `calc(100vh - 145px)` }} />,
	}),
	withScriptjs,
	withGoogleMap,
	withStateHandlers(
		() => ({
			isOpen: false,
		}),
		{
			onToggleOpen: ({ isOpen }) => () => ({
				isOpen: !isOpen,
			}),
		},
	),
)((props) => (
	// 14.09749006098846 100.66088688701257
	<GoogleMap
		defaultZoom={16}
		defaultCenter={{
			lat: 14.09749006098846 + 0.021,
			lng: 100.66088688701257 + 0.008,
		}}
		options={{
			mapTypeControl: false,
			zoomControl: false,
			fullscreenControl: false,
			streetViewControl: false,
			styles: [
				{
					elementType: "geometry",
					stylers: [
						{
							color: "#f5f5f5",
						},
					],
				},
				{
					elementType: "labels.icon",
					stylers: [
						{
							visibility: "off",
						},
					],
				},
				{
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#616161",
						},
					],
				},
				{
					elementType: "labels.text.stroke",
					stylers: [
						{
							color: "#f5f5f5",
						},
					],
				},
				{
					featureType: "administrative.land_parcel",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#bdbdbd",
						},
					],
				},
				{
					featureType: "poi",
					elementType: "geometry",
					stylers: [
						{
							color: "#eeeeee",
						},
					],
				},
				{
					featureType: "poi",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#757575",
						},
					],
				},
				{
					featureType: "poi.park",
					elementType: "geometry",
					stylers: [
						{
							color: "#e5e5e5",
						},
					],
				},
				{
					featureType: "poi.park",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#9e9e9e",
						},
					],
				},
				{
					featureType: "road",
					elementType: "geometry",
					stylers: [
						{
							color: "#ffffff",
						},
					],
				},
				{
					featureType: "road.arterial",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#757575",
						},
					],
				},
				{
					featureType: "road.highway",
					elementType: "geometry",
					stylers: [
						{
							color: "#dadada",
						},
					],
				},
				{
					featureType: "road.highway",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#616161",
						},
					],
				},
				{
					featureType: "road.local",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#9e9e9e",
						},
					],
				},
				{
					featureType: "transit.line",
					elementType: "geometry",
					stylers: [
						{
							color: "#e5e5e5",
						},
					],
				},
				{
					featureType: "transit.station",
					elementType: "geometry",
					stylers: [
						{
							color: "#eeeeee",
						},
					],
				},
				{
					featureType: "water",
					elementType: "geometry",
					stylers: [
						{
							color: "#c9c9c9",
						},
					],
				},
				{
					featureType: "water",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#9e9e9e",
						},
					],
				},
			],
		}}
	>
		<Marker position={{ lat: 14.09749006098846, lng: 100.66088688701257 }} defaultVisible={false}>
			<InfoBox options={{ closeBoxURL: ``, enableEventPropagation: true }}>
				<div
					style={{
						padding: `12px`,
						display: "flex",
						alignItems: "center",
					}}
				>
					<div
						onClick={() => console.log("eeeee")}
						style={{
							backgroundColor: "grey",
							backgroundImage: `url(/static/profile_farmer_thumb.jpg)`,
							backgroundSize: "cover",
							height: 50,
							width: 50,
							borderRadius: "50%",
						}}
					/>
					<Icon
						type="windows"
						theme="filled"
						style={{ position: "absolute", color: "#0B2631", fontSize: 20, zIndex: 2800, bottom: 10 }}
					/>
				</div>
			</InfoBox>
		</Marker>
		{_.map(LocationJSON, (e, i) => {
			return (
				<FarmerMarker
					farmerId={e.farmerId}
					lat={e.latitude}
					lng={e.longitude}
					onFarmerSelected={() => props.onSelectFarmer(e.farmerId)}
				/>
			);
		})}
	</GoogleMap>
));

const FarmerMarker = (props) => {
	const userData = _.find(ProfileJSON, { farmerId: props.farmerId });
	return (
		<Marker position={{ lat: props.lat, lng: props.lng }} onClick={props.onToggleOpen} defaultVisible={false}>
			<InfoBox onCloseClick={props.onToggleOpen} options={{ closeBoxURL: ``, enableEventPropagation: true }}>
				<div
					style={{
						padding: `12px`,
						display: "flex",
						alignItems: "center",
					}}
				>
					<div
						onClick={props.onFarmerSelected}
						style={{
							backgroundImage: `url(${userData.img})`,
							backgroundSize: "cover",
							backgroundColor: "grey",
							height: 30,
							width: 30,
							borderRadius: "50%",
							filter: "grayscale(50%)",
						}}
					/>
					<Icon
						type="thunderbolt"
						theme="filled"
						style={{ position: "absolute", color: "red", fontSize: 12, zIndex: 2800, bottom: 10 }}
					/>
				</div>
			</InfoBox>
		</Marker>
	);
};
