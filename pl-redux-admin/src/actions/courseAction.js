function createCourse(course) {
  return {
    type: 'CREATE_COURSE',
    course: course
  };
}

export default createCourse;