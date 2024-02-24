import React, { useState, ChangeEvent } from 'react';
// import '../App.css';
import '../testMantine.css';
import casListJson from '../data/cas_list.json';
import stateStore from '../store';
import { Table } from '@mantine/core';

export function TextInput({ id, onKeyDown }) {
    const { changeRSN } = stateStore();
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
    const { completedCasArray } = stateStore();
    let casList = casListJson.map((x: any) => {
        return {
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
                    {casList.map((val: any, key: any) => {
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

export function MantineCasTable () {
    const { completedCasArray } = stateStore();
    let casList = casListJson.map((x: any) => {
        return {
            id: x[0],
            boss: x[1],
            name: x[2],
            description: x[3],
            type: x[4],
            difficulty: x[5]
        }
    });
    //Rows
    const rows = casList.map((element) => {
        let completed = (completedCasArray.includes(Number(element.id)));
        return (
        <Table.Tr key={element.id} className={(completed) ? 'completed' : 'not-completed'}>
          <Table.Td>{element.boss}</Table.Td>
          <Table.Td>{element.name}</Table.Td>
          <Table.Td>{element.description}</Table.Td>
          <Table.Td>{element.type}</Table.Td>
          <Table.Td>{element.difficulty}</Table.Td>
        </Table.Tr>
      ) } );
    //Header
      return (
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Boss</Table.Th>
              <Table.Th>CA Name</Table.Th>
              <Table.Th>Descriptionn</Table.Th>
              <Table.Th>Type</Table.Th>
              <Table.Th>Difficulty</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      );
}

export function CasFilters() {
    //Show completed
    //Show not-completed
    //Dropdown menu to show by difficulty
    //Search filter to filter by keyword
}