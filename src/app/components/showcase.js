import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import cx from 'classnames';
import '../../stylesheets/components/showcase.css';

export function Headshot({ fullName, image, isSpecial, specialTitle }) {
  return (
    <li className={cx('member', {'special': isSpecial})}>
      <img src={image} className="member-headshot" alt={fullName} />
      <p className="member-name">{fullName}</p>
      {isSpecial && <p className="special">{specialTitle}</p>}
    </li>
  );
};

class Showcase extends Component {
  render() {
    const welcomeImage = (
      <img src={this.props.welcomeImage}
        className="welcome-image"
        role="presentation" />
    );

    return (
      <section className="members">
        <header className={this.props.welcomeColor}>
          <MediaQuery minDeviceWidth={1224}>{ this.props.welcomeImageLeft && welcomeImage }</MediaQuery>
          <h1 className="members-welcome">{this.props.welcomeMessage}</h1>
          <MediaQuery minDeviceWidth={1224}>{ !this.props.welcomeImageLeft && welcomeImage }</MediaQuery>
        </header>
        <ul className="members-headshots">
          {
            this.props.membersList.map((member, index) => {
              return (
                <Headshot
                  fullName={member.fullName}
                  image={member.image}
                  isSpecial={member.isSpecial}
                  specialTitle={member.specialTitle}
                  key={index}
                />
              );
            })
          }
        </ul>
      </section>
    );
  }
}

export default Showcase;
