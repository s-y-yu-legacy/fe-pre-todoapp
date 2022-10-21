import styled from 'styled-components';
// import { useState } from "react";
import TodoList from './TodoList';

export const CurrentCategory = styled.h1`
  font-size: 1.5rem;
`;

export const HomeContainer = styled.div`
  position: fixed;
  left: 300px;
  padding: 1rem;
`;

const Home = () => {
  return (
    <>
      <HomeContainer>
        <TodoList />
      </HomeContainer>
    </>
  );
};

export default Home;
