import React from 'react';
import './TicketColumn.css';

const TicketColumn = ({ title, tickets, grouping, users }) => {
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
        return { label: "In progress", icon: "in-progress.svg" };  // In Progress icon
      default:
        return { label: "Done Status", icon: "Done.svg" };  // Default unknown status icon
    }
  };


  const getUserName = (userId) => {
    const user = users.find((user) => user.id === userId);
    const initials = user ? user.name.slice(0, 2).toUpperCase() : "UU";

    // Generate a random HSL color with moderate lightness and saturation
    const randomHSL = () => {
        const hue = Math.floor(Math.random() * 360); // Random hue (0-360)
        const saturation = Math.floor(Math.random() * 31) + 40; // Saturation (40-70%)
        const lightness = Math.floor(Math.random() * 21) + 40; // Lightness (40-60%)
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    };

    const initialsColor = randomHSL();

    return (
        <div className="user-info" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
                className="user-circle"
                style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f0f0f0', // Neutral background color
                    color: initialsColor,
                    fontWeight: 'bold',
                    fontSize: '14px',
                }}
            >
                <span>{initials}</span>
            </div>
            <span style={{ fontSize: '14px', color: '#333' }}>{user ? user.name : "Unknown User"}</span>
        </div>
    );
};





  return (
    <div>
      <div className='kanban-column-header' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 className="kanban-column-title" style={{ display: 'flex', alignItems: 'center' }}>
          {grouping === 'priority' ? (
            <>
              <span>{getPriorityLabel(Number(title)).label}</span>
              <span>  </span>
              <img
                src={`/Assets/icons_FEtask/${getPriorityLabel(Number(title)).icon}`} // Updated to point to the public folder
                style={{ width: '20px', height: '20px',margin: '5px' }} // Adjust size if needed
              />
            </>
          ) : grouping === 'status' ? (
            <>
              <span>{getStatusLabel(title).label}</span>
              <span>  </span>
              <img
                src={`/Assets/icons_FEtask/${getStatusLabel(title).icon}`} // Updated to point to the public folder
                style={{ width: '20px', height: '20px',margin: '5px' }} // Adjust size if needed
              />
            </>
          ) : grouping === 'userId' ? getUserName(title) : title}
          <span style={{ marginLeft: '10px', fontSize: '14px', color: '#888' }}>
            {tickets.length}
          </span>
        </h2>

        <div className="ic" style={{ display: 'flex', gap: '0px' }}>
          <span style={{ fontSize: '14px', color: '#888' }}>
            <img
              src={`/Assets/icons_FEtask/add.svg`} // Updated to point to the public folder
              style={{ width: '15px', height: '15px' }} // Adjust size if needed
            />
          </span>
          <span style={{ fontSize: '14px', color: '#888' }}>
            <img
              src={`/Assets/icons_FEtask/3 dot menu.svg`} // Updated to point to the public folder
              style={{ width: '15px', height: '15px' }} // Adjust size if needed
            />
          </span>
        </div>
      </div>

      {tickets.map((ticket) => (
        <div key={ticket.id} className="kanban-card">
          {/* Ticket ID */}
          <div className="kanban-card-id">{ticket.id}</div>
          <div className="kanban-card-circle-image">
            {/* Placeholder image, replace with an actual URL if you have one */}
            <img
              src="https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-701751695033488zipyc2pvo5.png?v=2024110905"
              alt="placeholder"
            />
          </div>

          {/* Ticket Title */}
          <div className="kanban-card-title">
          { grouping!='status'?(
          <img
                src={`/Assets/icons_FEtask/${getStatusLabel(ticket.status).icon}`} // Updated to point to the public folder
                style={{ width: '15px', height: '15px' }} // Adjust size if needed
              />):<span></span>
          }
           <span style={{ marginLeft: '10px'}}> {ticket.title}</span>
          </div>

          {/* Ticket Type */}
          <div className="kanban-card-type">
          { console.log(grouping)}
            {grouping === 'status' ? (
          <img
                src={`/Assets/icons_FEtask/${getPriorityLabel(Number(ticket.priority)).icon}`} // Updated to point to the public folder
                style={{ width: '15px', height: '15px',marginTop: '10px' }} // Adjust size if needed
              />
          ):(<span></span>)
          }

         
          <div style={{
    display: 'flex',
    alignItems: 'center',
    padding: '4px 8px',
    backgroundColor: '#f5f5f5',
    borderRadius: '4px',
    border: '1px solid #ddd',
    maxWidth: 'fit-content'
}}>
    <span style={{
        width: '8px',
        height: '8px',
        backgroundColor: '#888',
        borderRadius: '50%',
        marginRight: '10px'
    }}></span>
    <span style={{ fontSize: '14px', color: '#888' }}>
        {ticket.tag[0] || "Unknown"}
    </span>
</div>

        </div>
        </div>
      ))}
    </div>
  );
};

export default TicketColumn;
