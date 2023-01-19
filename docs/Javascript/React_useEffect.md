# React_useEffect

1. component가 rendering 될 때 실행
    ```js
    useEffect(()=> {
        ...
    });
    ```
2. component가 mount 될 때 (처음 rendering 될 때) 실행
    ```js
    useEffect(()=> {
        ...
    }, []);
    ```
3. component가 update 될 때 (props, states가 바뀔 때) 실행
    ```js
    useEffect(()=> {
        ...
    }, [{ props or states }]);
    ```
4. component가 unmount 될 때 또는 update되기 직전에 실행
    ```js
    useEffect(()=> {
        return () => {
            ...
        };
    }, []);
    ```