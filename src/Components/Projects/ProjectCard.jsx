import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {

const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={styles.container}>
      <img src={imageSrc} alt={title} />
      <h3 className={styles.title}> {title} </h3>
      <p className={styles.description}> {description} </p>
      <button className={styles.button} onCLick={() => setIsExpanded (!isExpanded)}>
      {isExpanded ? "Show less" : "Show more"} 
         </button>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    demo: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired,
};
