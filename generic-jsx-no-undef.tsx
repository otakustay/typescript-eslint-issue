import React from 'react';

interface Props<T> {
    value: T;
}

function Table<T>({value}: Props<T>) {
    return <div>{value}</div>
}

function Foo<T>(value: T) {
    return <Table<T> value={value} />
}

<Foo />
