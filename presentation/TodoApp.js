import React from 'react';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: '', todos: [] }
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    this.setState({ todo: '', todos: [...this.state.todos, this.state.todo] })
  }

  render() {
    let { state: { todo, todos }, submit } = this;
    return (
      <div>
        <h1>Todo List</h1>
        <form className="center" onSubmit={submit}>
          <input style={{ textAlign: 'center', fontSize: '48px' }} value={todo} onChange={(e) => this.setState({ todo: e.target.value })} />
        </form>
        <div className="center">
          { todos.length ? 
            <ul className="collection">
              { todos.map( (t,i) => {
                  return (<li key={i} className="collection-item black">{t}</li>)
                })
              }
            </ul>
            : null
          }
        </div>
      </div>
    )
  }
}

export default TodoApp;
