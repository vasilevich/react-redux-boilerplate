import React from 'react';

interface INavigationProps {
    menuCollapseToggle: boolean;
    pathName: string;
    onMenuCollapseToggle: (state?: boolean) => void;
    selectedMenu: string;
    onMenuSelect: (menuSelection) => void;
    signedIn?: boolean;
}

const Navigation = (props: INavigationProps) => {
    return (
        <div>top</div>
    );
};
Navigation.defaultProps = {
    pathName: '',

    selectedMenu: '',
};
export default React.memo(Navigation);
