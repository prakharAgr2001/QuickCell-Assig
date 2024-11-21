import React, { useState } from 'react';
import TicketColumn from './TicketColumn';
import './TicketBoard.css';
import { groupTickets, sortTickets } from '../utils/ticketUtils';

const TicketBoard = ({ tickets, grouping, sorting, onGroupingChange, onSortingChange, users }) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    if (!Array.isArray(tickets)) {
        return <div>Loading tickets...</div>;
    }

    const handleGroupingChange = (value) => {
        setIsDropdownVisible(false); // Close the dropdown
        onGroupingChange(value);   // Call the original function
    };

    const handleSortingChange = (value) => {
        setIsDropdownVisible(false); // Close the dropdown
        onSortingChange(value);    // Call the original function
    };

    const groupedTickets = groupTickets(tickets, grouping);
    const sortedGroups = Object.entries(groupedTickets).map(([key, group]) => ({
        key,
        tickets: sortTickets(group, sorting),
    }));

    return (
        <div>
            <div className="dropdown-container">
                <button
                    className="dropdown-toggle"
                    onClick={() => setIsDropdownVisible(!isDropdownVisible)}
                >
                    <span className="toggle-icon">
                        <img
                            src={`/Assets/icons_FEtask/Display.svg`}
                            alt="dropdown-icon"
                        />
                    </span>
                    <span>Display</span>
                    <span className="toggle-icon">
                        <img
                            src={`/Assets/icons_FEtask/down.svg`}
                            alt="down-arrow-icon"
                        />
                    </span>
                </button>

                {isDropdownVisible && (
                    <div className="dropdown-menu">
                        <div>
                            <label>Grouping:</label>
                            <select value={grouping} onChange={(e) => handleGroupingChange(e.target.value)}>
                                <option value="status">Status</option>
                                <option value="userId">User</option>
                                <option value="priority">Priority</option>
                            </select>
                        </div>

                        <div>
                            <label>Ordering:</label>
                            <select value={sorting} onChange={(e) => handleSortingChange(e.target.value)}>
                                <option value="priority">Priority</option>
                                <option value="title">Title</option>
                            </select>
                        </div>
                    </div>
                )}
            </div>

            <div className="ticket-board">
                {sortedGroups.map(({ key, tickets }) => (
                    <TicketColumn key={key} title={key} tickets={tickets} users={users} grouping={grouping} />
                ))}
            </div>
        </div>
    );
};

export default TicketBoard;
