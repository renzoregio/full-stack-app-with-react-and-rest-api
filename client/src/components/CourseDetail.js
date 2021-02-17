import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context";

export default function CourseDetail(props) {
  const [course, setCourse] = useState({});
  const { data } = useContext(Context);

  useEffect(async () => {
    const response = await data.getCourse(props.location.state.courseId);
    setCourse(response.course);
  }, []);

  return (
    <React.Fragment>
      <div className="actions--bar">
        <div className="bounds">
          <div className="grid-100">
            <span>
              <a className="button" href="#">
                Update Course
              </a>
              <a className="button" href="#">
                Delete Course
              </a>
            </span>
            <a className="button button-secondary" href="/">
              Return to List
            </a>
          </div>
        </div>
      </div>
      <div className="bounds course--detail">
        <div className="grid-66">
          <div className="course--header">
            <h4 className="course--label">Course</h4>
            <h3 className="course--title">{course.title}</h3>
            <p>By AUTHOR </p>
          </div>
          <div className="course--description">
            <p>{course.description}</p>
          </div>
        </div>
      </div>
      <div className="grid-25 grid-right">
        <div className="course--stats">
          <ul className="course--stats--list">
            <li className="course--stats--list--item">
              <h4>Estimated Time</h4>
              <h3>{course.estimatedTime}</h3>
            </li>
            <li className="course--stats--list--item">
              <h4>Materials Needed</h4>
              <ul>
                <li>{course.materialsNeeded}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
