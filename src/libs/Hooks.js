import {useEffect} from 'react';

function useInterface(innerFuntion, outterFunction, [innerValue, outterValue]) {
    // eslint-disable-next-line
    useEffect( innerFuntion, [innerValue]);
    // eslint-disable-next-line
    useEffect( outterFunction, [outterValue]);
}

export {useInterface};