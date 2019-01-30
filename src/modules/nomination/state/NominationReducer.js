import {
    GET_NOMINATIONS,
    POST_NOMINATION_PAYMENTS
} from "./NominationTypes";

const initialState = {
    //define the common states only
    all_nominations: [3],
    candidatePayments:[]
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_NOMINATIONS:
            debugger;
            return {
                ...state,
                all_nominations: action.payload
            };
            case POST_NOMINATION_PAYMENTS:
            return {
                ...state,
                candidatePayments: action.payload
            };


    }
    return state;
}
