import React from "react";
import { connect } from "react-redux";

interface Props {}

interface PropsWithForwardedRef extends Props {
	forwardedRef?: React.Ref<HTMLDivElement>;
}

function Component(props: PropsWithForwardedRef) {
	return <div ref={props.forwardedRef} />;
}

const RefForwardingComponent = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	return <Component {...props} forwardedRef={ref} />;
});

const ConnectedRefForwardingComponent = connect(
	null,
	null,
	null,
	{ forwardRef: true }
)(RefForwardingComponent);

const ref = React.createRef<HTMLDivElement>();
const jsx = <ConnectedRefForwardingComponent ref={ref} />; // should be no error
