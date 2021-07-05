import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <h3>
        Made by <span>Lucas Boscariole</span>
      </h3>
      <a href='https://github.com/lucasboscariole' target='_blank'>
        <FaGithub className='icon' />
      </a>
    </footer>
  );
}

export default Footer;
