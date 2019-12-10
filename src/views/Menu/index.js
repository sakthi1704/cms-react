
import React from 'react';
import {  Menu, Sidebar, Icon, Accordion, Form } from 'semantic-ui-react';
import store from 'store';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import isLoggedIn from '../helpers/is_logged_in';
import * as routes from '../Constants/appRoutes';
import * as appRoutes from '../Constants/appRoutes';
import './styles.css';
import Home from '../Home/';
import Users from '../Users/users';
import TopMenu from './TopMenu'
import DropdownFilter from '../Analytics/index';
import Profile from '../profile/'

const SizeForm = (
  <React.Fragment >
    <Link style={{color:"lawngreen"}}  to="/users"><Form.Field label="Users" name="color" value="red"  /></Link><br/>
    <Link style={{color:"lawngreen"}}  to="/home"><Form.Field label="Traders" name="color" value="red"  /></Link><br/>
    <Link style={{color:"lawngreen"}}  to="/profile"><Form.Field label="CMS Users" name="color" value="red"  /></Link>
  </React.Fragment>
);
let activeIndex =1, activeItem;
const handleItemClick = (e, { name }) => activeItem= name;
const handleLogout = history => () => {
  store.remove('loggedIn');
  history.push(routes.LOGIN);
  // handleItemClick();
};
const handleAccordion = (e, titleProps) => {
  const { index } = titleProps
  const newIndex = activeIndex === index ? -1 : index

  activeIndex= newIndex 
}
const MenuBar = ({ history }) => {
  
  if (!isLoggedIn()) {
    return <Redirect to={appRoutes.LOGIN} />;
  }
  return (
    <div>
        <TopMenu />      
        <Sidebar as={Menu} borderless style={{ backgroundColor:"blue" }} visible vertical width="thin" icon="labeled">
      <Menu.Item name="" >
          </Menu.Item>
          <Menu.Item name=""></Menu.Item>
      <Link to="/home">
          <Menu.Item style={{color:"white"}} name="home">
            {/* <Icon name="dashboard" /> */}
            Home
          </Menu.Item>
        </Link>
        <Link to="/users">
          <Menu.Item style={{color:"white"}} className={activeItem === 'users' ? "highlight-menu" : ""}  name="users" active={activeItem === 'users'}
          onClick={handleItemClick}>
            {/* <Icon name="users" /> */}
            Users
          </Menu.Item>
        </Link>
        <Link to="/analytics">
          <Menu.Item style={{color:"white"}} name="analytics" active={activeItem === 'analytics'}
          onClick={handleItemClick}>
          Analytics
          </Menu.Item>
        </Link>
        <Link style={{color:"white"}}  to="/users">
        <Accordion  vertical>
          <Accordion.Title
          style={{color:"white"}} 
            active={activeIndex === 0}
            content="Profile"
            index={0}
            onClick={handleAccordion}
          />
          <Accordion.Content active={activeIndex === 0} content={SizeForm} />
        </Accordion>
        </Link>
        <Link to="/bookings">
          <Menu.Item style={{color:"white"}} name="bookings" active={activeItem === 'bookings'}
          onClick={handleItemClick}>
          Bookings
          </Menu.Item>
        </Link>
        <Menu.Item style={{color:"white"}} name="logout"
        onClick={
          handleLogout(history)} active={activeItem === 'logout'}>
          {/* <Icon name="power" /> */}
          Logout
        </Menu.Item>
      </Sidebar>
      <div className="main-body">
        <Switch>
          <Route path={routes.HOME} component={Home} />
          <Route path={routes.USERS} component={Users} />
          <Route path="/analytics" component={DropdownFilter} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </div>
  );
};


export default MenuBar;
