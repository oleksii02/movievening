import * as React from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import './myPagination.css'

const List = styled('ul')({
    listStyle: 'none',
    padding: 1,
    marginLeft: 0,
    display: 'flex',

});

export default function MyPagination({pagesCount ,onPage}) {

    const nextPage = (page) =>{
        onPage(page.props.children)
    }

    const { items } = usePagination({
        count: pagesCount,
    });

    return (
        <nav className={'pagination'}>
            <List style={{padding :0, margin:0}}>
                {items.map(({ page, type, selected, ...item }, index) => {
                    let children = null;

                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children = <div className={'children'}>...</div>;
                    } else if (type === 'page') {
                        children = (
                            <button
                                className={`button ${selected ? 'hover' : undefined}`}
                                type="button"

                                {...item}
                            >
                                {page}

                            </button>
                        );
                    } else {
                        children = (
                            <button type="button" {...item} className={'button two'}>
                                {type === 'next' ? ">" :  "<" }
                            </button>
                        );
                    }

                    return <li key={index}
                               onClick={() => nextPage(children)}
                    >{children}</li>;
                })}
            </List>
        </nav>
    );
}