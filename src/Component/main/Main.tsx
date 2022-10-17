import React from 'react';
import classes from './Main.module.css';
import classesContainer from '../../common/classes/Container.module.css'

export const Main = () => {
  return (
    <div className={classes.mainBlock}>
      <div className={classesContainer.container}>
        <div className={classes.welcomingRemarks}>
          <span>Hi There</span>
          <h3 className={classes.h3}> I'm Alexandr Tsuryn</h3>
          <p>I'm a developer with experience building SPAs using React/Redux/TypeScript/HTML&CSS/SCSS. I like to develop applications that bring real value to the end user. Now I am improving my skills in this area and expanding my knowledge with new technologies (Node.js). I spend my free time reading educational literature, as well as improving my English.</p>
        </div>
        <div className={classes.photo}></div>
      </div>

    </div>
  );
}
