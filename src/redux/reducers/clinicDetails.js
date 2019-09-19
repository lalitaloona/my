import * as actionTypes from '../actionTypes';

const initialState = {
  editModal: false,
  addModal: false,
  editSuccess: null,
  editFailure: null,
  addSuccess: null,
  addFailure: null,
  id: '',
};

function clinicDetails(state = initialState, { type, payload }) {
  switch (type) {
  case actionTypes.CLINIC_DETAILS_TOGGLE_EDIT_MODAL:
    return { ...state, editModal: payload.bool, id: payload.id };

  case actionTypes.CLINIC_DETAILS_TOGGLE_ADD_MODAL:
    return { ...state, addModal: payload }

  case actionTypes.SAVE_EDIT_DETAILS_INITIALIZE:
    return { ...state, editSuccess: payload };

  case actionTypes.SAVE_EDIT_DETAILS_SUCCESS:
    return { ...state, editSuccess: payload };

  case actionTypes.SAVE_EDIT_DETAILS_FAILURE:
    return { ...state, editFailure: payload };

  case actionTypes.SAVE_ADD_DETAILS_INITIALIZE:
    return { ...state, addSuccess: payload };

  case actionTypes.SAVE_ADD_DETAILS_SUCCESS:
    return { ...state, addSuccess: payload };

  case actionTypes.SAVE_ADD_DETAILS_FAILURE:
    return { ...state, addFailure: payload };

  case actionTypes.DOCTOR_LISTS:
    return { ...state, doctorsList: payload };

  case actionTypes.MEDICAL_ASSISTANTS_LISTS:
    return { ...state, medicalAssistantsList: payload };

  case actionTypes.RECEPTIONIST_LISTS:
    return { ...state, receptionistList: payload };

  default:
    return state;
  }
}

export default clinicDetails;
