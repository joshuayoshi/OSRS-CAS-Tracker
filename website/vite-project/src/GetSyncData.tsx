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

export async function fetchData(rsn: any, setCompletedCasArray: any,  changeLastSearchedForRSNThatSucceeded: any) {
    let url = `https://sync.runescape.wiki/runelite/player/${rsn}/STANDARD`;
    const jsonData = await fetchSyncJson(url);
    if (jsonData){
        //Succeeded
        console.log('JSON data: ', jsonData);
        changeLastSearchedForRSNThatSucceeded(rsn);
    } 
    else{
        //Failed
        console.error("Failed to fetch json data");
    }
    setCompletedCasArray(jsonData.combat_achievements);
}

