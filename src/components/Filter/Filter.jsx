import React from 'react'
import styles from './Filter.module.scss'

const Filter = (props) => {

  const {setCurrentFilter}=props;

  

  return (
    <div className={styles.container}>
      <div>
        <input type="radio" id="ABV" name="drone" value="ABV" onInput={()=>{setCurrentFilter('abv')}}/>
         <label>ABV {`>`} 6%</label>
      </div>

      <div>
        <input type="radio" id="Classic" name="drone" value="Classic" onInput={()=>{setCurrentFilter('classic')}}/>
         <label >Classic Range</label>
      </div>

      <div>
        <input type="radio" id="Acidity" name="drone" value="Acidity" onInput={()=>{setCurrentFilter('acidity')}}/>
         <label>Acidity</label>
      </div>
      
    </div>
  )
}

export default Filter
