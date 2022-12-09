import { atom, selector } from "recoil";

// enum : 계속해서 써야하는 값을 저장할 수 있는 도구, 어디에서나 사용 가능
export enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING", 
    "DONE" = "DONE",
}

export interface IToDo {
    text: string;
    id: number;
    category: Categories;
}

// 카테고리 상태
export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO
}) 

// 모든 toDo들을 저장하는 toDoState
export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
});

// selector : state를 원하는 방향으로 변형해주는 함수
export const toDoSelector = selector({
    key: "toDoSelector",
    // get function : selector가 어떤 것을 반환할지 결정
    // {get} : 원하는 atom을 가져올 수 있음
    get: ({ get }) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        // selector : toDo를 가져가 categoryState에 맞는 toDo만 걸러서 반환
        return toDos.filter((toDo) => toDo.category === category);
    }
})