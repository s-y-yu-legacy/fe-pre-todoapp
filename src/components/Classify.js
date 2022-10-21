import styled from 'styled-components';
// import { useState } from 'react';
import useFetch from '../functions/useFetch';

const Classified = styled.div`
  width: calc(150px - 3rem);
  border-radius: 12px;
  padding: 1rem;
  background-color: #aaaaaa;
  cursor: pointer;

  :nth-child(2n-1) {
    margin-right: 0.25rem;
  }
  :nth-child(2n) {
    margin-left: 0.25rem;
  }
  .case {
    text-align: right;
  }
  .case span {
    font-weight: 700;
    font-size: 1.5rem;
  }
`;

const Classify = () => {
  const fetchData = useFetch('http://localhost:3001/todos');

  return (
    <>
      <Classified>
        <div className="case">
          전체 | <span>{fetchData.length}</span>
        </div>
      </Classified>
      <Classified>
        <div className="case">
          전체 | <span>{fetchData.length}</span>
        </div>
      </Classified>
    </>
  );
};

export default Classify;
