import React from 'react'

function Index ({veggies}) {
  return (
    <div>
      <ul>
    {veggies.map((veggie, i) => {
            return (
                <li key={i}>
                    <a href={`/veggies/${i}`}>{veggie.name}</a>is {veggie.color} <br/>
                    and 
                    {veggie.readyToEat ? `It is ready to eat` : `It is not ready to eat`}
                   
                </li>
            );
        })}
    </ul>
    
    </div>
  )
}

module.exports = Index;