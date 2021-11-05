import React, { useState } from 'react'
import { useHistory } from 'react-router'

function AddWords ({ setWords, words }) {
  const history = useHistory()

  const [form, setForm] = useState({
    adjective: 'big',
    nationality: 'New Zealand',
    person: '[placeholder]',
    'plural noun': '[placeholder]',
    noun: '[placeholder]',
    shapes: 'rhombus',
    food: 'steak',
    number: '1',
    verb: 'run',
    place: 'Auckland',
    vegetable: 'banana',
    exclamation: 'WAT',
    color: 'red',
    'verb ending in -ing': 'running',
    'verb past tense': 'typed',
    adverb: 'quickly',
    celebrity: 'Chris Parker',
    'silly word': 'goose',
    "friend's name": 'Ahmad',
    animal: 'dog'
  })

  function handleAdd (event) {
    event.preventDefault()

    setWords(form)
    setForm({
      adjective: '',
      nationality: '',
      person: '',
      'plural noun': '',
      noun: '',
      shapes: '',
      food: '',
      number: '',
      verb: '',
      place: '',
      vegetable: '',
      exclamation: '',
      color: '',
      'verb ending in -ing': '',
      'verb past tense': '',
      adverb: '',
      celebrity: '',
      'silly word': '',
      "friend's name": '',
      animal: ''
    })

    history.push('/story/Pizza')
  }

  function handleForm (event) {
    const value = event.target.value
    const name = event.target.name

    setForm({
      ...form,
      [name]: value
    })
  }

  return (

    <>
      <h2>Add words</h2><br />

      <form>
        <fieldset>
          <legend>Pizza Story - Please add some words</legend>
          <label>
            <span>Noun</span>
            <input name="noun" value={form.noun} onChange={handleForm}/>
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
            <input name="plural noun" value={form['plural noun']} onChange={handleForm} />
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
            <input name="number" value={form.number} onChange={handleForm} />
          </label><br />

          <label>
            <span>Verb</span>
            <input name="verb" value={form.verb} onChange={handleForm}/>
          </label><br />

          <label>
            <span>Place</span>
            <input name="place" value={form.place} onChange={handleForm}/>
          </label><br />

          <label>
            <span>Vegetable</span>
            <input name="vegetable" value={form.vegetable} onChange={handleForm} />
          </label><br />

          <label>
            <span>Exclamation</span>
            <input name="exclamation" value={form.exclamation} onChange={handleForm} />
          </label><br />

          <label>
            <span>Color</span>
            <input name="color" value={form.color} onChange={handleForm} />
          </label><br />

          <label>
            <span>Verb Ending in -ing</span>
            <input name="verb ending in -ing" value={form['verb ending in -ing']} onChange={handleForm}/>
          </label><br />

          <label>
            <span>Verb past tense</span>
            <input name="verb past tense" value={form['verb past tense']} onChange={handleForm}/>
          </label><br />

          <label>
            <span>adverb</span>
            <input name="adverb" value={form.adverb} onChange={handleForm} />
          </label><br />

          <label>
            <span>celebrity</span>
            <input name="celebrity" value={form.celebrity} onChange={handleForm}/>
          </label><br />

          <label>
            <span>Silly Word</span>
            <input name="silly word" value={form['silly word']} onChange={handleForm}/>
          </label><br />

          <label>
            <span>Friend's Name</span>
            <input name="friend's name" value={form["friend's name"]} onChange={handleForm} />
          </label><br />

          <label>
            <span>Animal</span>
            <input name="animal" value={form.animal} onChange={handleForm} />
          </label><br />

          <button onClick={handleAdd}>Submit</button>

        </fieldset>
      </form>
    </>
  )
}

export default AddWords
