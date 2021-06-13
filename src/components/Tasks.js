import Task from './Task'
import Button from './button'
import { useSelector, useDispatch } from 'react-redux'
// import { deleteTask } from '../reducers/handleTask'
import { deleteTask } from '../actions'

const Tasks = ({  onDelete, onToggle }) => {
    
    
    const tasks = useSelector((state) => state.tasksReducer2)
    // console.log('tasks :>> ', tasks);

    const dispatch = useDispatch()
    
    return (
        <>
            {tasks.map((task, index) => (
                // <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
                <div className={`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onToggle(task.id)} key={index}
        >
            <h3>
                {task.text}{' '}
                <Button text='X' color='red' click={() => dispatch(deleteTask(task.id))} />

            </h3>
            <p>{task.day}</p>
        </div>
            ))}
        </>
    )
}

export default Tasks