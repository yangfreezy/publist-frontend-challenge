import React, { Component } from "react";
import styled from "styled-components";
import DataCard from "./DataCard";

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 2rem;
  color: black;
`;

const ListTitle = styled.text`
  padding-right: 2rem;
`;
const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 3rem;
`;

class DataList extends Component {
  render() {
    return (
      <StyledList>
        <TitleRow>
          <ListTitle> Score </ListTitle>
        </TitleRow>
        {this.props.data.map((obj, i) => <DataCard obj={obj} key={i} />)}
      </StyledList>
    );
  }
}

export default DataList;
