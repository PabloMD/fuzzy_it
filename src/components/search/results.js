import React from 'react'

const Results = ({results}) => {

  if(!results.length){
    return(
      <h2>Nothing found</h2>
    )
  }

  return(
    <React.Fragment>
      <h2>Found {results.length}</h2>
      <ul>
        {results.map(({ item: { profile: { name }}, score, matches }, idx) => <li key={idx}>{name}, score: {score}, matches: {matches.length}</li>) }
      </ul>
    </React.Fragment>
  )
}

export default Results