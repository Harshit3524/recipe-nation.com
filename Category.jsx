import {FaPizzaSlice , FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks}   from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import React from 'react'

function Category() {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h6>Italian</h6>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger/>
            <h6>American</h6>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles/>
            <h6>Thai</h6>
        </SLink>
        <SLink to={'/cuisine/Japanese'}>
            <GiChopsticks/>
            <h6>Japanese</h6>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content : center;
    margin : 2rem 0rem;
`;
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #d3d3d3, #a9a9a9);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: white;
        font-size: 0.8rem;
    }

    svg {
        color: white;
        font-size: 1.5rem;
    }

    &.active {
        background: linear-gradient(to right, #f27121, #e94057);

        svg {
            color: white;
        }

        h4 {
            color: white;
        }
    }
`;



export default Category