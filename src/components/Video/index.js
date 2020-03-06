import React from "react";
import { connect } from "react-redux";

function Video({ activeLesson, activeModule }) {
  return (
    <div>
      <h3>Modulo {activeModule.title}</h3>
      <h3>Aula {activeLesson.title}</h3>
    </div>
  );
}

export default connect(state => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson
}))(Video);
