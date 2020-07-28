import styled from 'styled-components';

const Button = styled.button`
    color: var(--black);
    border: 1px solid var(--black);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    outline: none;
    border-radius: 30px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
    color: #FC0029;
        opacity: .5;
    }
`;

export default Button;