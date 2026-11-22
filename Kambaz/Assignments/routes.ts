import AssignmentsDao from "./dao";

export default function AssignmentRoutes(app, db) {
  const dao = AssignmentsDao(db);
  const findAssignmentsForCourse = (req, res) => {
    const { courseId } = req.params;
    res.json(dao.findAssignmentsForCourse(courseId));
  };
  const createAssignmentForCourse = (req, res) => {
    const { courseId } = req.params;
    const assignment = { ...req.body, course: courseId };
    const newAssignment = dao.createAssignment(assignment);
    res.json(newAssignment);
  };
  const updateAssignment = (req, res) => {
    const { assignmentId } = req.params;
    const status = dao.updateAssignment(assignmentId, req.body);
    res.json(status);
  };
  const deleteAssignment = (req, res) => {
    const { assignmentId } = req.params;
    dao.deleteAssignment(assignmentId);
    res.sendStatus(200);
  };
  app.get("/api/courses/:courseId/assignments", findAssignmentsForCourse);
  app.post("/api/courses/:courseId/assignments", createAssignmentForCourse);
  app.put("/api/assignments/:assignmentId", updateAssignment);
  app.delete("/api/assignments/:assignmentId", deleteAssignment);
}
