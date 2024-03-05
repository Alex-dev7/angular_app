import { createFeature, createReducer } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";

const initialState: AuthStateInterface = {
    isSubmitting: false,
}

const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        initialState,
        on(register, (state) => ({...state, isSubmitting: true})),
    ),
})

export const {name: authFeatureKey, reducer: authReducer} = authFeature