import {
    ELECTION_LOAD_SUCCESS,
    ELECTIONS_LOADING, 
    POST_ELECTION,
    GET_ELECTION_MODULE,
    POST_CALL_ELECTION,
    POST_CALL_ELECTION_DATA,
    SET_CALL_ELECTION_DATA,
} from "./ElectionTypes";
import {REQUEST_STATE} from "../../../lib/request_redux_state";

const initialState = {
    //define the common states only
    nominationStart: '2017-05-24T10:30',
    nominationEnd:'2017-05-24T10:30',
    objectionStart:'2017-05-24T10:30',
    objectionEnd:'2017-05-24T10:30',
    depositAmount:'Amount',
    WeightagePrefarence:'%',
    WeightageVote:'%',
    rowData:[],
    requestState: REQUEST_STATE.NOT_STARTED,
    elections:[],
    electionData:[],
    allElectionModules:[],
    CallElectionData:[],
    PostedCallElection:[],
    PostedCallElectionData:[],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ELECTIONS_LOADING:
            return {
                ...state,
                requestState: REQUEST_STATE.LOADING
            };
        case ELECTION_LOAD_SUCCESS:
            return {
                ...state,
                elections: action.payload,
                requestState: REQUEST_STATE.SUCCESS
            };
        case POST_ELECTION:
            return {
              ...state,
              electionData: action.payload
            };
        case GET_ELECTION_MODULE:
            return {
              ...state,
              allElectionModules: action.payload
            };
        case SET_CALL_ELECTION_DATA://set election data to the state
            return {
              ...state,
              CallElectionData: action.payload
            };
        case POST_CALL_ELECTION://save on ELECTION table
            return {
              ...state,
              PostedCallElection: action.payload
            };
        case POST_CALL_ELECTION_DATA://save timeline, electionConfig, allow nominaton
            return {
              ...state,
              PostedCallElectionData: action.payload
            };
    }
    return state;
}

