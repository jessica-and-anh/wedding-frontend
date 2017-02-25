import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import cx from 'classnames';
import '../../stylesheets/components/about.css';

import ringsAndHeart from '../../images/rings-and-heart.png';

export function Passage({ person, firstName, lastName, text }) {
  const isGroom = person === 'groom';
  const roleText = isGroom ? 'THE GROOM' : 'THE BRIDE';

  return (
    <div className={cx('passage', {'groom': isGroom, 'bride': !isGroom})}>
      <h2 className="person">
        {roleText}
      </h2>

      <h1 className="name">
        {firstName} <span className="last-name">{lastName}</span>
      </h1>

      <p className="passage-text">
        {
          text.map((paragraph, index) => {
            return (<span key={index} className="passage-paragraph">{paragraph}</span>);
          })
        }
      </p>
    </div>
  );
}

class About extends Component {

  render() {
    const brideText = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus euismod finibus. Fusce et velit nunc. Sed vestibulum lectus tempus enim tempor, eget aliquet ipsum fringilla. Maecenas sed dictum nisl. Pellentesque dictum bibendum sapien, nec consequat metus dapibus nec. Pellentesque tortor turpis, dapibus et pretium sed, fringilla in mauris. Morbi justo mi, tincidunt quis porta id, varius vel est. Phasellus quis feugiat nisi. Duis vitae ullamcorper nunc. Suspendisse cursus sapien id dolor consequat, sed varius ligula malesuada. Aliquam erat volutpat. Nunc nec eleifend lectus. Vestibulum mattis nunc mi, sit amet porta enim malesuada ac. Aliquam erat volutpat. Vestibulum facilisis consectetur dapibus.",
      "Vestibulum non dictum arcu. Nunc molestie, ligula at eleifend aliquet, est massa mollis libero, id eleifend arcu erat lacinia purus. Nunc in lacus id justo pharetra feugiat sit amet non dui. Aliquam erat volutpat. Nam accumsan venenatis est vel vehicula. Nunc accumsan, metus sed consectetur gravida, nulla felis maximus mi, in commodo est orci vel dui. Proin eleifend convallis lacus mattis aliquam. Praesent lobortis nisl ac leo mollis, ac finibus nulla elementum. Duis sit amet tortor turpis. Donec imperdiet nulla et tempus sagittis. In bibendum nibh non tortor lobortis congue. Vivamus tincidunt vitae sapien vel molestie. Quisque euismod fermentum velit et ultrices. Etiam mattis a sem dictum lacinia. Donec in ullamcorper tellus. Suspendisse potenti."
    ];

    const groomText = [
      "I wouldn’t say the comb chicken hair is exactly what I was going for back then. Anyways, while Jessica insists that we were just platonic friends, I spent many months strategically courting her. We spent many hours watching our favorite shows together where I would gradually scoot closer. Having convinced her to use a GE to take a biology course with me meant many study sessions and many more opportunities to not study at all. By the way, who takes a biology course as a GE - talk about wrong signals.",
      "During the moments I wasn’t weaving my way into her life, Jessica introduced me to many novel experiences such as cooking, photography, and actually studying. I never could get the last one down. From our different experiences growing up, we were able to learn from each other, sharing stories of our childhood. Learning about her Starcraft days sealed the deal for me.",
      "Becoming each other’s best friend led to the amazing team we’ve become today. To all you guys out there, it is possible to graduate from the friend zone!"
    ]

    return (
      <section className="about">
        <MediaQuery minDeviceWidth={1224}>
          <img src={ringsAndHeart} className="rings-and-heart" alt="Rings and heart" />
        </MediaQuery>
        <div className="about-container max-width">
          <Passage
            person="bride"
            firstName="jessica"
            lastName="tai"
            text={brideText}
          />
          <Passage
            person="groom"
            firstName="anh"
            lastName="tran"
            text={groomText}
          />
        </div>
      </section>
    );
  }
}

export default About;
