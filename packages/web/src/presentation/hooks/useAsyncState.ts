import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

// function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
export function useAsyncState<T>(
  initialState: T | (() => T)
  // ): [T, Dispatch<SetStateAction<T>>, (callback: (newState: T) => void) => void] {
): [T, Dispatch<SetStateAction<T>>, (callback: (newState: T) => void) => void] {
  // const [xxx, setState] = useState<T>(initialState);
  const [internalState, setInternalState] = useState<T>(initialState);
  const callback = useRef(null);
  const prevSetStatePayload = useRef(null);
  useEffect(() => {
    callback.current && callback.current(internalState, prevSetStatePayload);
  }, [internalState]);

  const onStateChange = (cb: (newState: T) => void) => {
    // callback(state);
    callback.current = cb;
  };

  const setState: Dispatch<SetStateAction<T>> = (newState) => {
    prevSetStatePayload.current = newState;
    setInternalState(newState);
  };
  return [internalState, setState, onStateChange];
}
