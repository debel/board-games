// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  Layout,
  Fit,
  Fill,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('./overrides.css');

const theme = createTheme(
  {
    primary: 'black',
    secondary: 'white',
    tertiary: 'limegreen',
    quaternary: 'goldenrod',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['slide']}
        transitionDuration={200}
        theme={theme}
      >
        <Slide bgImage="images/collection-new.jpg">
          <div class="blurred-background">
            <Heading size={1} fit caps textColor="white">
              Board games
            </Heading>
            <Heading size={2} fit caps textColor="white">
              my new addiction
            </Heading>
          </div>
        </Slide>
        <Slide>
          <Heading size={4}>
            Anatomy of a board game
          </Heading>
          <List>
            <ListItem>Theme</ListItem>
            <ListItem>Mechanisms</ListItem>
            <ListItem>Components</ListItem>
            <ListItem>Target audience</ListItem>
          </List>
        </Slide>
        <Slide bgColor="white">
          <Heading size={4}>
            Не се сърди човече (sorry!)
          </Heading>
          <Image src="images/sorry.jpeg" width={500} />
        </Slide>
        <Slide>
          <Heading size={4} width={500}>
            Monopoly
          </Heading>
          <Image src="images/monopoly.jpg" />
        </Slide>
        <Slide>
          <Heading size={4}>
            Classical board games
          </Heading>
          <List>
            <ListItem>Chess - perfect information, abstract strategy</ListItem>
            <ListItem>Backgammon - roll and move, abstract strategy</ListItem>
            <ListItem>Scrabble - hand management, word game</ListItem>
            <ListItem>Activity - acting, party game</ListItem>
            <ListItem>Mastermind - deduction, paper and pencil</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4}>
            My top favorite board game mechansims
          </Heading>
          <List>
            <ListItem>Variable player powers</ListItem>
            <ListItem>Engine building</ListItem>
            <ListItem>Card drafting</ListItem>
            <ListItem>Tile placement</ListItem>
            <ListItem>Worker placement</ListItem>
            <ListItem>Set collection</ListItem>
            <ListItem>Network building</ListItem>
            <ListItem>Partnerships</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4}>
            Even more nice board game mechansims
          </Heading>
          <List>
            <ListItem>Bluffing</ListItem>
            <ListItem>Take that</ListItem>
            <ListItem>Trick taking</ListItem>
            <ListItem>Area control</ListItem>
            <ListItem>Push your luck</ListItem>
            <ListItem>Auctioning / Bidding</ListItem>
            <ListItem>Grid / Point-to-Point Movement</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4}>
            My least favorite game mechansims
          </Heading>
          <List>
            <ListItem>Player elimination</ListItem>
            <ListItem>Roll nd move</ListItem>
            <ListItem>Single dice rolls</ListItem>
            <ListItem>Role playing / Storytelling</ListItem>
            <ListItem>Memory / Trivia knowledge</ListItem>
            <ListItem>Real-time</ListItem>
          </List>
        </Slide>
        <Slide bgColor="white">
          <Heading size={4}>
            Не се сърди човече (sorry!)
          </Heading>
          <Layout>
            <Fill>
              <Image src="images/sorry.jpeg" width={500} />
            </Fill>
            <Fill>
              <List textColor="black">
                <ListItem>Mechanisms: roll and move, take that</ListItem>
                <ListItem>Theme: abstract</ListItem>
                <ListItem>Components: dies and meeples</ListItem>
                <ListItem>Audience: children</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading size={4} width={500}>
            Monopoly
          </Heading>
          <Layout>
          <Fill>
            <Image src="images/monopoly.jpg" />
          </Fill>
          <Fill>
            <List>
              <ListItem>Mechanisms: roll and move, set collection, player elimination, auctioning</ListItem>
              <ListItem>Theme: economic</ListItem>
              <ListItem>Components: board, cards, dies and meeples</ListItem>
              <ListItem>Audience: any</ListItem>
            </List>
          </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading size={4}>
            Some of the most popular gateway games
          </Heading>
          <List>
            <ListItem>Dixit</ListItem>
            <ListItem>Catan</ListItem>
            <ListItem>Ticket to ride</ListItem>
            <ListItem>Carcassonne</ListItem>
            <ListItem>Citadels</ListItem>
            <ListItem>Camel up</ListItem>
            <ListItem>Saboteur</ListItem>
            <ListItem>Munchkin</ListItem>
            <ListItem>Azul</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4}>
            Some of my favorite games
          </Heading>
          <List>
            <ListItem>Race for the Galaxy</ListItem>
            <ListItem>Scythe</ListItem>
            <ListItem>Keyflower</ListItem>
            <ListItem>The castles of Burgundy</ListItem>
            <ListItem>Istanbul</ListItem>
            <ListItem>7 wonders</ListItem>
            <ListItem>Architects of the West Kingdom</ListItem>
            <ListItem>Orléans</ListItem>
            <ListItem>Mascarade</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4}>
            Simultanious player actions
          </Heading>
          <List>
            <ListItem>BigO(1)</ListItem>
            <ListItem>Mechanisms: card drafting, action selection</ListItem>
            <ListItem>Games: 7 wonders, Race for the galaxy</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4}>
            Deception
          </Heading>
          <List>
            <ListItem>Social and fun</ListItem>
            <ListItem>Mechanisms: secret roles, bluffing, partnerships</ListItem>
            <ListItem>Games: Secret Hitler, Mascarade</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4}>
            Cooperative
          </Heading>
          <List>
            <ListItem>Players vs game</ListItem>
            <ListItem>Problem solving</ListItem>
            <ListItem>Games: Pandemic, Hanabi</ListItem>
          </List>
        </Slide>
        <Slide bgColor="white">
          <BlockQuote>
            <Quote>Sometimes win, sometime lun</Quote>
            <Cite>Hristo Stoichkov</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading size={1}>
            Thank you!
          </Heading>
          <Heading size={3} textColor="white !important">
            Let's play some games!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
