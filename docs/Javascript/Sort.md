# Sort

## Table에 있는 데이터들을 column별로 정렬해야 한다

### 데이터의 형식에 따라 comparator를 따로 구현하였다
```js
const comparatorStr = (a, b, order) => {
if (order === Order.ASC) return a.localeCompare(b);
return b.localeCompare(a);
};

const comparatorInt = (a, b, order) => {
if (order === Order.ASC) return a > b ? 1 : -1;
return a < b ? 1 : -1;
};
```

### 정렬할 키나 순서가 바뀔때 마다 정렬을 수행한다
```javascript
useEffect(() => {
if (sortBy === Key.NAME)
    setStateList(
    [...stateList].sort((a, b) => comparatorStr(a.name, b.name, sortOrder)),
    );
else if (sortBy === Key.SIZE)
    setStateList(
    [...stateList].sort((a, b) => comparatorInt(a.size, b.size, sortOrder)),
    );
}, [sortBy, sortOrder]);
```

### 정렬할 키, 순서는 다음과 같이 정한다
```js
const sortHandle = (key) => {
// (현재 선택 된 키를 다시 눌렀을 때 && 현재 오름차순 정렬일 때) -> 내림차순
if (sortBy === key && sortOrder === Order.ASC) setSortOrder(Order.DESC);
// 나머지 모든 경우 -> 오름차순
else setSortOrder(Order.ASC);
// update sortBy
setSortBy(key);
};
```

### 느낀 점
* 나름 신경썼는데 UX측면에서 내 방식이 적절한 방식인지 잘 모르겠다.