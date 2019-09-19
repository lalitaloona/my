/* eslint-disable import/prefer-default-export */
import * as actionTypes from '../actionTypes';

export const toggleEditModal = data => ({
  type: actionTypes.CLINIC_DETAILS_TOGGLE_EDIT_MODAL,
  payload: data,
});

export const doctorsList = data => ({
  type: actionTypes.DOCTOR_LISTS,
  payload: data,
});

export const medicalAssistantsList = data => ({
  type: actionTypes.MEDICAL_ASSISTANTS_LISTS,
  payload: data,
});

export const receptionistList = data => ({
  type: actionTypes.RECEPTIONIST_LISTS,
  payload: data,
});

export const toggleAddModal = data => ({
  type: actionTypes.CLINIC_DETAILS_TOGGLE_ADD_MODAL,
  payload: data,
});

export const saveEditDetailsInitialize = data => ({
  type: actionTypes.SAVE_EDIT_DETAILS_INITIALIZE,
  payload: data,
});

export const saveEditDetailsSuccess = data => ({
  type: actionTypes.SAVE_EDIT_DETAILS_SUCCESS,
  payload: data,
});

export const saveEditDetailsFailure = error => ({
  type: actionTypes.SAVE_EDIT_DETAILS_FAILURE,
  payload: error,
});

export const saveAddDetailsInitialize = data => ({
  type: actionTypes.SAVE_ADD_DETAILS_INITIALIZE,
  payload: data,
});

export const saveAddDetailsSuccess = data => ({
  type: actionTypes.SAVE_ADD_DETAILS_SUCCESS,
  payload: data,
});

export const saveAddDetailsFailure = error => ({
  type: actionTypes.SAVE_ADD_DETAILS_FAILURE,
  payload: error,
});
