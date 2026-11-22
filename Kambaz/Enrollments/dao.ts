import { v4 as uuidv4 } from "uuid";

export default function EnrollmentsDao(db) {
  function enrollUserInCourse(userId, courseId) {
    const { enrollments } = db;
    enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
  }
  // TODO (On your own §5.4.8): unenroll, plus Enrollments/routes.ts so the
  // Dashboard's Enroll / Unenroll buttons persist on the server
  return { enrollUserInCourse };
}
