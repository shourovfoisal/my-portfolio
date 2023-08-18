import type { Reducer, ReducerAction } from 'react'

type ActiveProps = {
    isActive: boolean,
    activeClasses: string
}

type StateType = {
    [key: string]: ActiveProps
}

export const INITIAL_STATE: StateType = {
    // the keys are the same as the navigation paths
    services: { isActive: false, activeClasses: "text-ashGray" },
    works: { isActive: false, activeClasses: "text-ashGray" },
    blog: { isActive: false, activeClasses: "text-ashGray" }
}

type NavigationReducerAction = {
    type: string,
    payload: string
}

export const NAVIGATION_ACTIONS = {
    TOGGLE_ACTIVE: "TOGGLE_ACTIVE"
}

export const navigationReducer: Reducer<StateType, NavigationReducerAction> = (state: StateType, action: NavigationReducerAction) => {
    switch (action.type) {
        case NAVIGATION_ACTIONS.TOGGLE_ACTIVE: {
            
            const whichNav = Object.keys(state).find(key => key === action.payload.replace("/", ""))
            if(whichNav) {
                const linkShouldBeActive = !state[whichNav as keyof typeof state].isActive;
                return {
                    ...INITIAL_STATE,   // this resets the state, so no need looping and making inactive
                    [whichNav]: {
                        isActive: linkShouldBeActive,
                        activeClasses: linkShouldBeActive ? "text-LightPastelOrange" : "text-ashGray"
                    }
                }
            }
        }
        default: {
            // pages other than navigation links, like homepage '/'
            return INITIAL_STATE
        }
    }
}