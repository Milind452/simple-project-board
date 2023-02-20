import "./Board.css";

import Lane from "../../components/Lane/Lane";
import { useEffect, useState } from "react";

const lanes = [
    { id: 1, title: "To Do" },
    { id: 2, title: "In Progress" },
    { id: 3, title: "Review" },
    { id: 4, title: "Done" },
];

export default function Board() {
    const [loading, setLoading] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetch(
                    "https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks"
                );
                const result = await data.json();
                if (result) {
                    setTasks(result);
                    setLoading(false);
                }
            } catch (e) {
                setError(e.message);
                setLoading(false);
            }
        }
        setLoading(true);
        fetchData();
    }, []);

    return (
        <div className="Board-wrapper">
            {lanes.map((lane) => (
                <Lane
                    key={lane.id}
                    title={lane.title}
                    loading={loading}
                    error={error}
                    tasks={tasks.filter((task) => task.lane === lane.id)}
                />
            ))}
        </div>
    );
}
