import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href={""}>Home</a>
                </li>
                <li>
                    <a href={""}>Projects</a>
                </li>
                <li>
                    <button>Contact</button>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 20px;
  }
`