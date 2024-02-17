import React, { useState, ChangeEvent } from 'react';
import '../App.css';
import casListJson from '../data/cas_list.json';
import stateStore from '../store';

    export function TextInput( {id, onKeyDown}) {
    const {changeRSN} = stateStore(); 
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        changeRSN(event.target.value);
      };
    
      return (
        <input
          type="text"
          onChange={handleChange}
          onKeyDown={onKeyDown}
        />
      );
  }

    export function CasTable() {
    const {completedCasArray} = stateStore(); 
    let casList = casListJson.map( (x :any) => { 
        return{
            id: x[0],
            boss: x[1],
            name: x[2],
            description: x[3],
            type: x[4],
            difficulty: x[5]
        }

      });
      return (
        <div className="Table">
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Boss</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Difficulty</th>
                </tr>
                </thead>
                <tbody>
                {casList.map((val:any, key:any) => {
                    let completed = (completedCasArray.includes(Number(val.id)));
                    return (
                        <tr key={key} className={(completed) ? 'completed' : 'not-completed'}>
                            <td>{val.id}</td>
                            <td>{val.boss}</td>
                            <td>{val.name}</td>
                            <td>{val.description}</td>
                            <td>{val.type}</td>
                            <td>{val.difficulty}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
  }

export function CasFilters(){

}