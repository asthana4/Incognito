import React, { Component } from 'react';
import { Grid, Button, List, Header } from 'semantic-ui-react'
import { Card, Icon, Image, Label, Popup } from 'semantic-ui-react'

import './HomePage.css';
import FeedbackForm from '../FeedbackForm/FeedbackForm';

const GridLayout = () => (
  <Grid columns={2} verticalAlign='middle'  stretched container stackable >
    <Grid.Row>
      <Grid.Column width={5}>
       <ProfileCard/>
        </Grid.Column>
    <Grid.Column width={11} >
        <Grid columns={1} textAlign='center' verticalAlign='middle'  >
            <Grid.Row>
                    <Header size='huge'>Followed Classes</Header>

            </Grid.Row>
            <Grid.Row>
              <a href="http://localhost:3000/CS465feed">
                <Button color="blue">CS 465</Button>
              </a>
              <a href="http://localhost:3000/CS498feed">
                <Button color="blue">CS 498</Button>
              </a>
              <a href="http://localhost:3000/CS357feed">
                <Button color="blue">CS 357</Button>
              </a>
              <a href="http://localhost:3000/CS242feed">
                <Button color="blue">CS 242</Button>
              </a>
            </Grid.Row>
             <Grid.Row>
                    <Header size='huge'>Followed Threads</Header>
            </Grid.Row>
             <Grid.Row  >
                 <ThreadList/>
            </Grid.Row>
            
        </Grid>
    </Grid.Column>

    </Grid.Row>
        
  </Grid>
)

const ThreadList = () => (
  <List divided verticalAlign='middle' size='huge' style={{height:"450px"}} >
    
    <List.Item>
      <Image avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/JAA_3538-2.jpg/220px-JAA_3538-2.jpg' />
      <List.Content>
        <List.Header as='a'>How to connect to the server?</List.Header>
      </List.Content>
        
      <List.Content floated='right' style={{paddingTop:'0.25em'}}>
            <ParentProps>
            </ParentProps>
      </List.Content>
        
    </List.Item>
    
    <List.Item>
      <Image avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/JAA_3538-2.jpg/220px-JAA_3538-2.jpg' />
      <List.Content>
        <List.Header as='a'>Why randomization improves QuickSort pivot selection?</List.Header>
      </List.Content>
        
      <List.Content floated='right' style={{paddingTop:'0.25em'}}>
            <ParentProps>
            </ParentProps>
      </List.Content>
        
    </List.Item>
        
    <List.Item>
      <Image avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/JAA_3538-2.jpg/220px-JAA_3538-2.jpg' />
      <List.Content>
        <List.Header as='a'>Is it just me or this course is getting too difficult?</List.Header>
      </List.Content>
        
      <List.Content floated='right' style={{paddingTop:'0.25em'}}>
            <ParentProps>
            </ParentProps>
      </List.Content>
    </List.Item>
        
    <List.Item>
      <Image avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/JAA_3538-2.jpg/220px-JAA_3538-2.jpg' />
      <List.Content>
        <List.Header as='a'>Why do we only care about Eigenvectors with Eigen value 1?</List.Header>  
      </List.Content>
        
      <List.Content floated='right' style={{paddingTop:'0.25em'}}>
            <ParentProps>
            </ParentProps>
      </List.Content>
        
    </List.Item>

        
  </List>
)

const ProfileCard = () => (
  <Card centered style={{height:'500px', textAlign:'center'}}>
    <Image src='https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg' />
    <Card.Content>
      <Card.Header>
        Matthew
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Joined in 2017
        </span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='log out' />
        Logout
      </a>
    </Card.Content>
  </Card>
)

class HomePage extends Component {
  render() {
    return (
        <GridLayout/>
    );
  }
}

class ParentProps extends Component {

  constructor() {
    super();
    var num_votes = Math.floor(Math.random()*100)+1;
    var resolve = Math.random() >= 0.5;
    this.state = {votes: num_votes, resolved: resolve}
  }

  render() {
    return(
      <div>
        <VoteButton votes={this.state.votes} />
        <RangeLabel votes={this.state.votes} resolved={this.state.resolved} />
      </div>
      );
  }
}

class RangeLabel extends Component {

  constructor(props) {
    super();
    if (props.resolved) {
      this.state = {color: 'rgba(0,255,0,1)', resolved: true}
    }
    else {
      var colorWeight = props.votes*0.01
      this.state = {color: 'rgba(255,0,0,' + colorWeight + ')', resolved: false}
    }
  }

  render(props) {
      if (this.state.resolved) {
        return ( <Popup
              trigger={
                <Button style={{backgroundColor: this.state.color}}>
                </Button>}
              content='This would be covered in the next lecture'
              size='huge'
            />);
      }
      else {
        return ( <Popup
              trigger={
                <Button style={{backgroundColor: this.state.color}}>
                </Button>}
              content='Unresolved'
              size='huge'
            />);
      }
  }
}


class VoteButton extends Button {

  constructor(props) {
    super();
    this.state = {color: '#e0e1e2', active: false, votes: props.votes}
    this.onClick.bind(this)
  }

  onClick() {
    if (!this.state.active) {
      this.setState({ color: 'green'})
      var update_votes = parseInt(this.state.votes) + 1
      this.setState({votes: update_votes})
      this.setState({ active: !this.state.active})
    }
    else {
      this.setState({ color: '#e0e1e2'})
      var update_votes = parseInt(this.state.votes) - 1
      this.setState({votes: update_votes})
      this.setState({ active: !this.state.active})
    }
    
  }

  render() {
    return(
      <Button toggle active={this.state.active} onClick={() => this.onClick()}>
        <Icon name='arrow up'/> {this.state.votes}
      </Button>
    );
  }
}

class ClassButtons extends Component {

  constructor() {
    super();
    var classes = ["CS 465", "CS 498", "CS 357", "CS 242"];
    this.state = {class: classes};
  }

  render() {
    return(
      <div>
        <FeedbackForm class={this.state.class[0]} color="blue">{this.state.class[0]}</FeedbackForm>
        <FeedbackForm class={this.state.class[1]} color="blue">{this.state.class[1]}</FeedbackForm>
        <FeedbackForm class={this.state.class[2]} color="blue">{this.state.class[2]}</FeedbackForm>
        <FeedbackForm class={this.state.class[3]} color="blue">{this.state.class[3]}</FeedbackForm>
      </div>
    )
  }
}

export default HomePage;
