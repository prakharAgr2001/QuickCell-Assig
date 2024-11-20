import React from 'react';
import './KabanColumn.css';

const KanbanColumn = ({ title, tickets }) => {
  return (
    <div className="kanban-column">
    <h2 className="kanban-column-title">{title}</h2>
    {tickets.map((ticket) => (
      <div key={ticket.id} className="kanban-card">
        {/* Ticket ID */}
        <div className="kanban-card-id">ID: {ticket.id}</div>
        
        {/* Ticket Title */}
        <div className="kanban-card-title">{ticket.title}</div>
        
        {/* Ticket Type */}
        <div className="kanban-card-type">{ticket.tag[0] || "Unknown"}</div>
        
        {/* Optional Priority Badge */}
        {ticket.priority !== undefined && (
          <div className="kanban-card-badge">
            {["No Priority", "Low", "Medium", "High", "Urgent"][ticket.priority]}
          </div>
        )}
      </div>
    ))}
  </div>
  );
};

export default KanbanColumn;
