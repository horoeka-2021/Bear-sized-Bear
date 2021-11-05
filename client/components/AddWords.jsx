import React, { useState } from 'react'
import { useHistory } from 'react-router'

function AddWords ({ setWords, words }) {
  const history = useHistory()

  const [form, setForm] = useState({
    noun: '',
    adjective: '',
    nationality: '',
    plural_noun: '',
    person: '',
    shapes: '',
    food: '',
    number: ''
  })

  function handleAdd (event) {
    event.preventDefault()

    // const newForm = {
    //   ...form
    // }
    // console.log(newForm)

    // add a new element the existing array
    // const newWords = [...words, newForm]

    // console.log(newWords)

    // set the state
    setWords(form)
    setForm({
      noun: '',
      adjective: '',
      nationality: '',
      plural_noun: '',
      person: '',
      shapes: '',
      food: '',
      number: ''
    })

    history.push('/new-story')
  }

  function handleForm (event) {
    const value = event.target.value
    const name = event.target.name

    setForm({
      ...form,
      [name]: value
    })
    // console.log(value, name)
  }

  return (

    <>
      <h2>Add words</h2><br />

      <form>
        <fieldset>
          <legend>Pizza Story - Please add some words</legend>
          <label>
            <span>Noun</span>
            <input type="text" name="noun" value={form.noun} onChange={handleForm}/>
          </label><br />

          <label>
            <span>Adjective</span>
            <input name="adjective" value={form.adjective} onChange={handleForm}/>
          </label><br />

          <label>
            <span>Nationality</span>
            <input name="nationality" value={form.nationality} onChange={handleForm} />
          </label><br />

          <label>
            <span>Plural noun</span>
            <input name="plural_noun" value={form.plural_noun} onChange={handleForm} />
          </label><br />

          <label>
            <span>Person</span>
            <input name="person" value={form.person} onChange={handleForm} />
          </label><br />

          <label>
            <span>Shapes</span>
            <input name="shapes" value={form.shapes} onChange={handleForm}/>
          </label><br />

          <label>
            <span>Food</span>
            <input name="food" value={form.food} onChange={handleForm}/>
          </label><br />

          <label>
            <span>Number</span>
            <input type="text" name="number" value={form.number} onChange={handleForm} />
          </label><br />

          <button onClick={handleAdd}>Submit</button>

        </fieldset>
      </form>
    </>
  )
}

export default AddWords
