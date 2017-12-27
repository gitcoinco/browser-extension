import React from 'react';

const renderMergedProps = (component, ...rest) => {
    const theProps = Object.assign({}, ...rest);
    return React.createElement(component, theProps);
};

export default renderMergedProps;