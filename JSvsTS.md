<h1 align="center"><strong>JavaScript Vs TypeScript</strong></h1>
<p align="center">JavaScript and TypeScript syntax comparison</p>

<table align="center">
<tr>
  <td align="center"><strong> JavaScript </strong></td>
  <td align="center"><strong> TypeScript </strong></td>
</tr>  
<tr></tr>

<tr>
<td>

```js
const squareOfNumber = (num) => {
  console.log(num * num);
}

/**
 * Accepts wrong data type
 * But causes error during runtime
 * Valid JavaScript syntax
 */

squareOfNumber("incorrect data type");
squareOfNumber(true);
squareOfNumber([]);
squareOfNumber(1);  

  
```
</td>
<td>

```ts
const squareOfNumber = (num: number): void => {
  console.log(num * num);
}

/**
 * Doesn't accept wrong data type
 * Causes error during development
 * Invalid TypeScript syntax
 */

squareOfNumber("incorrect data type");
squareOfNumber(true);
squareOfNumber([]);

// Only valid TypeScript syntax
squareOfNumber(1);
```
</td>
</tr>

<tr></tr>

</table>