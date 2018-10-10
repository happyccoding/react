import React, { Component } from 'react';
import './Ninja.css';

class Ninja extends Component {
  render() {
    const {ninja, deleteNinja} = this.props;
     
    const ninjaList = ninja.map(item => {
        return (
            <div key={item.id}>
                <ul>
                    <li>{item.name}</li>
                    <li>{item.age}</li>
                    <li>{item.sex}</li>
                </ul>
                {/* <button onClick={deleteNinja.bind(this, item.id)}>Delete Ninja</button> */}
                <button onClick={()=>deleteNinja(item.id)}>Delete Ninja</button>
            </div>
        )
    });

    return (
        <div>
            { ninjaList }
        </div>
    )
  }
}

/* stateless */
/*
const Ninja = ({ninja}) => {
    const ninjaList = ninja.filter(item=>item.age>45).map(item => {
        return (
            <div key={item.id}>
                <ul>
                    <li>{item.name}</li>
                    <li>{item.age}</li>
                    <li>{item.sex}</li>
                </ul>
            </div>
        )
    });
  
    return (
        <div>
            { ninjaList }
        </div>
    )
}
*/
export default Ninja;
