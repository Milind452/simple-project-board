import styled from "styled-components";

import Task from "../Task/Task";

const LaneWrapper = styled.div`
    text-align: left;
    padding: 0;
    background-color: lightgray;
    border-radius: 20px;
    width: 20vw;
    min-height: 50vh;

    @media (max-width: 768px) {
        margin-bottom: 5%;
    }
`;

const Title = styled.h2`
    width: 100%;
    padding-bottom: 10%;
    text-align: center;
    border-bottom: 1px solid darkgray;
`;

export default function Lane({
    laneId,
    title,
    loading,
    error,
    tasks,
    onDragStart,
    onDragOver,
    onDrop,
}) {
    return (
        <LaneWrapper onDragOver={onDragOver} onDrop={(e) => onDrop(e, laneId)}>
            <Title>{title}</Title>
            {loading || error ? (
                <span>{error || "loading..."}</span>
            ) : (
                tasks.map((task) => (
                    <Task
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        body={task.body}
                        onDragStart={onDragStart}
                    />
                ))
            )}
        </LaneWrapper>
    );
}
