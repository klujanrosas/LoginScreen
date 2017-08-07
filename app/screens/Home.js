import React, { Component } from 'react'
import { StatusBar } from 'react-native'

import { Container } from '../components/Container'
import { Card } from '../components/Card'
import { SimpleInput } from '../components/TextInput'
import { GradientButton } from '../components/Button'
import { CircularBadge } from '../components/Badge'
import { NotSignedUp } from '../components/Text'

class Home extends Component {
  handlePress() {
    alert('button pressed')
  }

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="rgba(255,255,255,0.0)" translucent />
        <CircularBadge label="A" />
        <Card title="Login">
          <SimpleInput
            placeholder="Email"
          />
          <SimpleInput
            placeholder="Password"
            secureTextEntry
          />
          <GradientButton text="GO!" onPress={this.handlePress} />
          <NotSignedUp />
        </Card>
      </Container>
    )
  }
}

export default Home
