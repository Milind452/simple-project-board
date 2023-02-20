import styled from "styled-components";

const TaskWrapper = styled.div`
    background-color: darkgray;
    padding: 20px;
    border-radius: 20px;
    margin: 0 5% 5% 5%;
`;

const Title = styled.h3`
    width: 100%;
    margin: 0;
`;

export default function Task({ id, title, body, onDragStart }) {
    return (
        <TaskWrapper draggable onDragStart={(e) => onDragStart(e, id)}>
            <Title>{title}</Title>
            <p>{body}</p>
        </TaskWrapper>
    );
}
