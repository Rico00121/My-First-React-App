import React from "react";
import { ReactDOM } from "react";

class Hello extends React.Component{
    state = {
        txt:''
    }
    handleChange = e =>{
        this.setState({
            txt: e.target.value
        })
    } 
    render(){
        return(<div>我的类住建
                <input type="text" value={this.state.txt} onChange={this.handleChange}></input>
            </div>)
        ;
    }
}
export default Hello;