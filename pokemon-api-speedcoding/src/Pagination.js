import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className="text-center pagination">
      <button className="btn btn-primary" disabled={gotoPrevPage ? false : true} onClick={gotoPrevPage}>Prev</button>
      <button className="btn btn-primary"  disabled={gotoNextPage ? false : true} onClick={gotoNextPage}>Next</button>
    </div>
  )
}
