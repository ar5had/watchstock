import './Author.css';
import authorImage from '../../images/asd.jpg';
import React, {Component} from 'react';

class Author extends Component {
  componentDidMount() {
    const div = document.querySelector('.authorCredits');
    const para = document.querySelector('.authorCredits>p');
    div.addEventListener('click', () => {
      if(para.classList.contains('slide')) {
        const tab = window.open('http://iamarshad.com', '_blank');
        if(tab) {
          tab.focus();
        } else {
          alert("Please allow popups for this website!");
        }
      }
      para.classList.add('slide');
    });
  }

  render() {
    return (
      <div className="authorCredits">
        <img src={authorImage} alt="Arshad" />
        <p>Tap for more cool projects!</p>
      </div>
    );
  }
}

export default Author;
