import React, { useState, ChangeEvent } from 'react';

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
