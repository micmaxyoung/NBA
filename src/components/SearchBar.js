import React from 'react';
import { AutoComplete, Icon, Input } from "antd";
import nba from 'nba';
import {PROFILE_PIC_URL_PREFIX} from "../constants"

const Option = AutoComplete.Option;

export default class SearchBar extends React.Component {
	state = {
		dataSource: [],
	}

	onSelect = (value) => {
		console.log(value);
		this.props.onSelect(value);
	}

	handleSearch = (value) => {
		console.log(value);

		const dataSource = nba.searchPlayers(value).map(({playerId, fullName}) =>
			<Option key={playerId} value={fullName}>
				<img
					className='player-option-image'
					alt={`${fullName}`}
					src={`${PROFILE_PIC_URL_PREFIX}${playerId}.png`}
				/>
				<span className="player-option-label">{`${fullName}`}</span>
			</Option>
		);
		this.setState({dataSource});
	}

	render() {
		return (
			<AutoComplete
				className='search-bar'
				size='large'
				dataSource={ this.state.dataSource }
				onSelect={ this.onSelect }
				onSearch={ this.handleSearch }
				placeholder="Search NBA Player"
				optionLabelProp='value'
			>
				<Input suffix={<Icon type="search" className="certain-category-icon" />} />
			</AutoComplete>
		);
	}
}