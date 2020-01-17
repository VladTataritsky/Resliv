import React from 'react';
import './Actors.css';

class Actors extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      page: 1,
      value: ''
    };
  }

  componentDidMount () {
    fetch(`https://swapi.co/api/people/?page=${this.state.page++}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  deleteActor (event) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode)
  }

  addActor () {
    if (this.state.value !== '') {
      this.setState({items: this.state.items.concat({name: this.state.value, status: 'add'})});
      this.setState({value: ''});
    }
  }

  handleChange (event) {
    this.setState({value: event.target.value});
  }

  render () {
    const {error, isLoaded, items, addAct} = this.state;
    if (this.state.page - 1 === 9) {
      this.setState({page: 1})
    }
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <div className="container">
          <h1>List Of Actors</h1>
          <ul id="list">
            {
              items.map((item, i) => (
                <li key={item.i}>
                  {item.name}
                  <img
                    id="cross"
                    onClick={this.deleteActor}
                    src="https://cdn3.iconfinder.com/data/icons/ui-icons-5/16/cross-small-01-512.png"
                    title="Delete actor"
                    alt=""/>
                </li>
              ))}
          </ul>
          <h4>Page: {this.state.page - 1}</h4>
          <button
            onClick={this.componentDidMount.bind(this)}
            className="btn btn-success">Next Page
          </button>
          <form
            className="form-inline">
            <input
              onChange={this.handleChange.bind(this)}
              value={this.state.value} type="text"
              className="form-control"
              placeholder="Input name"/>
            <button
              onClick={this.addActor.bind(this)}
              type="button"
              className="btn btn-primary">Add Actor
            </button>
          </form>
        </div>
      );
    }
  }
}

export default Actors;



