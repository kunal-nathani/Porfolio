import React from 'react';
import './About.css';


const About = props => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who's this guy?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Kunal.</h4>
            <p>
              I am a web developer and UX designer based in the beautiful west coast of INDIA.
            </p>
            <p>
              I really enjoy solving problems as well as making things pretty and easy to use. I
              can't stop learning new things; the more, the better. I also love gaming.
              🕹️ Immerse Yourself in Captivating Worlds: From exploring mythical realms to conquering galaxies far, far away, gaming transports you to awe-inspiring landscapes and captivating narratives. Embark on epic quests, be the hero of your own story, or forge alliances with friends in immersive multiplayer universes. With gaming, you are the architect of your destiny!
            </p>
          </div>
          <div className="title">
            <h3>What does he do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm a programmer.</h4>
            <p>
              For the front-end I usually work with Javascript, either standalone or including
              popular frameworks like ReactJS and Angular. I also make the web pretty by using Sass,
              CSS and, whenever needed, any of their friends: Bootstrap, Bulma, etc.
            </p>
            <p>
              For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc). But, of
              course, whenever the project requires PHP, I do PHP as well (Wordpress, Laravel, etc).
            </p>
          </div>
          <div className="desc">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYOXn6X3TDJiVV40G60qJuE61z3DxHbFz-Yg&usqp=CAU"></img>
          </div>
        </article>
      </div>
    </section>
  );
};


export default About;
