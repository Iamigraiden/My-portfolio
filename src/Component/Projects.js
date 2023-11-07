import React from 'react'
import Navbar from './Navbar'

export default function Projects() {
  return (
    <>
      <Navbar title="Projects"  link="/projects"/>
      <div class="card text-bg-dark">
  <img src="https://images.pexels.com/photos/4805/hiking-path-way.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="card-img" alt="..."/>
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>
    </>
  )
}
