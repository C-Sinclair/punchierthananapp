import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View, Text } from "react-native";

const style = {
	flex: 1,
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "#F5FCFF"
};

const CentredView = ({ children }) => <View style={style}>{children}</View>;

storiesOf("CentredView", module).add("default view", () => {
	<CentredView>
		<Text>Hello World, and such.</Text>
	</CentredView>;
});
