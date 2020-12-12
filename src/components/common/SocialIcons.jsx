import React from 'react';
import PropTypes from 'prop-types';
import {SocialIcon} from 'react-social-icons';

export const SocialIcons = (props) => {
    const {data} = props;

    return (
        <div className="text-center">
            {data.map((item, index) => {
                return (
                    <span className="pb-3 m-3" key={index}>
                        <SocialIcon url={item}/>
                    </span>
                );
            })}
        </div>
    );
};

SocialIcons.propTypes = {
    data: PropTypes.array.isRequired,
};
