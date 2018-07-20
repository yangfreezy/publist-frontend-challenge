import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
`;

const Primary = styled.a`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: black;
  padding-right: 1rem;

  :hover {
    text-decoration: underline;
  }
`;
const PrimaryBold = styled.div`
  font-weight: bold;
  font-style: italic;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const Secondary = styled.a`
  color: #c0c0c0;
  font-style: oblique;
  text-decoration: none;
  :hover {
    color: #3e3e3e;
  }
`;

const DataCard = ({ obj }) => {
  console.log(obj);
  return (
    <Card>
      <PrimaryBold> {Math.floor(obj.score)}</PrimaryBold>
      <Primary href={obj.url}>{obj.title}</Primary>
      <Secondary href={obj.site.url}> - {obj.site.name} </Secondary>
    </Card>
  );
};
export default DataCard;
