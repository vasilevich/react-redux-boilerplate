import React from 'react';

interface IFooterProps {

}

const Footer = (props: IFooterProps) => {
    return (
        <div>footer</div>
    );
};

Footer.defaultProps = {};

export default React.memo(Footer);
