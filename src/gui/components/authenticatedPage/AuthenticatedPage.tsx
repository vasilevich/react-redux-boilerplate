import React from 'react';

export interface IAuthenticatedPageProps {
    signedIn?: boolean;
    allowed?: boolean;
    isEmailVerified?: boolean;
    navigateOnLogout?: () => void;
    navigateOnLogin?: () => void;
    navigateOnDisallowed?: () => void;
    navigateOnEmailNotValidated?: () => void;
    skipRedirectCheck?: number[];
}

interface IAuthenticatedPageState {
    signedIn?: boolean;
}

export enum eSkipRedirectCheck {
    signedIn,
    allowed,
}

class AuthenticatedPage<T = void, U = any> extends React.Component<T & IAuthenticatedPageProps, U & IAuthenticatedPageState> {

    state: any = {
        signedIn: false
    };

    public static defaultProps = {
        signedIn: false,
        navigateToControlPanel: () => {
            /* DEV-START */
            console.log('Not implemented, this page is meant to work with redux-like connector/container');
            /* DEV-END */
        },
        skipRedirectCheck: [],
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (
            (nextProps.signedIn !== (prevState && prevState.signedIn))
            ||
            nextProps.allowed !== (prevState && prevState.allowed)
        )
            return {
                signedIn: nextProps.signedIn,
                allowed: nextProps.allowed
            };
        return null;
    }

    /**
     * Perform certain initial tasks, such as redirection, according to the current user permission
     * @protected
     */
    protected handlePermissionBehavior() {
        if (this.props.skipRedirectCheck) {
            if (!this.props.skipRedirectCheck.includes(eSkipRedirectCheck.signedIn) && !this.props.signedIn && this.props.signedIn !== null) {
                this.props.navigateOnLogout();
            } else if (!this.props.skipRedirectCheck.includes(eSkipRedirectCheck.allowed) && !this.props.allowed && this.props.allowed !== null) {
                this.props.navigateOnDisallowed();
            }
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


export default AuthenticatedPage;
