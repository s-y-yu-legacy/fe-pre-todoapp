import styled from 'styled-components';
// import { useState } from 'react';
import Classify from './Classify';

export const Container = styled.nav`
  position: fixed;
  color: black;
  background-color: #dddddd;
  width: 300px;
  height: 100vh;
  border-right: #666666;
`;

export const ClassifyContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
`;

export const CategoryContainer = styled.div``;

export const Category = styled.div``;

const Nav = () => {
  return (
    <>
      <Container>
        <ClassifyContainer>
          <Classify />
        </ClassifyContainer>
        <CategoryContainer>
          <Category />
        </CategoryContainer>
      </Container>
    </>
  );
};

export default Nav;
