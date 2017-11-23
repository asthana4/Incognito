import React, { Component } from 'react';
import { Grid, Button, List, Header } from 'semantic-ui-react'
import { Card, Icon, Image, Label } from 'semantic-ui-react'

import './FeedPage.css';

const GridLayout = () => (
  <Grid columns={2} verticalAlign='middle'   container stackable >
    <Grid.Row>
      <Grid.Column width={5}>
                  <Grid columns={1} textAlign='center' verticalAlign='middle'  >
            <Grid.Row>
                    <Header size='huge'>Followed Classes</Header>

            </Grid.Row>
            <Grid.Row>
                <Button color="blue">CS 465</Button>
                <Button color="blue">CS 498</Button>
                <Button color="blue">CS 357</Button>
                <Button color="blue">CS 242</Button>
            </Grid.Row>
             <Grid.Row>
                    <Header size='huge'>Followed Threads</Header>
            </Grid.Row>
             <Grid.Row  >
                 <ThreadList/>
            </Grid.Row>
            
        </Grid>
        </Grid.Column>
    <Grid.Column width={11} >
       <ProfileCard/>

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
            <Label >
                <Icon name='arrow up' /> 45
            </Label>
      </List.Content>
        
    </List.Item>
    
    <List.Item>
      <Image avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/JAA_3538-2.jpg/220px-JAA_3538-2.jpg' />
      <List.Content>
        <List.Header as='a'>Why randomization improves QuickSort pivot selection?</List.Header>
      </List.Content>
        
      <List.Content floated='right' style={{paddingTop:'0.25em'}}>
            <Label >
                <Icon name='arrow up' /> 34
            </Label>
      </List.Content>
        
    </List.Item>
        
    <List.Item>
      <Image avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/JAA_3538-2.jpg/220px-JAA_3538-2.jpg' />
      <List.Content>
        <List.Header as='a'>Is it just me or this course is getting too difficult?</List.Header>
      </List.Content>
        
      <List.Content floated='right' style={{paddingTop:'0.25em'}}>
            <Label >
                <Icon name='arrow up' /> 33
            </Label>
      </List.Content>
    </List.Item>
        
    <List.Item>
      <Image avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/JAA_3538-2.jpg/220px-JAA_3538-2.jpg' />
      <List.Content>
        <List.Header as='a'>Why do we only care about Eigenvectors with Eigen value 1?</List.Header>  
      </List.Content>
        
      <List.Content floated='right' style={{paddingTop:'0.25em'}}>
            <Label >
                <Icon name='arrow up' /> 23
            </Label>
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

class FeedPage extends Component {
  render() {
    return (
        <GridLayout/>
    );
  }
}

export default FeedPage;