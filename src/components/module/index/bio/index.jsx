
import React, { Component } from 'react'
import './styles.scss';

export default class index extends Component {

  state = {
    part: ''
  }

  namepart = ['Prabhu', 'Droid']
  currentname = 0;

  componentDidMount() {
    this.typeWrite();
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  typeWrite = () => {
    this.currentname = this.currentname + 1;
    var text = this.namepart[this.currentname % 2];
    var randInt = 0
    for (var i = 0; i < text.length; i++) {
      randInt += parseInt(this.randomIntFromInterval(80, 500));
      this.timer = setTimeout((y) => {
        this.setText(this.state.part + text.charAt(y));
      }, randInt, i);
    };
    this.timer = setTimeout(() => {
      this.typeWrite();
      this.setText('');
    }, randInt + 3500);
  }
  setText = (text) => {
    this.setState(() => ({
      part: text
    }));
  }

  render() {
    return (
      <div className="bio">
        <p id="name">Gokul<span>{this.state.part}</span><span className="cursor">_</span></p>
        <p className="line"></p>
        <p className="interests">Fullstack developer <span>|</span> android enthusiast <span>|</span> designer</p>
      </div>
    )
  }
}
