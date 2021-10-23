import React from 'react'

const Algorithm: React.FC = () => {
  return (
    <>
      <p>
        Sorting is process of arranging set of data in sequenced increasing or descending order based on
        common properties among the data items. The properties that could be name, price, height, weight,
        length, efficiency, etc. The primary purpose of sorting any data set is to increase the time efficiency
        of searching and retrieving the required item from it. Sorting is common in the things we interact or
        use in our daily life, yet it is often unno-ticed. Language Dictionary, Telephone directories, point
        table in any sport, posts in so-cial medias, waste sorting, etc. are few examples of sorting in action
        in daily life. Sorting used in these mentioned things helps us retrieve details like word in the dictionary,
        tele-phone number by the name, point of our favorite team, recycling, etc. faster and easier.
      </p>
      <br />
      <p>
        As describe in the section above describing details about Algorithm,
        it is desirable to use an algorithm to perform task for efficiency,
        consistency, and quality of result. Similar is true for sorting, hence,
        there are algorithms for sorting which are referred to as Sorting Algorithms.
        There are numerous sorting algorithms, each are implemented with different approach and logic.
        They have varying efficiency and are better suited for cases with different data distribution.
        They can be classified into multiple categories based on sort-ing techniques,
        few of the techniques are listed below:
      </p>
      <br />
      <ol style={{ paddingLeft: "2rem" }}>
        <li>
          <strong>Comparison/Non-comparison-based sorting: </strong>
          A sorting is comparison-based sorting if the elements are compared with each other to find the sorted array otherwise,
          it is non-comparison based sorting.
        </li>
        <li>
          <strong>In-place/Out-place sorting: </strong>
          A sorting is in-place sorting if it does not use extra memory to sort the array otherwise,
          it is out-place sorting.
        </li>
        <li>
          <strong>Online/Offline sorting: </strong>
          A sorting is online sorting if it allows new data while the sorting process is ongoing and regardless
          yield the result otherwise, it is offline sorting.
        </li>
        <li>
          <strong>Stable/Unstable sorting: </strong>
          A sorting is stable sorting if it does not change the order of place of element with same value
          otherwise, it is unstable sorting.
        </li>
      </ol>
      <br />
      <p>
        Here is a list of different sorting algorithms containing information about
        the techniques of sorting used in them.
        These are few of the most common sorting.
      </p>
      <br />
      <table>
        <tbody>
          <tr>
            <th>Sorting algorithm</th>
            <th>Devleoper</th>
            <th>Comparison based</th>
            <th>In-place</th>
            <th>Online</th>
            <th>Stable</th>
          </tr>
          <tr>
            <td>Merge Sort</td>
            <td>John von Neumann</td>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Quick Sort</td>
            <td>Sir C.A.R. Hoare</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Bubble Sort</td>
            <td>N/A</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Insertion Sort</td>
            <td>Sir C.A.R. Hoare</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Heap Sort</td>
            <td>J. W. J. Williams</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Algorithm
