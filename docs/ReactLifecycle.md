<h1 align="center"><strong>React Lifecycle Methods/Hooks</strong></h1>
<p align="center">Comparison of React lifecycle methods in Class Component and their equivalent hooks in Functional Component.</p>

<table align="center">
<tr>
  <th></th> 
  <td align="center"> Class Component </td>
  <td align="center"> Functional Component </td>
</tr>
  
<tr></tr>

<tr>
<th>Mount</th>
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
}, [])
```

</td>
</tr>

<tr></tr>

<tr>
<th rowspan="3"> Update </th>
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
}, [dependencies])
```

</td>
</tr>

<tr></tr>
<tr>
<td>

```js
shouldComponentUpdate() {
}
```

</td>
<td>

```js
React.memo(Component, (prevProps, nextProps) => {
  /**
   * compares previous and next props
   * returns false if they are not same
   * (component will then re-render)
   * otherwise returns true
   */
})
```

</td>
</tr>

<tr></tr>

<tr>
<th>Unmount</th>
<td>

```js
componentWillUnmount() {
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
