import styled from "styled-components";

import Lane from "../../components/Lane/Lane";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";

const BoardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5%;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const lanes = [
    { id: 1, title: "To Do" },
    { id: 2, title: "In Progress" },
    { id: 3, title: "Review" },
    { id: 4, title: "Done" },
];

function onDragStart(e, id) {
    e.dataTransfer.setData("id", id);
}

function onDragOver(e) {
    e.preventDefault();
}

export default function Board() {
    const [loading, error, data] = useFetch(
        "https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks"
    );

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data);
    }, [data]);

    function onDrop(e, laneId) {
        const id = e.dataTransfer.getData("id");
        const updatedTasks = tasks.filter((task) => {
            if (task.id.toString() === id) {
                task.lane = laneId;
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    return (
        <BoardWrapper>
            {lanes.map((lane) => (
                <Lane
                    key={lane.id}
                    laneId={lane.id}
                    title={lane.title}
                    loading={loading}
                    error={error}
                    tasks={tasks.filter((task) => task.lane === lane.id)}
                    onDragStart={onDragStart}
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                />
            ))}
        </BoardWrapper>
    );
}
