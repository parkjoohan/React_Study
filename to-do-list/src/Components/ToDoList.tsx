import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector} from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
    // selector에서 값을 가져오거나 보내기 위해 사용
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        // select의 value를 가져와 categoryState에 넣어줌
        setCategory(event.currentTarget.value as any);
    };
    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <select value={category} onInput={onInput}>
                <option value={Categories.TO_DO}>To Do</option>
                <option value={Categories.DOING}>Doing</option>
                <option value={Categories.DONE}>Done</option>
            </select>
            <CreateToDo />
            {toDos?.map(toDo => <ToDo key={toDo.id} {...toDo} />)}
        </div>
    );
}

export default ToDoList;