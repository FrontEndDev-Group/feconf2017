import React from 'react';
import PropTypes from 'prop-types';

const Section = ({className, style, children}) => (
    <div className={`section ${className}`} style={style}>
        <div className="section__inner">
            {children}
        </div>
    </div>
);

Section.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

Section.defaultProps = {
    className: '',
    style: {}
};

export default Section;
