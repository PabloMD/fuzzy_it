import React, {useEffect, useState} from 'react'
import Fuse from "fuse.js";
import Results from "./results";

const Search = ({ data }) => {
  const [input, setInput] = useState('')
  const [results, setResults] = useState([])
  const options = {
    // isCaseSensitive: false,
    includeScore: true,
    // shouldSort: true,
    includeMatches: true,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    ignoreLocation: true,
    ignoreFieldNorm: true,
    // fieldNormWeight: 1,
    keys: [
      "profile.name",
      "favouriteWords"
    ]
  }
  const fuse = new Fuse(data, options);

  useEffect(() => {
    setResults(fuse.search(input))
  }, [input])

  return (
    <React.Fragment>
      <h1>Search for something</h1>
      <form>
        <div>
          <input value={input} onChange={e => setInput(e.target.value)} placeholder='Start typing...' />
        </div>
      </form>
      <Results results={results} />

    </React.Fragment>
  )
}

export default Search