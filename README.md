# Anime Recommendations

This website gives you anime recommendations of some greatest of all times anime.<br>
[Live Preview](https://im-ashish00.github.io/anime-recommends/)<br>
![Output Image](https://raw.githubusercontent.com/im-ashish00/anime-recommends/main/output.gif)

#### Things Learned:-

- [How components work in React.](https://github.com/im-ashish00/anime-recommends/blob/55cee888cecc483f5102e9b25185524d57f7b7e5/src/index.js#L5)
- [Axios package to fetch the data and cancelToken to cancel the request.](https://github.com/im-ashish00/anime-recommends/blob/55cee888cecc483f5102e9b25185524d57f7b7e5/src/App.jsx#L25)
- [The attributes class, for are className and htmlFor in react.](https://github.com/im-ashish00/anime-recommends/blob/69fd050ed6f03fb42adcdc80e2e5b9cea3275e6d/src/App.jsx#L75)
- [default](https://github.com/im-ashish00/anime-recommends/blob/69fd050ed6f03fb42adcdc80e2e5b9cea3275e6d/src/index.js#L3) and [named export](https://github.com/im-ashish00/anime-recommends/blob/69fd050ed6f03fb42adcdc80e2e5b9cea3275e6d/src/App.jsx#L2) and the correct of importing them.
- useState hook can't be inside conditionals or loops, as they're executed in the order.
- [useState returns an array of two elements, first is the variable with current value and second is the method to set the value.](https://github.com/im-ashish00/anime-recommends/blob/55cee888cecc483f5102e9b25185524d57f7b7e5/src/App.jsx#L7)
- [useState's returned method also gives previous value in the callback if we wanna manipulate the value.](https://github.com/im-ashish00/anime-recommends/blob/55cee888cecc483f5102e9b25185524d57f7b7e5/src/App.jsx#L62)
- [useEffect hook is basically like the side effect whenever something is updated.](https://github.com/im-ashish00/anime-recommends/blob/55cee888cecc483f5102e9b25185524d57f7b7e5/src/App.jsx#L20)
- [useEffect takes callback function (runs things on update) and a value which will trigger the callback.](https://github.com/im-ashish00/anime-recommends/blob/55cee888cecc483f5102e9b25185524d57f7b7e5/src/App.jsx#L52)
- Just pass an empty array if we only want to run the effect once when our component renders.
- [we can also return cleanback function in the callback function of useEffect to remove the previous values.](https://github.com/im-ashish00/anime-recommends/blob/55cee888cecc483f5102e9b25185524d57f7b7e5/src/App.jsx#L49)
