import React from 'react'
import styles from './Filter.module.scss'

const Filter = () => {
  return (
    <div className={styles.container}>
      <div>
        <input type="radio" id="ABV" name="drone" value="ABV"
         checked/>
         <label for="ABV">ABV {`>`} 6%</label>
      </div>

      <div>
        <input type="radio" id="Classic" name="drone" value="Classic"
         checked/>
         <label for="Classic">Classic Range</label>
      </div>

      <div>
        <input type="radio" id="Acidity" name="drone" value="Acidity"
         checked/>
         <label for="Acidity">Acidity</label>
      </div>
      
    </div>
  )
}

export default Filter
