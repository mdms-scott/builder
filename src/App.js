// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';
import './chota.css';

// Import faction data
import * as gloomspite from './factions/gloomspite';
// Add imports for other factions
import * as flesheaters from './factions/flesheaters'; 
import * as kruleboyz from './factions/kruleboyz';
import * as nurgle from './factions/nurgle';
import * as tzeentch from './factions/tzeentch';
import * as dwarves from './factions/dwarves';
import * as lizards from './factions/lizards';

const factions = {
  Gloomspite: gloomspite,
  Flesheaters: flesheaters,
  Kruleboyz: kruleboyz,
  Nurgle: nurgle,
  Tzeentch: tzeentch,
  Dwarves: dwarves,
  Lizards: lizards,
};

const App = () => {
  const [selectedFaction, setSelectedFaction] = useState(
    localStorage.getItem('selectedFaction') || 'Gloomspite'
  );
  const [selectedUnits, setSelectedUnits] = useState(
    JSON.parse(localStorage.getItem('selectedUnits')) || {}
  );
  const [totalPoints, setTotalPoints] = useState(
    JSON.parse(localStorage.getItem('totalPoints')) || {}
  );
  const [modelCount, setModelCount] = useState(
    JSON.parse(localStorage.getItem('modelCount')) || {}
  );
  const [displayUnit, setDisplayUnit] = useState(null);

  // Save selected faction to localStorage
  useEffect(() => {
    localStorage.setItem('selectedFaction', selectedFaction);
  }, [selectedFaction]);

  // Save selected units, total points, and model count to localStorage
  useEffect(() => {
    localStorage.setItem('selectedUnits', JSON.stringify(selectedUnits));
    localStorage.setItem('totalPoints', JSON.stringify(totalPoints));
    localStorage.setItem('modelCount', JSON.stringify(modelCount));
  }, [selectedUnits, totalPoints, modelCount]);

  const currentFaction = factions[selectedFaction];
  const currentSelectedUnits = selectedUnits[selectedFaction] || [];
  const currentTotalPoints = totalPoints[selectedFaction] || 0;
  const currentModelCount = modelCount[selectedFaction] || 0;

  const handleAddUnit = (unit, event) => {
    event.stopPropagation();
    const newSelectedUnits = [...(selectedUnits[selectedFaction] || []), unit];
    setSelectedUnits({ ...selectedUnits, [selectedFaction]: newSelectedUnits });
    setTotalPoints({ ...totalPoints, [selectedFaction]: (totalPoints[selectedFaction] || 0) + unit.points });
    setModelCount({ ...modelCount, [selectedFaction]: (modelCount[selectedFaction] || 0) + unit.unit_size });
  };

  const handleRemoveUnit = (index) => {
    const removedUnit = [...selectedUnits[selectedFaction]];
    removedUnit.splice(index, 1);
    setSelectedUnits({ ...selectedUnits, [selectedFaction]: removedUnit });
    
    const removedUnitData = selectedUnits[selectedFaction][index];
    setTotalPoints({ ...totalPoints, [selectedFaction]: totalPoints[selectedFaction] - removedUnitData.points });
    setModelCount({ ...modelCount, [selectedFaction]: modelCount[selectedFaction] - removedUnitData.unit_size });
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedUnits = Array.from(currentSelectedUnits);
    const [movedUnit] = reorderedUnits.splice(result.source.index, 1);
    reorderedUnits.splice(result.destination.index, 0, movedUnit);
    setSelectedUnits({ ...selectedUnits, [selectedFaction]: reorderedUnits });
  };

  const handleDisplayUnit = (unit) => {
    setDisplayUnit(unit);
  };

  const handleFactionChange = (event) => {
    setSelectedFaction(event.target.value);
    setDisplayUnit(null);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <h1>Army Builder</h1>
        <select onChange={handleFactionChange} value={selectedFaction}>
          {Object.keys(factions).map(faction => (
            <option key={faction} value={faction}>{faction}</option>
          ))}
        </select>
        <div className="container">
          <div className="column">
            <h2>Heroes</h2>
            {currentFaction.heroes.map((hero, index) => (
              <div key={index} className="unit" onClick={() => handleDisplayUnit(hero)}>
                <p>{hero.name}</p>
                <button onClick={(event) => handleAddUnit(hero, event)}>Add</button>
              </div>
            ))}
            <h2>Units</h2>
            {currentFaction.units.map((unit, index) => (
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
            <h2>Army List</h2>
            <h4>Total Points: {currentTotalPoints}  Model Count: {currentModelCount}</h4>
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="selectedUnits">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="unit-list"
                  >
                    {currentSelectedUnits.map((unit, index) => (
                      <Draggable key={index} draggableId={String(index)} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={unit.type}
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
    </Router>
  );
};

export default App;
