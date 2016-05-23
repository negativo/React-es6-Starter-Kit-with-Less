import React, { Component } from 'react';
import {RouteHandler, render} from 'react-router';
import MainStore from './../stores/MainStore';
import MainActions from './../actions/MainActions';
import connectToStores from 'alt/utils/connectToStores';

class Main extends Component {

	static getStores(){
		return [MainStore];
	}

	static getPropsFromStores(){
		return MainStore.getState();
	}

	constructor(props){
		super(props);
	}

    componentWillMount(){
    }

	render() {
		return (
			<div className="Starter">
				Hello, World!
			</div>
		);
	}
}
export default connectToStores(Main);
