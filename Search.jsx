import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {
    const [input , setInput] = useState('');
    const navigate =useNavigate();

    const submitHandler = (e) =>
        {
            e.preventDefault();
            navigate('/searched/'+input);
        }

    return (
      <FormStyle onSubmit={submitHandler}>
        <div>
          <FaSearch />
          <input onChange={(e)=> setInput(e.target.value)} 
          type="text"
          value={input} 
          />
        </div>
      </FormStyle>
    )
  }
  
  const FormStyle = styled.form`
      margin: 2rem 10rem;  
      div {
        width: 100%;
        position: relative;
      }
  
      input {
        border: none;
        background: linear-gradient(35deg, #d3d3d3, #a9a9a9);
        font-size: 1.5rem;
        color: #313131;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
        max-width: 50rem; 
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
  
      svg {
        position: absolute;
        top: 50%;
        left: 1rem;
        transform: translate(0%, -50%);
        color: #313131;
        font-size: 1.2rem;
      }
  `;
  
  export default Search;