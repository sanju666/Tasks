const TaskList = props => {
  const {item} = props
  return (
    <li>
      <p>{item.name}</p>
      <p>{item.type}</p>
    </li>
  )
}

export default TaskList
