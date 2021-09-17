import React, { useRef } from "react";
import useStore from "../store";
import styled from "styled-components";

export function Todolist() {
  const Title = styled.h1`
    font-size: 2rem;
    text-decoration: underline;
  `;
  const SubTitle = styled(Title)`
    font-size: 1.5rem;
  `;
  const Textarea = styled.input`
    padding: 0.7rem;
    font-size: 1.2rem;
    box-shadow: 0 0 10px #ccc;
    border: none;
  `;
  const AddButton = styled.button`
    margin-left: 3rem;
    padding: 0.7rem;
    font-size: 1.2rem;
    background: rgb(0, 132, 255);
    color: white;
    border: none;
  `;
  const TextWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    div {
      border-radius: 12px;
      box-shadow: 0 0 10px #ccc;
      margin-right: 20px;
      margin-bottom: 20px;
      padding: 1rem;
    }
    div:hover {
      background-color: rgb(233, 231, 231);
      cursor: pointer;
    }
  `;
  const inputRef = useRef();
  const id = useStore((state) => state.id);
  const tasks = useStore((state) => state.tasks);
  const add = useStore((state) => state.addTask);
  const remove = useStore((state) => state.deleteTask);
  const addTaskHandler = () => {
    add({ id: id, task: inputRef.current.value });
    inputRef.current.value = "";
  };
  const deleteTaskHandler = (id) => {
    remove(id);
  };
  console.log(tasks);
  return (
    <React.Fragment>
      <Title>TodoList</Title>
      <Textarea
        type="text"
        ref={inputRef}
        placeholder="add task..."
        onKeyDown={(e) => e.key === "Enter" && addTaskHandler()}
      />
      <AddButton onClick={addTaskHandler}>Add Task</AddButton>
      <SubTitle>Tasks to complete:</SubTitle>
      <TextWrapper>
        {tasks.map((task) => (
          <div key={task.id} onClick={() => deleteTaskHandler(task.id)}>
            {task.task}
          </div>
        ))}
      </TextWrapper>
    </React.Fragment>
  );
}
