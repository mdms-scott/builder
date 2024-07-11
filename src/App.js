// src/App.js
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';
import './chota.css';

import { heroes, units } from './factions/gloomspite';

const App = () => {
  const [selectedUnits, setSelectedUnits] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [displayUnit, setDisplayUnit] = useState(null);

  const handleAddUnit = (unit, event) => {
    event.stopPropagation();
    setSelectedUnits([...selectedUnits, unit]);
    setTotalPoints(totalPoints + unit.points);
  };

  const handleRemoveUnit = (index) => {
    const removedUnit = selectedUnits.splice(index, 1);
    setSelectedUnits([...selectedUnits]);
    setTotalPoints(totalPoints - removedUnit[0].points);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedUnits = Array.from(selectedUnits);
    const [movedUnit] = reorderedUnits.splice(result.source.index, 1);
    reorderedUnits.splice(result.destination.index, 0, movedUnit);
    setSelectedUnits(reorderedUnits);
  };

  const handleDisplayUnit = (unit) => {
    setDisplayUnit(unit);
  };

  return (
    <div className="App">
      <h1>Army Builder</h1>
      <div className="container">
        <div className="column">
          <h2>Heroes</h2>
          {heroes.map((hero, index) => (
            <div key={index} className="unit" onClick={() => handleDisplayUnit(hero)}>
              <p>{hero.name}</p>
              <button onClick={(event) => handleAddUnit(hero, event)}>Add</button>
            </div>
          ))}
          <h2>Units</h2>
          {units.map((unit, index) => (
            <div key={index} className="unit" onClick={() => handleDisplayUnit(unit)}>
              <p>{unit.name}</p>
              <button onClick={(event) => handleAddUnit(unit, event)}>Add</button>
            </div>
          ))}
        </div>
        <div className="column">
          <h2>Unit Information</h2>
          {displayUnit ? (
            <div className="unit-info">
              <p>Name: {displayUnit.name}</p>
              <p>Unit Size: {displayUnit.unit_size}</p>
              <p>Points: {displayUnit.points}</p>
              {displayUnit.regiment_options && <p>Regiment Options: {displayUnit.regiment_options}</p>}
              {displayUnit.relevant_keywords && <p>Relevant Keywords: {displayUnit.relevant_keywords}</p>}
              {displayUnit.notes && <p>Notes: {displayUnit.notes}</p>}
              <p>Base Size: {displayUnit.base_size}</p>
            </div>
          ) : (
            <p>Select a unit to see its information</p>
          )}
        </div>
        <div className="column">
          <h2>Army List (Total Points: {totalPoints})</h2>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="selectedUnits">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="unit-list"
                >
                  {selectedUnits.map((unit, index) => (
                    <Draggable key={index} draggableId={String(index)} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="unit"
                        >
                          <p>{unit.name} - {unit.points} pts</p>
                          <button onClick={() => handleRemoveUnit(index)}>Remove</button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default App;
