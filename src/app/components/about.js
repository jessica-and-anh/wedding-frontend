import React, { PropTypes } from 'react';
import MediaQuery from 'react-responsive';
import cx from 'classnames';
import '../../stylesheets/components/about.css';

import ringsAndHeart from '../../images/rings-and-heart.png';

Passage.propTypes = {
  person: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  text: PropTypes.array.isRequired,
};

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

    const brideText = [
      "I met Anh on my second day at UCLA as a freshman. My high school friends, Vanessa and " +
        "Johnny, and I were touring the campus to investigate where our classes were located " +
        "when we bumped into Vanessa’s roommate and her roommate's friends. Anh was one of those " +
        "friends.",
      "When we met, Anh had his hair styled into spikes, sticking straight up like the comb " +
        "of a chicken. He asked me what my major was. (It was cognitive science at the time.) " +
        "“Cog-what? Is that a major? I’m majoring in physci. I am going to be a doctor. Doctor " +
        "Tran.” Apparently, he believed his major was so well known that it could be abbreviated.",
      "Over the next year, on his quest to become a doctor, we became close friends. Anh " +
        "convinced me to take the pre-med biology class with him leading to spending more time " +
        "together studying and making late night Bcafe runs. When we weren’t cramming or eating, " +
        "we enjoyed watching anime or playing tennis together. I was too shy to want to play in " +
        "the center court of the UCLA Tennis Center (regardless if it were the only open court), " +
        "but Anh would insist we play there in the middle of the stadium lights and have fun. ",
      "I felt so lucky to have found a new lifelong friend who could easily make me laugh and " +
        "relax and also advise me on fashion. Maybe he was worth keeping around… little did I " +
        "know :)"
      ];

    const groomText = [
      "I wouldn’t say the comb chicken hair is exactly what I was going for back then. Anyways, " +
        "while Jessica insists that we were just platonic friends, I spent many months " +
        "strategically courting her. We spent many hours watching our favorite shows together " +
        "where I would gradually scoot closer. Having convinced her to use a GE to take a " +
        "biology course with me meant many study sessions and many more opportunities to not " +
        "study at all. By the way, who takes a biology course as a GE - talk about wrong signals.",
      "During the moments I wasn’t weaving my way into her life, Jessica introduced me to many " +
      "novel experiences such as cooking, photography, and actually studying. I never could get " +
      "the last one down. From our different experiences growing up, we were able to learn from " +
      "each other, sharing stories of our childhood. Learning about her Starcraft days sealed " +
      "the deal for me.",
      "Becoming each other’s best friend led to the amazing team we’ve become today. To all you " +
      "guys out there, it is possible to graduate from the friend zone!"
    ]
export default function About() {
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
