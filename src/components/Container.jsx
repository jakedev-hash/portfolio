import React from 'react';
import './container.css';
import TextBlockOne from './TextBlockOne';
import TextBlock2 from './TextBlock2';
import TextBlock3 from './TextBlock3';
import TextBlock4 from './TextBlock4';
import Photo from './Photo';
import Photo3 from './photo3';
import NavBar from './NavBar';
import InteractiveBar from './InteractiveBar';

const Container = () => {
  return (
    <div className="container">
      <div className="content">
        {/* Home Section */}
        <div id="home">
          <TextBlock2 />
        </div>

        {/* About Me Section */}
        <div id="about">
          <TextBlock3 />
        </div>

        {/* Projects Section */}
        <div id="projects">
          <TextBlock4 />
        </div>

        {/* Other Components */}
        <InteractiveBar />
        <Photo />
        <Photo3 />
        <NavBar />
      </div>
    </div>
  );
};

export default Container;