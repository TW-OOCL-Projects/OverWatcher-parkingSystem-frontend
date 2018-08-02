import {connect} from 'react-redux'
import Employees from "../components/Employees";


const mapStateToProps = (state, ownProps) =>{
    return {
        value: state[ownProps.index],
        Employees:state.employees
    }
};

const mapDispatchToProps = (dispatch, ownProps) =>{
    return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees)