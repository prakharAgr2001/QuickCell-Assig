import React from 'react';
import './KabanColumn.css';

const KanbanColumn = ({ title, tickets, grouping, users }) => {
  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 1:
        return { label: "Low Priority", icon: "Img - Low Priority.svg" };  // Low priority icon
      case 2:
        return { label: "Medium Priority", icon: "Img - Medium Priority.svg" };  // Medium priority icon
      case 3:
        return { label: "High Priority", icon: "Img - High Priority.svg" };  // High priority icon
      case 4:
        return { label: "Urgent", icon: "SVG - Urgent Priority colour.svg"};   // Urgent icon
      default:
        return { label: "No Priority", icon: "No-priority.svg" };  // No priority icon
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'Todo':
        return { label: "Todo", icon: "To-do.svg" };  // To Do icon
      case 'Backlog':
        return { label: "Backlog", icon: "Backlog.svg" };  // Backlog icon
      case 'In progress':
        return { label: "In progress", icon: "in-Progress.svg" };  // In Progress icon
      default:
        return { label: "Unknown Status", icon: "No-status.svg" };  // Default unknown status icon
    }
  };

  const getUserName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Unknown User";  // Return "Unknown User" if user not found
  };

  return (
    <div>
      <h2 className="kanban-column-title">
        {grouping === 'priority' ? (
          <>
            <span>{getPriorityLabel(Number(title)).label}</span>
            <span>  </span>
            <img
              src={`/Assets/icons_FEtask/${getPriorityLabel(Number(title)).icon}`} // Updated to point to the public folder
              style={{ width: '20px', height: '20px' }} // Adjust size if needed
            />
          </>
        ) : grouping === 'status' ? (
          <>
            <span>{getStatusLabel(title).label}</span>
            <span>  </span>
            <img
              src={`/Assets/icons_FEtask/${getStatusLabel(title).icon}`} // Updated to point to the public folder
              style={{ width: '20px', height: '20px' }} // Adjust size if needed
            />
          </>
        ) : grouping === 'userId' ? getUserName(title) : title}
        <span style={{ marginLeft: '10px', fontSize: '14px', color: '#888' }}>
          {tickets.length}
        </span>
      </h2>
      

      {tickets.map((ticket) => (
        <div key={ticket.id} className="kanban-card">
          {/* Ticket ID */}
          <div className="kanban-card-id">ID: {ticket.id}</div>
          <div className="kanban-card-circle-image">
            {/* Placeholder image, replace with an actual URL if you have one */}
            <img
              src="https://img.wattpad.com/8f19b412f2223afe4288ed0904120a48b7a38ce1/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5650722d38464e2d744a515349673d3d2d3234323931353831302e313434336539633161633764383437652e6a7067?s=fit&w=720&h=720"
              alt="placeholder"
            />
          </div>

          {/* Ticket Title */}
          <div className="kanban-card-title">{ticket.title}</div>

          {/* Ticket Type */}
          <div className="kanban-card-type">{ticket.tag[0] || "Unknown"}</div>
        </div>
      ))}
    </div>
  );
};

export default KanbanColumn;
