const AGENTS_DATA = {
  "orchestrators": [],
  "agents": [
    {
      "id": "project-manager",
      "name": "Project Manager",
      "group": "planning",
      "description": "Breaks features into branches, writes user stories, and maintains scope.",
      "capabilities": ["user stories", "branch planning", "scope management", "task prioritization"],
      "mdFile": "project-manager.md",
      "status": "active"
    },
    {
      "id": "architect",
      "name": "Architect",
      "group": "planning",
      "description": "Evaluates architecture decisions, data models, dependencies, and security.",
      "capabilities": ["system design", "data modeling", "dependency review", "security review"],
      "mdFile": "architect.md",
      "status": "active"
    },
    {
      "id": "senior-engineer",
      "name": "Senior Engineer",
      "group": "execution",
      "description": "Writes production-quality Angular/TypeScript code with tests and clean commits.",
      "capabilities": ["Angular development", "TypeScript", "unit testing", "Firebase integration"],
      "mdFile": "senior-engineer.md",
      "status": "active"
    },
    {
      "id": "ux-designer",
      "name": "UX Designer",
      "group": "execution",
      "description": "Designs accessible, mobile-first UI with clear component and interaction patterns.",
      "capabilities": ["UI design", "accessibility", "component guidelines", "responsive design"],
      "mdFile": "ux-designer.md",
      "status": "active"
    }
  ]
};
