import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
    state = {
        todos: []
    };
    componentDidMount() {
        this.getTodos();
    }
    getTodos() {
        axios
        .get('http://127.0.0.1:8000/api/')
        .then(res => {
        this.setState({ todos: res.data });
        })
        .catch(err => {
        console.log(err);
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row" className="justify-content-md-center">
                    {this.state.todos.map(item => (
                        <div key={item.id}>
                            <h1>{item.title}</h1>
                            <span>{item.body}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default App;