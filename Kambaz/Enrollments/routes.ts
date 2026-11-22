import EnrollmentsDao from "./dao";

export default function EnrollmentRoutes(app, db) {
  const dao = EnrollmentsDao(db);
  // "current" stands for the signed-in user, the same as the courses routes
  const resolveUserId = (req, res) => {
    const { userId } = req.params;
    if (userId !== "current") return userId;
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return undefined;
    }
    return currentUser._id;
  };
  const findAllEnrollments = (req, res) => {
    res.json(dao.findAllEnrollments());
  };
  const enrollUserInCourse = (req, res) => {
    const userId = resolveUserId(req, res);
    if (!userId) return;
    const { courseId } = req.params;
    res.json(dao.enrollUserInCourse(userId, courseId));
  };
  const unenrollUserFromCourse = (req, res) => {
    const userId = resolveUserId(req, res);
    if (!userId) return;
    const { courseId } = req.params;
    dao.unenrollUserFromCourse(userId, courseId);
    res.sendStatus(200);
  };
  app.get("/api/enrollments", findAllEnrollments);
  app.post("/api/users/:userId/courses/:courseId", enrollUserInCourse);
  app.delete("/api/users/:userId/courses/:courseId", unenrollUserFromCourse);
}
