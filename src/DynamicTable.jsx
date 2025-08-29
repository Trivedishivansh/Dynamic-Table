import React from "react";

const DynamicTable = ({ data, onDelete, onToggle }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const headers = Object.keys(data[0]).filter(
    (key) => key !== "id" // hide id column
  );

  return (
    <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header} style={{ padding: "8px", background: "#f1b754ff" }}>
              {header.toUpperCase()}
            </th>
          ))}
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr
            key={row.id}
            style={{
              textDecoration: row.completed ? "line-through" : "none",
              background: row.completed ? "#c5ededff" : "white",
            }}
          >
            {headers.map((header) => (
              <td key={header} style={{ padding: "8px", textAlign: "center" }}>
                {row[header]}
              </td>
            ))}
            <td style={{ textAlign: "center" }}>
              <button onClick={() => onToggle(row.id)}>
                {row.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => onDelete(row.id)}
                style={{ marginLeft: "10px", color: "red" }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;
