import React from 'react';

const SocialLinks = props => {
  return (
    <div className="social">      
      <a
        id="profile-link"
        href="https://github.com/kunal-nathani"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's GitHub Profile"
      >
        {' '}
        <i className="fab fa-github" />
      </a>
      <a
        href="https://codepen.io/Krunal-Nathani/"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Codepen Profile"
      >
        {' '}
        <i className="fab fa-codepen" />
      </a>
    </div>
  );
};


export default SocialLinks;
