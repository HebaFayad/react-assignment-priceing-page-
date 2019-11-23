import React, { Component } from "react";

export default class New extends Component {
  render() {
    return (
       
       
      <div className="card">
        <div>
          <h2>{this.props.title}</h2>
          
        </div>
        <article>
          <h3>{this.props.describe}</h3>
          <h4>{this.props.access}</h4>
          <ul>
              <li>This has been the industry's standard dummy text ever since the 1500s</li>
              <li>Neque porro quisquam est qui dolorem ipsum</li>
              <li>deserunt mollit anim id est laborum.</li>
              <li>Duis aute irure dolor in reprehenderit</li>
          </ul>
          <a>{this.props.btn}</a>
        </article>
      </div>
    );
  }
}
