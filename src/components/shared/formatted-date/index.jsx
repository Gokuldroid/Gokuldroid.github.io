import React from "react"

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

// Deterministic, locale- and timezone-independent formatting (UTC getters) so
// the server-rendered string always matches the client and React doesn't throw
// a hydration mismatch.
const FormattedDate = ({ date }) => {
  const d = new Date(date)
  if (isNaN(d.getTime())) return null
  return (
    <>
      {MONTHS[d.getUTCMonth()]} {d.getUTCDate()}, {d.getUTCFullYear()}
    </>
  )
}

export default FormattedDate
