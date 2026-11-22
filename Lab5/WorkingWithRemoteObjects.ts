const assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10",
  completed: false,
  score: 0,
};

// TODO (On your own §5.2.3.4, graded): a module object with string properties
// id, name, description, and course

export default function WorkingWithRemoteObjects(app) {
  const getAssignment = (req, res) => {
    res.json(assignment);
  };
  const getAssignmentTitle = (req, res) => {
    res.json(assignment.title);
  };
  const setAssignmentTitle = (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  };
  // TODO (On your own §5.2.3.4): routes that update the assignment's score and
  // completed properties
  // TODO (On your own §5.2.3.4, graded): GET /lab5/module (the object) and
  // GET /lab5/module/name (its name), plus routes that update the module's name
  // and description
  app.get("/lab5/assignment/title/:newTitle", setAssignmentTitle);
  app.get("/lab5/assignment/title", getAssignmentTitle);
  app.get("/lab5/assignment", getAssignment);
}
