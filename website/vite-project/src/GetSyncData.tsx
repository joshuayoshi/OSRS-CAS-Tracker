import React, { useEffect, useState } from 'react';

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

async function fetchData(rsn: string) {
    let url = `https://sync.runescape.wiki/runelite/player/${rsn}/STANDARD`;
    const jsonData = await fetchSyncJson(url);
    if (jsonData) console.log('JSON data: ', jsonData);
    else console.error("Failed to fetch json data");
    return jsonData;
}

export function DisplayData(props: any){
    const rsn = props.inputText;
    const [data, setData] = useState({combat_achievements:[]});
    useEffect(()=> {
        callData();
    }, [props.clickCount]);

    async function callData(){
        try{
            const d = await fetchData(rsn);
            if(d){
                setData(d);
            }
        } catch {
            console.log("error with callData");
        }
    }

    const listItems = data.combat_achievements.join(", ")

    return (
        // <div>
        // {/* <p>Getting WikiSync data of {rsn}</p> */}
        // {listItems}
        // </div>
        data.combat_achievements
    )
}