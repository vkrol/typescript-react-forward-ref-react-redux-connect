# typescript-react-forward-ref-react-redux-connect
https://github.com/DefinitelyTyped/DefinitelyTyped/issues/35661
## Steps
1. Run `npm install` or `yarn`
2. Run `npm run typecheck` or `yarn typecheck`
```
index.tsx:26:46 - error TS2322: Type 'RefObject<HTMLDivElement>' is not assignable to type '(string & ((instance: HTMLDivElement | null) => void)) | (string & RefObject<HTMLDivElement>) | (((instance: Component<Pick<Props & RefAttributes<HTMLDivElement>, "key" | "ref">, any, any> | null) => void) & ((instance: HTMLDivElement | null) => void)) | ... 4 more ... | undefined'.
  Type 'RefObject<HTMLDivElement>' is not assignable to type 'RefObject<Component<Pick<Props & RefAttributes<HTMLDivElement>, "key" | "ref">, any, any>> & RefObject<HTMLDivElement>'.
    Type 'RefObject<HTMLDivElement>' is not assignable to type 'RefObject<Component<Pick<Props & RefAttributes<HTMLDivElement>, "key" | "ref">, any, any>>'.
      Type 'HTMLDivElement' is missing the following properties from type 'Component<Pick<Props & RefAttributes<HTMLDivElement>, "key" | "ref">, any, any>': context, setState, forceUpdate, render, and 3 more.

26 const jsx = <ConnectedRefForwardingComponent ref={ref} />; // should be no error
                                                ~~~

  node_modules/@types/react/index.d.ts:97:9
    97         ref?: LegacyRef<T>;
               ~~~
    The expected type comes from property 'ref' which is declared here on type 'IntrinsicAttributes & IntrinsicClassAttributes<Component<Pick<Props & RefAttributes<HTMLDivElement>, "key" | "ref">, any, any>> & Readonly<Pick<Props & RefAttributes<HTMLDivElement>, "key" | "ref">> & Readonly<...>'


Found 1 error.
```
There should be no error.
