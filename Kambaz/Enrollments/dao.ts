import { v4 as uuidv4 } from "uuid";

export default function EnrollmentsDao(db) {
  function findAllEnrollments() {
    return db.enrollments;
  }
  function enrollUserInCourse(userId, courseId) {
    const { enrollments } = db;
    const existing = enrollments.find(
      (enrollment) => enrollment.user === userId && enrollment.course === courseId,
    );
    if (existing) return existing;
    const newEnrollment = { _id: uuidv4(), user: userId, course: courseId };
    enrollments.push(newEnrollment);
    return newEnrollment;
  }
  function unenrollUserFromCourse(userId, courseId) {
    const { enrollments } = db;
    db.enrollments = enrollments.filter(
      (enrollment) =>
        !(enrollment.user === userId && enrollment.course === courseId),
    );
  }
  return { findAllEnrollments, enrollUserInCourse, unenrollUserFromCourse };
}
