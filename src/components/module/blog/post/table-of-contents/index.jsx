import React from "react";
import './styles.scss';
import useCollapse from 'react-collapsed'
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const TableOfContents = ({ tableOfContents }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  if(tableOfContents == null || tableOfContents.length < 200) {
    return <></>;
  } else {
    return (
      <div className="table-of-contents">
        <p className="table-of-contents__heading" {...getToggleProps()}>{isExpanded ? <FaArrowUp className="arrow"/> : <FaArrowDown className="arrow"/> } Table of contents</p>
        <div dangerouslySetInnerHTML={{ __html: tableOfContents }} {...getCollapseProps()} />
      </div>
    )
  }
}

export default TableOfContents;