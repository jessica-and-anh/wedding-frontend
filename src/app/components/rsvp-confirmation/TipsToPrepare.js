import React, { PropTypes } from 'react';
import cx from 'classnames';
import AddToCalendar from '../add-to-calendar';
import '../../../stylesheets/components/rsvp-confirmation.css';
import Event from 'material-ui/svg-icons/action/event';
import GolfCourse from 'material-ui/svg-icons/places/golf-course';

const iconStyle = {
  width: 60,
  height: 60,
};

const TIP_SQUARES = [
  [
    {
      header: 'Here are some tips to prepare in the meantime',
      isRausch: true,
      headerOnly: true,
    },
    {
      header: 'Add our wedding to your calendar',
      addToCalendar: (
        <AddToCalendar />
      ),
      icon: <Event color="#666" style={iconStyle} />
    },
    {
      header: 'Read about our venue and lodging',
      linkText: 'Learn more',
      url: 'http://chaletviewlodge.com/',
      icon: <GolfCourse color="#666" style={iconStyle} />
    },
  ]
];


function TipToPrepareSquare({ icon, headerOnly, header, linkText, url, isRausch, addToCalendar }) {
  if (headerOnly) {
    return (
      <div className={cx('tips-to-prepare-square', { 'rausch-background': isRausch })}>
        <h1 className="space-top-2 space-2">{header}</h1>
      </div>
    );
  }
  return (
    <div className="tips-to-prepare-square">
      {icon}
      <h2 className="space-top-3 space-5">{header}</h2>
      {url && <a className="styled-link" href={url} target="_blank">{linkText}</a>}
      {addToCalendar}
    </div>
  );
}

TipToPrepareSquare.propTypes = {
  icon: PropTypes.object,
  headerOnly: PropTypes.bool,
  header: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  url: PropTypes.string,
  isRausch: PropTypes.bool,
};

TipToPrepareSquare.defaultProps = {
  headerOnly: false,
  linkText: null,
  url: null,
  isRausch: false,
};

export default function TipsToPrepare() {
  return (
    <div className="max-width">
      {TIP_SQUARES.map((row, rowIndex) => {
        return (
          <div className="flex flex-space-around space-3" key={rowIndex}>
            {row.map((squareProps) => {
              return <TipToPrepareSquare key={squareProps.header} {...squareProps} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
