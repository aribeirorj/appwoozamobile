import React, {Component} from 'react';
import {Avatar, Card, Container, List, Name, Position, User} from './style';
import api from '../../services/api';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }

  async componentDidMount() {
    try {
      const response = await api.get();
      this.setState({users: response.data});
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {users} = this.state;
    return (
      <Container>
        <List
          data={users}
          keyExtractor={user => user.id}
          renderItem={({item}) => (
            <Card>
              <User>
                <Avatar source={{uri: item.avatar}} />
                <Name>{item.name}</Name>
                <Position>{item.position}</Position>
              </User>
            </Card>
          )}
        />
      </Container>
    );
  }
}
