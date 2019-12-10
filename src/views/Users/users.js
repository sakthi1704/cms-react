import React from 'react';
import { Table, Button, Dropdown, Menu,Icon } from 'semantic-ui-react';
import times from 'lodash.times';
import { get } from 'axios';
import * as apiRoutes from "../Constants/api_routes";
import { Link, Route } from 'react-router-dom';
import Page from './Page';
import UserInfo from './UserInfo';

const userOptions = [
  {
    key: 'Top 10 Consumers',
    text: 'Top 10 Consumers',
    value: 'Top 10 Consumers'
  },
  {
    key: 'Top 50 Consumers',
    text: 'Top 50 Consumers',
    value: 'Top 50 Consumers'
  },
  {
    key: 'Top 100 Consumers',
    text: 'Top 100 Consumers',
    value: 'Top 100 Consumers'
  },
  {
    key: 'Bottom 10 Consumers',
    text: 'Bottom 10 Consumers',
    value: 'Bottom 10 Consumers'
  },
  {
    key: 'Bottom 50 Consumers',
    text: 'Bottom 50 Consumers',
    value: 'Bottom 50 Consumers'
  },
  {
    key: 'Bottom 100 Consumers',
    text: 'Bottom 100 Consumers',
    value: 'Bottom 100 Consumers'
  }
]
let userval=[
	{
		"id": 1,
		"name": "Shea Cummings",
		"email": "pretium@nuncullamcorpereu.net",
		"phone": "(989) 113-3909",
		"address": "100-4841 Nam Street",
		"city": "Copiapó",
		"zip": "55718",
		"orders":10
	},
	{
		"id": 2,
		"name": "Nicholas Crawford",
		"email": "fames@magnaUttincidunt.ca",
		"phone": "(318) 739-5632",
		"address": "P.O. Box 114, 3459 Amet, Rd.",
		"city": "Molfetta",
		"zip": "7593",
		"orders":15
	},
	{
		"id": 3,
		"name": "Sade Dunlap",
		"email": "tellus.non@hendrerita.org",
		"phone": "(530) 260-4734",
		"address": "415-3252 Erat Street",
		"city": "Gembloux",
		"zip": "21582"
	},
	{
		"id": 4,
		"name": "Megan Cortez",
		"email": "mollis.nec@Pellentesque.com",
		"phone": "(940) 196-0875",
		"address": "P.O. Box 564, 6689 Nec St.",
		"city": "Saguenay",
		"zip": "41910"
	},
	{
		"id": 5,
		"name": "Deirdre Merritt",
		"email": "tincidunt.aliquam.arcu@atnisiCum.net",
		"phone": "(545) 843-4672",
		"address": "6351 Mi Rd.",
		"city": "Boneffe",
		"zip": "53633",
		"orders":100
	},
	{
		"id": 6,
		"name": "Iris Koch",
		"email": "urna.Vivamus@lacus.com",
		"phone": "(494) 393-4272",
		"address": "757-6732 Tincidunt Av.",
		"city": "Sefro",
		"zip": "913243"
	},
	{
		"id": 7,
		"name": "Bruce Ochoa",
		"email": "Phasellus.fermentum@necmalesuada.com",
		"phone": "(683) 924-1310",
		"address": "Ap #196-9768 Elementum Rd.",
		"city": "Calmar",
		"zip": "824915",
		"orders":80
	},
	{
		"id": 8,
		"name": "Noelani Black",
		"email": "ac@malesuadaiderat.ca",
		"phone": "(405) 537-8203",
		"address": "580 Quis Road",
		"city": "L'Hospitalet de Llobregat",
		"zip": "6622IG",
		"orders":100
	},
	{
		"id": 9,
		"name": "Mark Vang",
		"email": "Aenean.gravida@sed.edu",
		"phone": "(614) 308-9853",
		"address": "9850 In, St.",
		"city": "Relegem",
		"zip": "5204",
		"orders":1000
	},
	{
		"id": 10,
		"name": "Illiana Frederick",
		"email": "egestas.hendrerit@nisidictum.edu",
		"phone": "(689) 510-8155",
		"address": "Ap #769-1763 Morbi St.",
		"city": "Worksop",
		"zip": "B89 4RQ",
		"orders":10
	},
	{
		"id": 11,
		"name": "Xerxes Bridges",
		"email": "augue.ac@euligula.edu",
		"phone": "(547) 732-9433",
		"address": "1347 Blandit Ave",
		"city": "Osgoode",
		"zip": "PP22 4VO",
		"orders":150
	}
]
const TOTAL_PER_PAGE = 10;

class users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      page: 0,
	  totalPages: 0,
	  dropDownValue:'',
	  topUsers:[],
    };
  }

  componentDidMount() {
	this.getUsers();
	this.onChange();
  }

  
  getUsers = async() => {
    // get(`${apiRoutes.BASE_URL}`)
    //   .then(({ data }) => {
        let arr = [];
        const totalPages = Math.ceil(userval.length / TOTAL_PER_PAGE);
        arr = Object.keys(userval).map(key =>
         this.setState({
          users: userval,
          page: 0,
          totalPages
        })
        )
        
        return arr;
      // });
  }
  displayUsers(){
	var temp = userval.filter(x => x.orders <= 100);
	console.log('temp', temp)
	// let temp = userval.map(x => x.orders);
	// console.log('temp2', temp.sort((a,b) => b-a).slice(0,7))
	
	//   if(temp === 10){
		this.setState({ topUsers:temp });  
	//   }
	  
}
  onChange = (e, data) => {
	this.setState({ dropDownValue:data });  
	this.displayUsers()
	// {data.value === 'Top 100 Consumers' ?  :null}
 }
  setPage(page) {
    return () => {
      this.setState({ page });
    };
  }
  decrementPage() {
    const { page } = this.state;

    this.setState({ page: page - 1 });
  }

  incrementPage() {
    const { page } = this.state;

    this.setState({ page: page + 1 });
  }
  render() {
    const { users, page, totalPages, topUsers } = this.state;
    const startIndex = page * TOTAL_PER_PAGE;
    return (
      <Page>
        <Dropdown
          selection
          options={userOptions}
		  defaultValue={userOptions[0].value}
		  onChange={this.onChange}
    />
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          {topUsers.slice(startIndex, startIndex + TOTAL_PER_PAGE).map(user => (
              <Table.Row key={user.id}>
                <Table.Cell>
                <Link to={`/users/${user.id}`}>{user.id}</Link>
                </Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
              </Table.Row>
              ))}
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan={6}>
                <Menu floated="right" pagination>
                  {page !== 0 && <Menu.Item as="a" icon onClick={this.decrementPage}>
                    <Icon name="left chevron" />
                  </Menu.Item>}
                  {times(totalPages, n =>
                    (<Menu.Item as="a" key={n} active={n === page} onClick={this.setPage(n)}>
                      {n + 1}
                    </Menu.Item>),
                  )}
                  {page !== (totalPages - 1) && <Menu.Item as="a" icon onClick={this.incrementPage}>
                    <Icon name="right chevron" />
                  </Menu.Item>}
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
        <Route path="/users/:userId" component={UserInfo} />
      </Page>
    );
  }
}

export default users;
