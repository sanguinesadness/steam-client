type Action<T, U = undefined> = {
    type: T;
    payload?: U;
};

export default Action;