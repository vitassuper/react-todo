import React from 'react'
import Popup from "reactjs-popup";
export default class TodoAddItem extends React.Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.state = {
            title: '',
            failed:false
        }
    }

    failed(){
        console.log("Work");
    }

    addTodo(state) {
        if(state.title.length===0){
            console.log(this.state);
            this.setState({failed:true});
            return;
        }
        let todo = { title: state.title, date: new Date().toLocaleString() };
        this.props.addTodo(todo);
    }

    handleChange = (e) => {

        this.setState({
          [e.target.id]: e.target.value
        })
      };

    handleSubmit=(e)=>{
        this.addTodo(this.state);
        this.setState({title:''});
    }

    
    render() {
        return (<div>
           <Popup open={this.state.failed}
           onClose={()=>{this.setState({failed:false})}}
            modal closeOnDocumentClick>
            <span className="modal"> Поле не должно быть пустым </span>
          </Popup>
            <input type="text" id="title" placeholder="Todo title" value= {this.state.title} onChange={this.handleChange}/>
            <button className="waves-effect waves-light btn" onClick={this.handleSubmit}>Add todo</button>
        </div>);
    }
}
