const TaskItem = props => {
  const {item, getResult} = props
  return (
    <li>
      <button onClick={() => getResult(item.displayText)}>
        {item.displayText}
      </button>
    </li>
  )
}

export default TaskItem
