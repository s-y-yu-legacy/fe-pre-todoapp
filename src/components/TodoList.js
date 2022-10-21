import useFetch from '../functions/useFetch';
import styled from 'styled-components';

const List = styled.div`
  .title {
    font-weight: 700;
  }
  .deadlinedate,
  .deadlinetime,
  .place {
    color: #666666;
  }

  width: calc(100vw - 300px);
  padding-bottom: 1rem;
  border-bottom: 1px solid black;
  margin-bottom: 1rem;
`;
function handleCheck(e) {
  console.log(e.target.value);
  //todo에서 데이터 체크하는 로직
}

const TodoList = () => {
  const fetchData = useFetch('http://localhost:3001/todos');
  return (
    <div>
      {fetchData &&
        fetchData.map((el) => (
          <List key={el.id}>
            <input
              type="checkbox"
              defaultChecked={el.finished === 'true' && true}
              onChange={handleCheck}
            ></input>
            <h1 className="title">
              {el.priority === '1' && '<!>'} {el.title}
            </h1>
            <span className="deadlinedate">
              {el.deadlinedate !== 'null' && el.deadlinedate}
            </span>
            <span className="deadlinetime">
              {el.deadlinetime !== 'null' && el.deadlinetime}
            </span>
            <span className="place">{el.place !== 'null' && el.place}</span>
          </List>
        ))}
    </div>
  );
};

export default TodoList;
