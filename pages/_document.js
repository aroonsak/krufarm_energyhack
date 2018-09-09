import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import flush from "styled-jsx/server";

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();
		const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
		const styleTags = sheet.getStyleElement();
		const styles = flush();

		return { ...page, styleTags, styles };
	}
	render() {
		return (
			<html lang="en">
				<Head>
					<title>My page</title>
					{this.props.styleTags}
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
					<link rel="stylesheet" href="/static/antd.css" />
					<link rel="stylesheet" href="/static/fonts.css" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
