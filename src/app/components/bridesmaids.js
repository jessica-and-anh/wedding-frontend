import React, { Component } from 'react';
import '../../stylesheets/components/bridesmaids.css';

import Showcase from './showcase';

import bridesmaids from '../../images/bridesmaids.jpg';
import vanessa from '../../images/bridesmaids/vanessa.png';
import angie from '../../images/bridesmaids/angie.png';
import hanna from '../../images/bridesmaids/hanna.png';
import meeka from '../../images/bridesmaids/meeka.png';
import shwetha from '../../images/bridesmaids/shwetha.png';
import sophia from '../../images/bridesmaids/sophia.png';
import stephanie from '../../images/bridesmaids/stephanie.png';

const BRIDESMAIDS = [
  {
    fullName: 'Vanessa Wong',
    image: vanessa,
    isSpecial: true,
    specialTitle: 'Maid of Honor',
  },
  {
    fullName: 'Angie Huang',
    image: angie,
  },
  {
    fullName: 'Hanna Hoang',
    image: hanna,
  },
  {
    fullName: 'Meeka Gandhi',
    image: meeka,
  },
  {
    fullName: 'Shwetha Kotekar',
    image: shwetha,
  },
  {
    fullName: 'Sophia Han',
    image: sophia,
  },
  {
    fullName: 'Stephanie Chou',
    image: stephanie,
  }
];

class Bridesmaids extends Component {
  render() {
    return (
      <Showcase
        welcomeMessage='Meet the bridesmaids'
        welcomeImage={bridesmaids}
        welcomeColor='red'
        membersList={BRIDESMAIDS}
        welcomeImageLeft={false}
      />
    );
  }
}

export default Bridesmaids;
