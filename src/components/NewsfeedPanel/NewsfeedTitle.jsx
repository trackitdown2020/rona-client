import React from 'react';
import { useStyles } from './styles';

const NewsfeedTitle = ({ title, icon }) => {
  const styles = useStyles();

  return (
    <div className={styles.newsfeedTitleContainer}>
      {title && title}
      <div>{icon && icon}</div>
    </div>
  );
};

export default NewsfeedTitle;
