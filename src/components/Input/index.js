import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 5px 0 5px 0;
    outline: none;
    background-color: ${({ theme }) => theme.colors.mainBg};
    border: 2px solid #3b3b3b;
    border-radius: 5px;
    color: #a1a1a1;
    font-weight: 500;
    transition: 0.25s;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary}
    }
`;

Input.Button = styled.button`
    width: 100%;
    padding: 10px;
    margin: 5px 0 5px 0;
    outline: none;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
`

export default Input;