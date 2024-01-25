import React, { Component } from 'react';

class DaysSinceQuit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daysSinceQuit: this.calculateDaysSinceQuit(),
    };
  }

  calculateDaysSinceQuit() {
    const quitDate = new Date('2023-10-26T00:00:00');
    const currentDate = new Date();
    const timeDiff = currentDate - quitDate;
    const daysSinceQuit = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return daysSinceQuit;
  }

  render() {
    const { daysSinceQuit } = this.state;

    const milestones = [30, 60, 90, 365];
    const milestoneText = {
      30: 'Congratulations on reaching 30 days smoke-free!',
      60: 'You\'ve made it to 60 days without smoking - keep it up!',
      90: '90 days without smoking is a significant achievement. Stay strong!',
      365: 'A whole year smoke-free! You\'re on the path to better health.',
    };

    const benefitsOfQuitting = [
      'Improved lung function',
      'Reduced risk of heart disease',
      'Increased energy levels',
      'Better sense of taste and smell',
      'Improved overall health',
    ];

    return (
      <div className="days-since-quit container" style={{marginTop: '50px'}}>
        <h1 className="title">Days Since You Quit Smoking:</h1>
        <div className="countdown">
          <p className="count">{daysSinceQuit} days</p>
          {milestones.map((milestone) => (
            <p key={milestone} className="milestone">
              {daysSinceQuit >= milestone ? milestoneText[milestone] : null}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default DaysSinceQuit;
