import React from 'react'

function AddWord () {
  return (

    <>
      <h2>Add word</h2><br />

      <form>
        <fieldset>
          <legend>Pizza Story - Please add some word</legend>
          <label>
            <span>Noun</span>
            <input type="text" name="noun" value="" />
          </label><br />

          <label>
            <span>Adjective</span>
            <input type="text" name="adjective" value="" />
          </label><br />

          <label>
            <span>Nationality</span>
            <input type="text" name="nationality" value="" />
          </label><br />

          <label>
            <span>Plura noun</span>
            <input type="text" name="plural-noun" value="" />
          </label><br />

          <label>
            <span>Person</span>
            <input type="text" name="person" value="" />
          </label><br />

          <label>
            <span>Shapes</span>
            <input type="text" name="shapes" value="" />
          </label><br />

          <label>
            <span>Food</span>
            <input type="text" name="food" value="" />
          </label><br />

          <label>
            <span>Number</span>
            <input type="text" name="number" value="" />
          </label><br />

          <input type="submit" value="submit" />
        </fieldset>
      </form>
    </>
  )
}

export default AddWord
