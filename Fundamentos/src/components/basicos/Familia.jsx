import React, {cloneElement} from 'react';

export default props => {
    return(
        <div>
            {
                props.children.map((filho, i) => {
                    return cloneElement(filho, {...props, key: i});
                })
            }
        </div>
    )
};

