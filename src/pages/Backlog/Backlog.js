import "./Backlog.css";

import Task from "../../components/Task/Task";

import useFetch from "../../hooks/useFetch";

export default function Backlog() {
    const [loading, error, tasks] = useFetch(
        "https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks"
    );

    return (
        <div className="Backlog-wrapper">
            <h2>Backlog</h2>
            <div className="Tasks-wrapper">
                {loading || error ? (
                    <span>{error || "loading..."}</span>
                ) : (
                    tasks.map((task) => (
                        <Task
                            key={task.id}
                            title={task.title}
                            body={task.body}
                        />
                    ))
                )}
            </div>
        </div>
    );
}