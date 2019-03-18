import React, { Component } from 'react'
import { Engine, Render, World, Bodies } from 'matter-js';

class Game extends Component {
  state = {
    engine: null,
    render: null,
    world: null,
    bodies: null,
    gameBox: null
  }
  componentDidMount() {
    var engine = Engine.create();
    const render = Render.create({
        element: document.querySelector('.gamebox'), 
        engine, 
        options: {
          wireframes: false
        }
    });
    this.setState({render, engine})
    const gameObjs = [
      Bodies.rectangle(200, 200, 80, 80),
      Bodies.circle(450, 200, 100),
      Bodies.rectangle(430, 50, 80, 80),
      Bodies.rectangle(400, 610, 810, 60, { isStatic: true })
    ]
    World.add(engine.world, gameObjs)
    Engine.run(engine);
    Render.run(render);
  }
  
  render () {
    return (
      <div>
        <dib className="gamebox"></dib>
      </div>
    )
  }
}

export default Game;