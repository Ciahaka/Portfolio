import React from 'react';
import classes from './Skills.module.css';
import classesContainer from '../../common/classes/Container.module.css'
import {SpecificSkill} from './SpecificSkill/SpecificSkill';




export const Skills = () => {
  return (
    <div className={classes.skillsBlock}>

      <div className={`${classes.skillsContainer} ${classesContainer.container}`}>
        <h2 className={classes.title}>Skills</h2>
        <div className={classes.skills}>
          <SpecificSkill
          icon={'string'} title={'JS'} description={'A FEW RECENT DESIGN...  '}
          />
          <SpecificSkill
            icon={'string'} title={'HTML'} description={'AND CODING PROJECTS. '}
          />
          <SpecificSkill
            icon={'string'} title={'React'} description={'WANT TO SEE MORE? EMAIL ME. '}
          />

        </div>
      </div>
    </div>

  );
}
