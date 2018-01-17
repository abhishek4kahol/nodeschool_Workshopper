* The map() method is used to apply a function on every element in an array.

```
return numbers.map(function double(num){
  return num*2;
});

numbers -- the array to run the map function on
num -- the current value being processed
```

* There is no loop needed, and we no longer have to add values manually to an array. When working with the map() function, all you need to do is define what you want to happen and return it. Map() will handle the rest.

syntax looks like:
```
let newArr = oldArr.map((val, i, arr) => {

  return {
      value: val,
      index: i
    };
});
```
newArr — the new array that is returned
oldArr — the array to run the map function on
val — the current value being processed
i — the current index of the value being processed
arr — the original array

* map calls a provided callback function once for each element in an array, in order, and constructs a new array from the results.
