import React from 'react';
import KanbanColumn from './KanbanColumn';
import './KabanBoard.css'
import { groupTickets, sortTickets } from '../utils/ticketUtils';

const KanbanBoard = ({ tickets, grouping, sorting, onGroupingChange, onSortingChange,users }) => {
    if (!Array.isArray(tickets)) {
        return <div>Loading tickets...</div>;
      }
    
  const groupedTickets = groupTickets(tickets, grouping);
  const sortedGroups = Object.entries(groupedTickets).map(([key, group]) => ({
    key,
    tickets: sortTickets(group, sorting),
  }));

  return (
    <div>
      <div>
        <label>Group By:</label>
        <select value={grouping} onChange={(e) => onGroupingChange(e.target.value)}>
          <option value="status">Status</option>
          <option value="userId">User</option>
          <option value="priority">Priority</option>
        </select>
        <label>Sort By:</label>
        <select value={sorting} onChange={(e) => onSortingChange(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
      <div className="kanban-board">
        {sortedGroups.map(({ key, tickets }) => (
          <KanbanColumn key={key} title={key} tickets={tickets} users={users} />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
  