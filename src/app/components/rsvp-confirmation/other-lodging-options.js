import React from 'react';

export default function OtherLodgingOptions() {
  return (
    <div className="space-top-4 space-2">
      <p className="space-1">
        Also, there are many other lodging options nearby such as:
      </p>
      <ul>
        <li className="space-1">
          <a className="styled-link" href="http://www.graeagle.com/accommodations.html">
            Graeagle accommodations
          </a>
        </li>
        <li className="space-1">
          <a className="styled-link" href="http://www.ci.portola.ca.us/portola-lodging.html">
            Portola accommodations
          </a>
        </li>
      </ul>
    </div>
  );
}
