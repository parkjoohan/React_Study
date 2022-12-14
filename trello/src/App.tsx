import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./Components/Board";

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => { 
    const { destination, draggableId, source } = info;

    if (destination?.droppableId === source.droppableId) {
      // sanme board movement
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]]
        // 1. Delete item on source.index
        boardCopy.splice(source.index, 1);
        // 2. Put back the item on the destination.index
        boardCopy.splice(destination?.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy
        };
      })
    }
  };
  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {
            Object.keys(toDos).map((boardId) => <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />)
          }
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}
export default App;