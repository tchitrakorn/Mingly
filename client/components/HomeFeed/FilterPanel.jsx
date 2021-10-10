import React, { useState, useEffect } from "react";

function FilterPanel(props) {
    // const [inperson, setInperson] = useState(true);
    // const [virtual, setVirtual] = useState(true);
    // const [groupSize, setGroupSize] = useState(0);

    const handleInputChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log('target: ', target);
        console.log('value: ', value);
        console.log('name: ', name);
        if (name === 'in-person') {
            props.setInperson(value);
        }
        if (name === 'virtual') {
            props.setVirtual(value);
        }
    }
    return (
        <div class="filter-wrapper">
            <form>
                <p class="filter-by">Filter By:</p>
                {/* <a>Time</a> */}
                <div id="mode-sorting">
                    <a>Mode</a>
                    <label>
                        In-person
                        <input 
                            type="checkbox" 
                            id="in-person" 
                            name="in-person" 
                            value="in-person" 
                            // checked={inperson}
                            onChange={handleInputChange}/>
                    </label>
                    <br />
                    <label>
                        Virtual
                        <input 
                            type="checkbox" 
                            id="virtual" 
                            name="virtual" 
                            value="virtual"
                            // checked={virtual}
                            onChange={handleInputChange}/>
                    </label>
                </div>
                <div id="group-size-sorting">
                    <a>Group Size</a>
                    <label>
                        Choose your preferred maximum group size:
                        <input 
                            type="text" 
                            name="groupSize"
                            onChange={e => props.setGroupSize(e.target.value)} />
                    </label>
                </div>

            </form>
        </div>
    );
}

export default FilterPanel;
