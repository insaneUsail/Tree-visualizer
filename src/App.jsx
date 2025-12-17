import React, { useState } from 'react';
import './index.css'; // Import the CSS file above

// 1. Recursive Component
const TreeNode = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  // Check if this node actually has children
  const hasChildren = node.children && node.children.length > 0;

  return (
    <li>
      <div className="node-card">
        {node.name}
        
        {/* Only show toggle button if there are children */}
        {hasChildren && (
          <button 
            className="toggle-btn" 
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? '-' : '+'}
          </button>
        )}
      </div>

      {/* Render Children Recursively if Expanded */}
      {hasChildren && isExpanded && (
        <ul>
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

// 2. Main Tree Wrapper
const TreeChart = () => {
  // Sample Data matching your image
  const treeData = {
    name: "root",
    children: [
      {
        name: "Child 1",
        children: [
          { name: "Node 1"  },
          { name: "Node 2",
            children: [
             { name: "Node 1" ,
            children: [
             { name: "Node 1" }
        ] },
          { name: "Node 3" }
        ]},
          { name: "Node 3" }
        ]
      },
      {
        name: "Child 2", // This one matches your collapse example
        children: [
          { name: "Node 1" },
          { name: "Node 2" }
        ]
      },
      { name: "Node 1" },
      { 
        name: "Node 1",
        children: [
             { name: "Node 1"  ,
            children: [
             { name: "Node 1" ,
            children: [
             { name: "Node 1" },{ name: "Node 1" },
        ]  }
        ]  }
        ]
      },
      { name: "Node 1" },
      { name: "Node 2" ,
            children: [
             { name: "Node 1" }
        ]}
    ]
  };

  return (
    <div className="tree">
      <ul>
        <TreeNode node={treeData} />
      </ul>
    </div>
  );
};

export default TreeChart;