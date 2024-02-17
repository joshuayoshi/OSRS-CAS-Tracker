import React, { useEffect, useState } from 'react';
import stateStore from './store';

async function fetchSyncJson(url: string){
    try{
    const response = await fetch(url);
    if(!response.ok) throw new Error('Failed to fetch JSON');
    const data = await response.json();
    return data;
}   catch (error) {
    console.error('Error fetching JSON:', error);
}
}

export async function fetchData(rsn: any, setCompletedCasArray: any) {
    // Error: Invalid hook call. Hooks can only be called inside of the body of a function component. ):
    // const {setCompletedCasArray, rsn} = stateStore();

    let url = `https://sync.runescape.wiki/runelite/player/${rsn}/STANDARD`;
    const jsonData = await fetchSyncJson(url);
    if (jsonData) console.log('JSON data: ', jsonData);
    else console.error("Failed to fetch json data");

    setCompletedCasArray(jsonData.combat_achievements);
}
