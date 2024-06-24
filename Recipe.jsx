import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab , setactiveTab] =useState("instructions");

  const fetchDetails = async () => {
    const Data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await Data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button  className={activeTab === 'instructions' ? 'active' : ''}  onClick={() => setactiveTab('instructions')}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''}  onClick={() => setactiveTab('ingredients')}>Ingredients</Button>
        {activeTab === 'instructions' && (
             <div>
             <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
             <h3 dangerouslySetInnerHTML={{__html : details.instructions}}></h3>
         </div>
        )}
        {activeTab === 'ingredients' && (
            <ul>
            {details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id }>{ingredient.original}</li>
            ))}
            </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  .active {
    background: linear-gradient(35deg, #d3d3d3, #a9a9a9);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #a9a9a9;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe;
