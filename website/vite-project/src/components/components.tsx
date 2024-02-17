import React, { useState, ChangeEvent } from 'react';
import '../App.css';

export function TextInput( {id, onInputChange, onKeyDown}) {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onInputChange(event.target.value);
      };
    
      return (
        <input
          type="text"
          onChange={handleChange}
          onKeyDown={onKeyDown}
        />
      );
  }

  export function CasTable( props: any ) {
    let {casListJson, completedCasArray} = props;
    casListJson = casListJson.map( (x :any) => { 
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
                {casListJson.map((val:any, key:any) => {
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
