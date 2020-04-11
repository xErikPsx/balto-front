import React from 'react';

const ListItem = ({index,value}) => {
    return (
        <div className={`list__item ${index.toLowerCase().replace(':','')}`}>
            {index} {value}
        </div>
    );
}

export default ListItem;
