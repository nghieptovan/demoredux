import React, {Component} from 'react';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';

import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({open: !this.state.open});
  }
  render() {
    return (
      <MuiThemeProvider>
      <div>
            <AppBar
        title="Demo Redux React"
        onTouchTap={this.handleToggle}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />

      <Drawer
         docked={false}
         width={200}
         open={this.state.open}
         onRequestChange={(open) => this.setState({open})}
       >

            <MenuItem primaryText="Preview" leftIcon={<RemoveRedEye />} containerElement={<Link to={'/'}/>}/>
            <MenuItem primaryText="Share" leftIcon={<PersonAdd />} containerElement={<Link to={'/dashboard'}/>}/>

        </Drawer>
</div>
      </MuiThemeProvider>
    );
  }

}

export default Dashboard;
