import React from 'react';

interface IUnAuthenticatedPageProps {
    signedIn: boolean;
    isEmailVerified?: boolean;
    navigateOnLogin: () => void;
}

interface IUnAuthenticatedPageState {
    signedIn: boolean;
}

class UnAuthenticatedPage extends React.Component<IUnAuthenticatedPageProps, IUnAuthenticatedPageState> {

    state = {
        signedIn: false
    };

    public static defaultProps = {
        signedIn: false,
        navigateToControlPanel: () => {
            /* DEV-START */
            console.log('Not implemented, this page is meant to work with redux-like connector/container');
            /* DEV-END */
        },
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.signedIn !== (prevState && prevState.signedIn))
            return {signedIn: nextProps.signedIn};
        return null;
    }

    private handlePermissionBehavior() {
        if (this.props.signedIn && this.props.signedIn !== null) {
            this.props.navigateOnLogin();
        }
    }


    componentDidUpdate(prevProps) {
        this.handlePermissionBehavior();
    }

    componentDidMount() {
        this.handlePermissionBehavior();
    }

    render() {
        return (this.props.children);
    }
}


export default UnAuthenticatedPage;
