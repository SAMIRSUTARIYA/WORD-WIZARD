import React from 'react';
import styled from 'styled-components';

const Button3 = (props) => {
  return (
    <StyledWrapper>
        <button className="button" onClick={props.onClick}>
          {props.title}
        </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    --bezier: cubic-bezier(0.22, 0.61, 0.36, 1);
    --edge-light: hsla(0, 0%, 50%, 0.8);
    --text-light: rgba(255, 255, 255, 0.4);
    --back-color: 240, 40%;

    cursor: pointer;
    padding: 5px 10px;
    border-radius: 0.5em;
    min-height: 2.4em;
    min-width: 3em;
    display: flex;
    align-items: center;
    gap: 0.5em;

    font-size: 14px;
    letter-spacing: 0.05em;
    line-height: 1;
    font-weight: bold;

    background: linear-gradient(
      140deg,
      hsla(var(--back-color), 50%, 1) min(2em, 20%),
      hsla(var(--back-color), 50%, 0.6) min(8em, 100%)
    );
    color: hsla(0, 0%, 90%);
    border: 0;
    box-shadow: inset 0.4px 1px 4px var(--edge-light);

    transition: all 0.1s var(--bezier);
  }

  .button:hover {
    --edge-light: hsla(0, 0%, 50%, 1);
    text-shadow: 0px 0px 10px var(--text-light);
    box-shadow: inset 0.4px 1px 4px var(--edge-light),
      2px 4px 8px hsla(0, 0%, 0%, 0.295);
    transform: scale(1.01);
  }

  .button:active {
    --text-light: rgba(255, 255, 255, 1);

    background: linear-gradient(
      140deg,
      hsla(var(--back-color), 50%, 1) min(2em, 20%),
      hsla(var(--back-color), 50%, 0.6) min(8em, 100%)
    );
    box-shadow: inset 0.4px 1px 8px var(--edge-light),
      0px 0px 8px hsla(var(--back-color), 50%, 0.6);
    text-shadow: 0px 0px 20px var(--text-light);
    color: hsla(0, 0%, 100%, 1);
    transform: scale(1);
  }`;

export default Button3;
