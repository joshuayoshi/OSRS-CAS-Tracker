import React, { useState, ChangeEvent } from 'react';
// import '../App.css';
import '../testMantine.css';
import casListJson from '../data/cas_list.json';
import stateStore from '../store';
import { Table, TextInput, MultiSelect, MultiSelectProps, Avatar, Group, Text, Checkbox  } from '@mantine/core';

import icon_easy from "../assets/Combat_Achievements_-_easy_tier_icon_(small).webp";
import icon_medium from "../assets/Combat_Achievements_-_medium_tier_icon_(small).webp";
import icon_hard from "../assets/Combat_Achievements_-_hard_tier_icon_(small).webp";
import icon_elite from "../assets/Combat_Achievements_-_elite_tier_icon_(small).webp";
import icon_master from "../assets/Combat_Achievements_-_master_tier_icon_(small).webp";
import icon_grandmaster from "../assets/Combat_Achievements_-_grandmaster_tier_icon_(small).webp";

export function UsernameInput( {onKeyDown} ) {
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

export function FilterQueryInput( {onKeyDown} ) {
    const { changeFilterQuery } = stateStore();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        changeFilterQuery(event.target.value);
    };

    return (
      <TextInput 
      placeholder="Filter CAs..."
      onChange={handleChange}
      onKeyDown={onKeyDown}
      />        
    );
}


export function DifficultyFilterOptions() {
  const { changedifficultyFilterArray } = stateStore();

  const difficultyOptionsData: Record<string, { image: string }> = {
    'Easy': {
      image: icon_easy,
    },
    'Medium': {
      image: icon_medium,
    },
    'Hard': {
      image: icon_hard,
    },
    'Elite': {
      image: icon_elite,
    },
    'Master': {
      image: icon_master,
    },
    'Grandmaster': {
      image: icon_grandmaster,
    },
  }

  const renderMultiSelectOption: MultiSelectProps['renderOption'] = ({ option }) => (
    <Group gap="sm">
      <Avatar src={difficultyOptionsData[option.value].image} size={16} radius="xl" />
      {/* <Avatar src={icon_easy} size={36} radius="xl" /> */}
      <div>
        <Text size="sm">{option.value}</Text>
      </div>
    </Group>
  );

  return (
    <div>
    {/* <img src={icon_easy} />
    <img src={icon_medium} />
    <img src={icon_hard} />
    <img src={icon_elite} />
    <img src={icon_master} />
    <img src={icon_grandmaster} /> */}
    <MultiSelect
      data={['Easy', 'Medium', 'Hard', 'Elite', 'Master', 'Grandmaster']}
      renderOption={renderMultiSelectOption}
      //   label="Select difficulties"
      placeholder="Select difficulties to display"
      onChange={changedifficultyFilterArray} //Passes the 'value' property to the stateStore
      />
    </div>
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
    const { completedCasArray, filterQuery, difficultyFilterArray, completedCheckbox, notCompletedCheckbox } = stateStore();

    let casList = casListJson.map((x: any) => {
        return {
            id: Number(x[0]),
            boss: x[1],
            name: x[2],
            description: x[3],
            type: x[4],
            difficulty: x[5]
        }
    });

  // Filter casList based on filterQuery before mapping to rows
  const filteredCasList = casList.filter((element) => {
    let achievementCompleted = completedCasArray.includes(element.id);
    let showRowBasedOnFilters = 0;
    if ((completedCheckbox && achievementCompleted) || (notCompletedCheckbox && !achievementCompleted)) {
      showRowBasedOnFilters = 1;
    }

    if (showRowBasedOnFilters) {
      if (difficultyFilterArray.length === 0) {
        return Object.values(element).some(value =>
          value.toString().toLowerCase().includes(filterQuery.toLowerCase())
        );
      } else {
        for (const diff of difficultyFilterArray) {
          if (element.difficulty.includes(diff)) {
            return Object.values(element).some(value =>
              value.toString().toLowerCase().includes(filterQuery.toLowerCase())
              );
            }
          }
          return false; // Return false if difficulty does not match any element in difficultyFilterArray
        }
      }
      return false; // Default return value if no condition is met
    });

    //Rows
    const rows = filteredCasList.map((element) => {
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
              <Table.Th>Description</Table.Th>
              <Table.Th>Type</Table.Th>
              <Table.Th>Difficulty</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      );
}

export function CheckboxFilters() {
  const { changeCompletedCheckbox, changeNotCompletedCheckbox } = stateStore();
  //Show not-completed
  //Show completed
  return (
    <div>
      Show:
      <Checkbox
        defaultChecked
        color="lime.4"
        iconColor="dark.8"
        size="md"
        label="Completed"
        onChange={(e) => changeCompletedCheckbox(e.target.checked)}
      />
      <Checkbox
        defaultChecked
        color="lime.4"
        iconColor="dark.8"
        size="md"
        label="Not-Completed"
        onChange={(e) => changeNotCompletedCheckbox(e.target.checked)}
      />
    </div>
  );
}