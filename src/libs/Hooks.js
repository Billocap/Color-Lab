import {useState, useEffect} from 'react';

function useBundle(initialVal, varName, setName) {
    const [state, setState] = useState(initialVal);

    const bundle = {};

    bundle[varName] = state;
    bundle[setName] = setState;

    return [state, setState, bundle];
}

function useInterface(innerFuntion, outterFunction, [innerValue, outterValue]) {
    useEffect( innerFuntion, [innerValue]);
    useEffect( outterFunction, [outterValue]);
}

const Hooks = {
    useBundle,
    useInterface
}

export default Hooks;

export {useBundle, useInterface};