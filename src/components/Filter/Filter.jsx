import React from 'react'
import styles from './Filter.module.scss'

const Filter = (props) => {

  const {determineBeerSelection}=props;

  

  return (
    <div className={styles.container}>
      <div>
        <input type="radio" id="ABV" name="drone" value="ABV" onInput={()=>{determineBeerSelection('abv')}}/>
         <label>ABV {`>`} 6%</label>
      </div>
      <div>
        <input type="radio" id="Classic" name="drone" value="Classic" onInput={()=>{determineBeerSelection('classic')}}/>
         <label >Classic Range</label>
      </div>
      <div>
        <input type="radio" id="Acidity" name="drone" value="Acidity" onInput={()=>{determineBeerSelection('acidity')}}/>
         <label>Acidity</label>
      </div> 
    </div>
  )
}

export default Filter
