import React, { useEffect, useState, useReducer } from 'react';
import styled from 'styled-components';
import {createSelector} from 'reselect';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

import {enhancedReducer} from './utilities';
import {fetchDetailInitialize, getBooksInitialize} from '../redux/actions/detailList';

const BigButton = styled.button`
    padding: 10px 20px;
    background-color: pink;
    text-align: center;
    margin: auto;
    display: inline-block;
    margin-top: 5px;
    border-radius: 50px;
    color: white;
`;

const ListItem = styled.li`
    display: flex;
    margin: 3px;
    padding: 5px;
    font-size: 11px;
    color: white;
    list-style: none;
    font-size: 15px;
`;

const ListItemDiv = styled.div`
  margin: 3px;
  padding: 5px;
  font-size: 11px;
  color: white;
  font-size: 15px;
  text-align: initial;
`

const UnList = styled.ul`
    background-color: skyblue;
    text-align: center;
    margin-top: 20px;
    border-radius: 40px;
`;

const OuterFrame = styled.div`
    border-radius: 30px;
    margin: 15px;
    align-content: center;
    text-align: center;
`;

const ButtonBox = styled.div`
    text-align: center;
`;

const MyFont = styled.h2`
    color: pink;
    font-family: arial;
`;

const Fall = styled.div`
    margin-left: 10px;
    cursor: pointer;
    `;

const getMemoizedData = createSelector(
  (state) => state.detailList,

(detailsState) => {
  return {
  ...detailsState
  }
}
)

const initialState = {
    items: [],
    loader: true
}

const Details = (props) => {
  const dispatch= useDispatch()
  const details= useSelector(getMemoizedData)
  const [state, updateState] = useReducer(enhancedReducer, initialState)

  useEffect(() => {
    const { match: { params } } = props;
    const { id } = params;
    dispatch(fetchDetailInitialize(id))
  }, [])

  const renderMethod = (details, key, index) => {
    if (Array.isArray(details[key])){
      return (
        <ListItemDiv
          key={index}
        >
          <strong>{key}: </strong>
          {details[key].map((pay, indx) => (
            <Fall>
              <span
                onClick={() => {
                  if (key === 'books') {
                    dispatch(getBooksInitialize(pay))
                  }
                }}
                key={indx}
              >
                {pay}
              </span>
            </Fall>
          ))}
        </ListItemDiv>
      )
    }

    return (
      <ListItem
        key={index}
      >
        <strong>{key}: </strong>{details[key]}
      </ListItem>
    )
  }

  if (details.detailsLoader) {
    return (<div><ButtonBox>loading....</ButtonBox></div>)
  }

  return (
    <div>
    <OuterFrame>
      <MyFont>COMPLETE DETAILS OF THE PERSON</MyFont>
      <UnList>
        {
          Object.keys(details.details).map((key, index) => (
            renderMethod(details.details, key, index)
          ))
        }
      </UnList>

      <Link to="/list">
        <ButtonBox><BigButton>home</BigButton></ButtonBox>
      </Link>
    </OuterFrame>
    </div>
  )
}

export default Details
