import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";

class Dashboard extends Component {
	render() {
		return (
			<div className="">
				<h1 className="alert alert-warning">Dashboard</h1>
				<ProjectItem />
			</div>
		);
	}
}

export default Dashboard;
