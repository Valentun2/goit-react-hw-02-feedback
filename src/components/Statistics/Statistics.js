import { Notification } from 'components/notification/Notification';
import { Component } from 'react';
import styles from './Statistics.module.css'
export class Statistics extends Component {


  render() {
 
    return (
        <>
        <h3 className="text-3xl font-bold underline">{this.props.title}</h3>{ !this.props.total?<Notification message="There is no feedback"/>:
      <ul>
        <li>
          <p>Good:{this.props.good}</p>
        </li>
        <li>
          <p>Neutral:{this.props.neutral}</p>
        </li>
        <li>
          <p>Bad:{this.props.bad}</p>
        </li>
        <li>
          <p>Total:{this.props.total}</p>
        </li>
        <li>
          <p>Positive feedback:{Math.round(this.props.positivePercentage)}%</p>
        </li>
      </ul>}</>
    );
  }
}
