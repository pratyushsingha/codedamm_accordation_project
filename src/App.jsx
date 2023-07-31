import React, { useState } from 'react'
import data from './data'
import Question from './Question'

function App() {
  return (
    <main>
      <div className="container">
        <h3>FAQ</h3>
        <section className="info">
          {/* map over data imported at the top and use SingleQuestion component */}
          {data.map(question => {
            // console.log(question.title)
            return <Question key={question.id} title={question.title} info={question.info} />
          })}
        </section>
      </div>
    </main>
  )
}

export default App
