import React from "react";


function InventoryList(props){
    return(
        <div>
            <h2>Inventory List</h2>
            <ul>{props.items.map((item) => (
                <li key={item.id}>
                    {item.type}: {item.description} - Assigned to {item.assignedTo}
                </li>
            ))}
            </ul>
        </div>
    );
}

export default InventoryList;