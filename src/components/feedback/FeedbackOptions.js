import styles from './Feedback.module.css'
import { Component } from 'react';

export class FeedbackOptions extends Component {
 

  



  render() {
  
    return (
      <>
        <ul onClick={this.props.onLeaveFeedback} className={styles.buttonList}>
          <li>
            <button className={styles.button} name="good">Good</button>
          </li>
          <li>
            <button name="neutral">Neutral</button>
          </li>
          <li>
            <button name="bad">Bad</button>
          </li>
        </ul>
       
      </>
    );
  }
}
