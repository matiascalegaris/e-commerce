import React from "react";
import './directory.styles.scss'
import MenuItem from "../menu-item/menu-item.component";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { useSelector } from "react-redux";

const Directory = () => {
  const sections = useSelector(selectDirectorySections);
  return (
    <div className='directory-menu'>
        {sections.map(({id, ...otherParam}) => (
            <MenuItem key={id} {...otherParam} />
        ))}
    </div>
)};

export default Directory;