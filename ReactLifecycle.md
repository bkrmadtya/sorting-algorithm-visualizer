<table>
<caption>React Lifecycle Hooks</caption>
<tr>
  <th> </th> 
  <td style="text-align: center;"> Class Component </td>
  <td style="text-align: center;"> Functional Component </td>
</tr>

<tr>
  <th> Mount </th>
  <td>

  ```js
    componentDidMount() {
    }
  ```
  </td>
  <td>

  ```js
    useEffect(() => {
      // runs on mount (only once)
    },[])
  ```
  </td>
</tr>

<tr>
  <th rowspan="2"> Update </th>
  <td>

  ```js
    componentDidUpdate() {
    }
  ```
  </td>
  <td>

  ```js
    useEffect(() => {
      // runs on every update
    })
  ```

  ```js
    useEffect(() => {
      // runs if any dependency changes
    },[dependencies])
  ```
  </td>
</tr>
<tr>
  <td>

  ```js
    shouldComponentUpdate() {
    }
  ```
  </td>
  <td>

  ```js
    React.memo(Component, 
      (prevProps, nextProps) => {
      // compares previous and next props
      // returns false if they are not same
      // (component will then re-render)
      // otherwise returns true
    })
  ```
  
  </td>
</tr>
<tr>
  <th>Unmount</th>
  <td>
  
  ```js
    componentWillUnmount(){      
    }
  ```
  </td>
  <td>
  
  ```js
    useEffect(() => {
      return () => {
        // runs on unmount (only once)
      }
    })
  ```
  </td>
</tr>
</table>