export default  (state={employees:[],parkingLots:[],DashBoardsparkingLots:[],parkingBoys:[],parkingLotDetails:[],orders:[]}, action) => {
    switch (action.type) {
        case 'INITEMPLOYEE': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.employees = [...action.employeesObject];
            return newState
        }
        case 'INITPARKINGLOT': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.parkingLots = [...action.parkingLotsObject];
            return newState
        }
        case 'INITPARKINGBOY': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.parkingBoys = [...action.parkingBoysObject];
            return newState
        }
        case 'INITPARKINGLOTDETAIL': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.parkingLotDetails = [...action.parkingLotDetailsObject];
            return newState
        }
        case 'INITORDER': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.orders = [...action.orderObject];
            return newState
        }
        case 'SELECT_ORDERS_BY_CONDITION': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.orders = [...action.orderObject];
            return newState
        }
        case 'SELECT_EMPLOYEES_BY_CONDITION': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.employees = [...action.employeesObject];
            return newState
        }
        case 'INITDASHBOARDSPARKINGBOY': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.DashBoardsparkingLots = [...action.DashBoardsparkingLotsObject];
            return newState
        }
        default:
            return state
    }
}

