import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
    return (
      <img width="95%" src="https://i.ibb.co/M2DrKzh/Logo-Lo-Lquiz.png"></img>
    );
  }
  
  Logo.propTypes = {
    className: PropTypes.string.isRequired,
  };
  
  const QuizLogo = styled(Logo)`
    margin: auto;
    @media screen and (max-width: 500px) {
    margin: 0px;
    }
  `;
  
  export default QuizLogo;