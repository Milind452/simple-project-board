import "./Board.css";

export default function Board() {
    const lanes = [
        { id: 1, title: "To Do" },
        { id: 2, title: "In Progress" },
        { id: 3, title: "Review" },
        { id: 4, title: "Done" },
    ];

    return (
        <div className="Board-wrapper">
            {lanes.map((lane) => (
                <div key={lane.id}>{lane.title}</div>
            ))}
        </div>
    );
}
