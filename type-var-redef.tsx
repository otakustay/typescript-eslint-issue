export interface Value {
    value: string;
}

const Value = (c: Value) => {
    return c.value;
};

Value({value: '123'});
