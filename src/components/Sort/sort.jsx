import React from 'react';
import './sort.css'

function Sort({nameSort}) {
    return (
        <div className={'sort_window'}>
            <div className={'sort_name'}>
                {nameSort} смотреть онлайн
            </div>

        </div>
    );
}

export default Sort;