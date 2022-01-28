import React from 'react'
import styles from './Filter.module.scss'

const Filter = () => {
  return (
    <div className={styles.container}>
      <div>
        <input type="radio" id="ABV" name="drone" value="ABV"/>
         <label>ABV {`>`} 6%</label>
      </div>

      <div>
        <input type="radio" id="Classic" name="drone" value="Classic"/>
         <label >Classic Range</label>
      </div>

      <div>
        <input type="radio" id="Acidity" name="drone" value="Acidity"/>
         <label>Acidity</label>
      </div>
      
    </div>
  )
}

export default Filter
