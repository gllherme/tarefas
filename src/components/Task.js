import { TiTrash } from "react-icons/ti"

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text}
                <TiTrash
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() =>
                        onDelete(task.id)}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
