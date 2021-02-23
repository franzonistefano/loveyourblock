import SmartContractState from '../../interface/common/SmartContractState'

const defaultState: SmartContractState = {
    loading: false,
}

export default (state = defaultState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}