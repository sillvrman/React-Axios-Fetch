import React, { Component } from 'react'
import axios from 'axios'
export default class PersonInput extends Component {

    state = {
        id: 0
    }

    hChange = e => {
        this.setState({id: e.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            id: this.state.id
        }

        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data)
        })
    }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Person ID:
                <input type="number" name="id" onChange={this.hChange}/>
            </label>
            <button type="submit">DELETE</button>
        </form>
    )
  }
}
