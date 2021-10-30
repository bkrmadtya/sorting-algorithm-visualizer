import React from 'react'

const About: React.FC = () => {
  const url = 'https://github.com/bkrmadtya/sorting-algorithm-visualizer';
  return (
    <div className="aboutPage">
      <div>
        <section>
          <h1 className="header">About the project</h1>
          <p className="description">
            This is project is part of the thesis project done for my Bachelor thesis in Helsinki Metropolia University of Applied Sciences.
            The thesis aims to visualize sorting process of different sorting algorithms and observe how visualization assists in understanding different ideas,
            in this case, sorting algorithms.
            This is project is part of the thesis project done for my Bachelor thesis in Helsinki Metropolia University of Applied Sciences.
            The thesis aims to visualize sorting process of different sorting algorithms and observe how visualization assists in understanding different ideas,
            in this case, sorting algorithms.
          </p>
          <table className="details-table">
            <tr>
              <td>Tech stack</td>
              <td>
                <ul>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Redux</li>
                  <li>React-Router</li>
                  <li>SASS</li>
                  <li>Webpack</li>
                  <li>Babel</li>
                  <li>Eslint</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Github link</td>
              <td>
                <a className="link" href={url}>{url}</a>
              </td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  )
}

export default About
