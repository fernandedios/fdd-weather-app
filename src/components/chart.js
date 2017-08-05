import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const Chart = (props) => {
  return (
    <div className="svg-container">
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div className="chart-name">{average(props.data)} {props.units}</div>
    </div>
  );
};

const average = (data) => {
  return _.round(_.sum(data) / data.length);
};

export default Chart;
