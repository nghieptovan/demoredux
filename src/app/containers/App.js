import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/index';

class App extends Component {
  render() {
    const {todos, actions, users} = this.props;
    console.log(todos);
    console.log(users);
    return (
      <div className="todoapp">
        <Header
          addTodo={actions.addTodo}
          />
        <MainSection
          todos={todos}
          actions={actions}
          />
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
