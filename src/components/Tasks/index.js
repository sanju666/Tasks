import {Component} from 'react'
import {v4} from 'uuid'
import TaskItem from '../TaskItem'
import TaskList from '../TaskList'

class Tasks extends Component {
  state = {
    type: 'Health',
    name: '',
    data: [],
    initial: [],
    t: '',
    h: true,
  }

  getInput = e => {
    this.setState({
      name: e.target.value,
    })
  }

  getType = e => {
    this.setState({
      type: e.target.value,
    })
  }

  addTask = () => {
    const {type, name, data, initial} = this.state
    const result = {
      name,
      type,
      id: v4(),
    }
    this.setState({
      data: [...data, result],
      initial: [...initial, result],
    })
  }

  getResult = id => {
    const {data, h, t, initial} = this.state
    console.log(`h value ${h}`)
    console.log(`t value ${t}`)

    if (t === id) {
      const result =
        h === true ? initial : initial.filter(each => each.id === id)

      this.setState({
        data: result,
        h: !h,
        t: '',
      })
    } else {
      const result = initial.filter(each => each.type === id)

      this.setState({
        data: result,
        t: id,
        h: true,
      })
    }
  }

  render() {
    const {data, name, type, initial} = this.state
    console.log(initial)
    console.log('entered')
    const {tagsList} = this.props
    return (
      <div>
        <h1>Create a task!</h1>

        <form>
          <label htmlFor="Task">Task</label>
          <input
            type="text"
            onChange={this.getInput}
            value={name}
            id="Task"
            placeholder="Enter the task here"
          />
          <label htmlFor="Tags">Tags</label>
          <select onChange={this.getType} value={type} id="Tags">
            <option value="HEALTH">Health</option>
            <option value="EDUCATION">Education</option>
            <option value="ENTERTAINMENT">Entertainment</option>
            <option value="SPORTS">Sports</option>
            <option value="TRAVEL">Travel</option>
            <option value="OTHERS">others</option>
          </select>
          <button onClick={this.addTask}>Add Task</button>
        </form>
        <h1>Tags</h1>
        <ul>
          {tagsList.map(each => (
            <TaskItem
              item={each}
              getResult={this.getResult}
              key={each.optionId}
            />
          ))}
        </ul>
        <h1>Tasks</h1>

        <ul>
          {data.map(each => (
            <TaskList item={each} key={each.type} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Tasks
