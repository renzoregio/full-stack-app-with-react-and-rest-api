import { BrowserRouter, Route, Switch } from "react-router-dom";
import Courses from "./components/Courses";
import Header from "./components/Header";
import CourseDetail from "./components/CourseDetail";
import UserSignIn from "./components/UserSignIn";
import UserSignUp from "./components/UserSignUp";
export default () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Courses} />
      <Route exact path="/courses/:id" component={CourseDetail} />
      <Route exact path="/sign-in" component={UserSignIn} />
      <Route exact path="/sign-up" component={UserSignUp} />
    </BrowserRouter>
  );
};
