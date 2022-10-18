import React from 'react';
import classes from './SpecificSkill.module.css'

type SpecificSkillType = {
  icon:string
  title: string
  description:string
}

export const SpecificSkill = (props:SpecificSkillType) => {
  return (
    <div className={classes.skill}>
<div className={classes.icon}></div>
      <h3>{props.title}</h3>
      <span className={classes.description}>{props.description}</span>
    </div>
  );
}