import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import Axios from 'axios';

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    
    constructor(props) {
        super(props)
        this.state = { description: '', list: []}

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        const description = this.state.description
        Axios.post(URL, {description})
            .then(resp => console.log('Funcionou!'))
        console.log(this.state.description)
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small=' Cadastro'></PageHeader>
                <TodoForm description={this.state.description} handleAdd={this.handleAdd} handleChange={this.handleChange}/>
                <TodoList />
            </div>
        )
    }
}