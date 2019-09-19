import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { enhancedReducer } from './utilities'
import { fetchListInitialize } from '../redux/actions/list'

const Namelist= styled.li`
text-align: center;
margin: 10px;
padding: 8px;
background-color: skyblue;
border: 2px;
border-radius: 40px;
list-style: none;
`
const Container= styled.div`
border-radius: 30px 30px  30px 30px;
`
const Clickbutton= styled.button`
border-radius: 50px;
margin: 3px;
padding: 5px;
font-size: 11px;
letter-spacing: 0.5px;
background-color: pink;
`

const Text= styled.h3`
color: Black;
`

const getMemoizedData = createSelector(
    (state) => state.list,

    (listState) => {
        return {
            ...listState
        }
    }
)

const initialState = {
    items: [],
    loader: true
}

const Main = (props) => {
    const dispatch = useDispatch()
    const listState = useSelector(getMemoizedData)
    const [state, updateState] = useReducer(enhancedReducer, initialState)

    useEffect(() => {
        dispatch(fetchListInitialize())
    }, [])

    if(listState.listLoader) {
        return (
            <div id="load">
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
        <div>
            {listState.list.map((item, key) => (
                <Container key={key}>
                    <ul className="ul-list">
                        <Namelist>
                            <Text>
                                <b>Name: </b>
                                {item.name || '_____________'}
                            </Text>
                            <Clickbutton onClick={() => props.history.push(`/list/${item.url.split('/')[5]}`)}>
                                Click here to see Details
                            </Clickbutton>
                        </Namelist>
                    </ul>
                </Container>
            ))}
        </div>
    );
}

export default Main