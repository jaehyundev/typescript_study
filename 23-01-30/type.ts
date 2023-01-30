// 인터페이스의 정의
interface Todo{
    id: number;
    content: string;
    completed: boolean;
}

// 변수 todo의 타입으로 Todo 인터페이스를 선언함
let todo: Todo;

// 변수 todo Todo 인터페이스를 준수해야함
todo = {id: 1, content: 'typescript', completed: false};