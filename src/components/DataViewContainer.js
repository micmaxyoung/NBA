import React from 'react';
import { Radio, Switch } from 'antd';
import { ShotChart } from "./ShotChart"
import _ from 'lodash';
import CountSlider from "./CountSlider"

const RadioGroup = Radio.Group;

export default class DataViewContainer extends React.Component {
	state = {
		minCount: 2,
		chartType: 'hexbin',
		displayTooltip: true,
	}

	onCountSliderChange = (minCount) => {
		this.setState({minCount});
	}

	onChartTypeChange = (e) => {
		const chartType = e.target.value;
		this.setState({chartType});
	}

	onToolTipChange = (displayTooltip) => {
		this.setState({displayTooltip});
	}

	render() {
		return (
			<div className='data-view'>
				<ShotChart
					playerId= {this.props.playerId}
					minCount={this.state.minCount}
					chartType={this.state.chartType}
					displayTooltip={this.state.displayTooltip}
				/>
				{
					this.state.chartType === 'hexbin' ?
						<CountSlider value={this.state.minCount} onChange={_.debounce(this.onCountSliderChange, 500)}/> : null
				}
				<RadioGroup onChange={this.onChartTypeChange} value={this.state.chartType}>
					<Radio value={'hexbin'}>Hexbin</Radio>
					<Radio value={'scatter'}>Scatter</Radio>
				</RadioGroup>
				<Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked onChange={this.onToolTipChange}/>
			</div>
		);
	}
}