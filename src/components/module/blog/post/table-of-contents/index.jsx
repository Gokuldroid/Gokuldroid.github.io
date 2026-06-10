import React from "react"
import { useCollapse } from "react-collapsed"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

const TableOfContents = ({ tableOfContents }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  if (tableOfContents == null || tableOfContents.length < 200) {
    return <></>
  }
  return (
    <div className="toc mb-10 rounded-xl border border-border bg-surface-2 p-5">
      <button
        type="button"
        className="flex w-full items-center gap-2 text-left text-sm font-semibold uppercase tracking-wide text-accent"
        {...getToggleProps()}
      >
        {isExpanded ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
        Table of contents
      </button>
      <div {...getCollapseProps()}>
        <div
          className="toc-body mt-3 text-[15px] leading-relaxed text-muted"
          dangerouslySetInnerHTML={{ __html: tableOfContents }}
        />
      </div>
    </div>
  )
}

export default TableOfContents
