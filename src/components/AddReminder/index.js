import format from 'date-fns/format';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqueId from 'uniqid';
import { doAddReminder } from '../../actions/reminder';

class AddReminder extends Component {
  constructor(props) {
    super(props);
    this.state = this.DEFAULT_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.addReminder = this.addReminder.bind(this);
  };
  
  DEFAULT_STATE = {
    date: format(new Date()),
    text: ''
  }

  handleChange = prop => e => {
    this.setState({
      [prop]: e.target.value
    })
  }

  addReminder() {
    this.props.addReminder({
      ...this.state,
      id: uniqueId()
    });
    this.resetState();
  }

  resetState() {
    this.setState(this.DEFAULT_STATE);
  }
  
  render() {
    const { date, text } = this.state;
    
    return (
      <form>
        <h3>Add a Reminder</h3>
        <p>
          <label>Text:
            <input
              type="text"
              onChange={this.handleChange('text')}
              value={text}
            />
          </label>
        </p>
        
        <p>
          <label>Date:
            <input
              type="text"
              onChange={this.handleChange('date')}
              value={date}
            />
          </label>
        </p>
        
        <p>
          <button
            type="button"
            onClick={this.addReminder}
          >
            Add Reminder
          </button>
        </p>
      </form>
    );
  };
};

const mapDispatchToProps = {
  addReminder: doAddReminder
};

export default connect(null, mapDispatchToProps)(AddReminder);