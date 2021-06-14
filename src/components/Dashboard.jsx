import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";
import Header from "./Leiaute/Header";

class Dashboard extends Component {
	render() {
		return (
			<div className="">
				<h1 className="mr-1">Dashboard</h1>
				<Header />
				<ProjectItem />
			</div>
		);
	}
}

export default Dashboard;
