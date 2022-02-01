import React, {useState} from 'react'
import styles from './SearchBar.module.scss'



const SearchBar = (props) => {
  const {optimizeBeerSelection, determineBeerSelection, setDisplayFilter, displayFilter}=props


  const [colour, setColour] = useState("black");

  const toggleFilter = () =>{
    colour === "black"?setColour("green"):setColour("black"); 
    determineBeerSelection('none')
    setDisplayFilter(!displayFilter)
  }
  


  return (
    <div className={styles.content}>
      <input type="text" placeholder="FIND A BEER" onInput={e => optimizeBeerSelection(e.target.value)} /> 
      <div displayFilter={displayFilter? 'true':'false'} className={styles.filterButton}>
        <svg onClick={()=>{toggleFilter()}} 
         
        //SVG STUFF --ignore----------------------------------------------------
        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="filter" className="svg-inline--fa fa-filter fa-w-16" role="img" viewBox="0 0 512 512"><path fill={`${colour}`} d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"
        //SVG STUFF --ignore-----------------------------------------------------
        /></svg></div>
        
    </div>
  )
}

export default SearchBar
