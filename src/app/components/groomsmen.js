import React, { Component } from 'react';
import '../../stylesheets/components/groomsmen.css';

import Showcase from './showcase';

import groomsmen from '../../images/groomsmen.jpg';
import stephan from '../../images/groomsmen/stephan.png';
import allen from '../../images/groomsmen/allen.png';
import anhang from '../../images/groomsmen/anhang.png';
import carson from '../../images/groomsmen/carson.png';
import nima from '../../images/groomsmen/nima.png';
import owen from '../../images/groomsmen/owen.png';
import steven from '../../images/groomsmen/steven.png';

const GROOMSMEN = [
  {
    fullName: 'Stephan Chiu',
    image: stephan,
    isSpecial: true,
    specialTitle: 'Best Man',
  },
  {
    fullName: 'Allen Wu',
    image: allen,
  },
  {
    fullName: 'Anhang Zhu',
    image: anhang,
  },
  {
    fullName: 'Carson Tang',
    image: carson,
  },
  {
    fullName: 'Nima Rahnemoon',
    image: nima,
  },
  {
    fullName: 'Owen Lin',
    image: owen,
  },
  {
    fullName: 'Steven Nguyen',
    image: steven,
  }
];

class Groomsmen extends Component {
  render() {
    return (
      <Showcase
        welcomeMessage='The Groomsmen too'
        welcomeImage={groomsmen}
        welcomeColor='blue'
        membersList={GROOMSMEN}
        welcomeImageLeft
      />
    );
  }
}

export default Groomsmen;
