import { FC } from 'react'

const githubURL = 'https://github.com/bkrmadtya/sorting-algorithm-visualizer'
const thesisURL = 'https://www.theseus.fi/handle/10024/507342'
const About: FC = () => {
  return (
    <div className='aboutPage'>
      <section>
        <h1 className='aboutPage__header'>About the project</h1>
        <p className='aboutPage__description'>
          This is project is part of the thesis project done for my Bachelor
          thesis in Helsinki Metropolia University of Applied Sciences. The
          thesis aims to visualize sorting process of different sorting
          algorithms and observe how visualization assists in understanding
          different ideas, in this case, sorting algorithms. This is project is
          part of the thesis project done for my Bachelor thesis in Helsinki
          Metropolia University of Applied Sciences. The thesis aims to
          visualize sorting process of different sorting algorithms and observe
          how visualization assists in understanding different ideas, in this
          case, sorting algorithms.
        </p>
        <table className='aboutPage__details'>
          <tr>
            <td>Tech stack</td>
            <td>
              <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>Redux</li>
                <li>React-Router</li>
                <li>SASS</li>
                <li>Vite</li>
                <li>Eslint</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Github link</td>
            <td>
              <a className='aboutPage__details-link' href={githubURL}>
                {githubURL}
              </a>
            </td>
          </tr>
          <tr>
            <td>Thesis link</td>
            <td>
              <a className='aboutPage__details-link' href={thesisURL}>
                {thesisURL}
              </a>
            </td>
          </tr>
        </table>
      </section>
      <footer className='aboutPage__footer'>@bkrmadtya 2021, 2022</footer>
    </div>
  )
}

export default About
