import React from 'react';

import {
  Deck,
  Heading,
  Image,
  ListItem,
  UnorderedList as List,
  Quote,
  Slide,
  FlexBox,
  Text,
} from 'spectacle';


const theme = {
  colors: {
    primary: 'white', // regular text
    secondary: 'white', // headings
    tertiary: 'black', // background
    quaternary: 'yellow',
  },

  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};

export default () => {
  return (
    <Deck theme={theme}>
      <Slide id="title">
        <FlexBox height="100%" flexDirection="column">
          <Heading>Overview of Modern Board Games</Heading>
          <Image src="images/collection-new.jpg" width={1000} />
        </FlexBox>
      </Slide>

      <Slide id="game-monopoly-1">
        <Heading>☹️ Monopoly ☹️</Heading>
        <FlexBox>
          <Image src="images/not-monopoly.png" width={500} />
        </FlexBox>
      </Slide>

      <Slide id="game-sorry-1">
        <Heading>☹️ Sorry! ☹️</Heading>
        <FlexBox>
          <Image src="images/not-sorry.png" width={500} />
        </FlexBox>
      </Slide>

      <Slide id="game-uno-1">
        <Heading>☹️ Uno ☹️</Heading>
        <FlexBox>
          <Image src="images/not-uno.png" width={500} />
        </FlexBox>
      </Slide>

      <Slide id="game-catan-1">
        <Heading>🙂 Catan 🙂</Heading>
        <FlexBox>
          <Image src="images/catan.jfif" width={700} />
        </FlexBox>
      </Slide>

      <Slide id="game-carcassonne-1">
        <Heading>🙂 Carcassonne 🙂</Heading>
        <FlexBox>
          <Image src="images/carcassonne.jfif" width={700} />
        </FlexBox>
      </Slide>
      
      <Slide id="game-small-world-1">
        <Heading>🙂 Small world 🙂</Heading>
        <FlexBox>
          <Image src="images/small-world.jpg" width={700} />
        </FlexBox>
      </Slide>

      <Slide id="anatomy-of-a-board-game">
        <Heading>Anatomy of a board game</Heading>
        <FlexBox>
          <List>
            <ListItem>Theme</ListItem>
            <ListItem>Mechanisms</ListItem>
            <ListItem>Components</ListItem>
          </List>
        </FlexBox>
      </Slide>

      <Slide id="theme-1">
        <Heading>Theme</Heading>
        <FlexBox>
          <List>
            <ListItem>Where does the game take place?</ListItem>
            <ListItem>What is the game's story?</ListItem>
            <ListItem>Who do players represent in the game world?</ListItem>
          </List>
        </FlexBox>
      </Slide>

      <Slide id="game-blood-rage-1">
        <Heading>Blood rage</Heading>
        <FlexBox>
          <Image src="images/blood-rage.jfif" width={700} />
        </FlexBox>
      </Slide>

      <Slide id="game-feast-for-odin-1">
        <Heading>A Feast for Odin</Heading>
        <FlexBox>
          <Image src="images/feast-for-odin.jfif" width={700} />
        </FlexBox>
      </Slide>

      <Slide id="theme-2">
        <Heading>Theme</Heading>
        <FlexBox>
          <List>
            <ListItem>Both these games are about being vikings</ListItem>
            <ListItem>But they create a completely different experience</ListItem>
          </List>
        </FlexBox>
      </Slide>

      <Slide id="components-1">
        <Heading>Components</Heading>
        <FlexBox>
          <List>  
            <ListItem>What is in the box?</ListItem>
            <ListItem>What is the interace between the players and the game?</ListItem>
          </List>
        </FlexBox>
      </Slide>

      <Slide id="game-ticket-to-ride-1">
        <Heading>Ticket to ride</Heading>
        <FlexBox>
          <Image src="images/ticket-to-ride.jfif" width={700} />
        </FlexBox>
      </Slide>
      
      <Slide id="game-azul-1">
        <Heading>Azul</Heading>
        <FlexBox>
          <Image src="images/azul.jfif" width={700} />
        </FlexBox>
      </Slide>

      <Slide id="game-camel-up-1">
        <Heading> Camel up </Heading>
        <FlexBox>
          <Image src="images/camel-up.jfif" width={700} />
        </FlexBox>
      </Slide>

      <Slide id="components-2">
        <Heading>Components</Heading>
        <FlexBox>
          <List>
            <ListItem>Tactile</ListItem>
            <ListItem>Functional</ListItem>
            <ListItem>Immersive</ListItem>
          </List>
        </FlexBox>
      </Slide>

      <Slide id="mechanisms-1">
        <Heading>Mechanisms</Heading>
        <FlexBox>
          <List>  
            <ListItem>How does the game work?</ListItem>
            <ListItem>How do players interact with the game and each other?</ListItem>
          </List>
        </FlexBox>
      </Slide>

      <Slide id="game-sushi-go-1">
        <Heading>Sushi Go</Heading>
        <FlexBox>
          <Image src="images/sushi-go.jfif" width={700} />
        </FlexBox>
      </Slide>

      <Slide id="game-7-wonders-1">
        <Heading>7 Wonders</Heading>
        <FlexBox>
          <Image src="images/7-wonders.jfif" width={700} />
        </FlexBox>
      </Slide>

      <Slide id="mechanism-card-drafting">
        <Heading>Card drafting</Heading>
        <FlexBox>
          <List>
            <ListItem>Simultaneous play</ListItem>
            <ListItem>Opportunity cost of the cards you pass</ListItem>
          </List>
        </FlexBox>
      </Slide>

      <Slide id="game-barenpark-1">
        <Heading>Barenpark</Heading>
        <FlexBox>
          <Image src="images/barenpark.jfif" width={700} />
        </FlexBox>
      </Slide>

      <Slide id="mechanism-tile-laying">
        <Heading>Tile laying</Heading>
        <FlexBox>
          <List>
            <ListItem>Spacial thinking</ListItem>
            <ListItem>Opportunity cost of where to place</ListItem>
          </List>
        </FlexBox>
      </Slide>

      <Slide id="game-stone-age-1">
        <Heading>Stone age</Heading>
        <FlexBox>
          <Image src="images/stone-age.jfif" width={700} />
        </FlexBox>
      </Slide>

      <Slide id="mechanism-worker-placement">
        <Heading>Worker Placement</Heading>
        <FlexBox>
          <List>
            <ListItem>Decreasing number of options</ListItem>
            <ListItem>Timing and sequencing</ListItem>
          </List>
        </FlexBox>
      </Slide>

      <Slide id="game-gizmos-1">
        <Heading>Gizmos</Heading>
        <FlexBox>
          <Image src="images/gizmos.jfif" width={700} />
        </FlexBox>
      </Slide>

      <Slide id="mechanism-tableau-building">
        <Heading>Tableau building</Heading>
        <FlexBox>
          <List>
            <ListItem>Your engine improves over time</ListItem>
            <ListItem>Is your engine better than your opponents?</ListItem>
          </List>
        </FlexBox>
      </Slide>

      <Slide id="game-high-society-1">
        <Heading>High Society</Heading>
        <FlexBox>
          <Image src="images/high-society.jpg" width={700} />
        </FlexBox>
      </Slide>

      <Slide id="mechanism-auctions">
        <Heading>Auctions</Heading>
        <FlexBox>
          <List>
            <ListItem>What is the value of a given thing?</ListItem>
            <ListItem>Do I need it? Can I let you get it?</ListItem>
          </List>
        </FlexBox>
      </Slide>

      <Slide id="game-new-york-slice-1">
        <Heading>New York Slice</Heading>
        <FlexBox>
          <Image src="images/new-york-slice.jfif" width={700} />
        </FlexBox>
      </Slide>

      <Slide id="mechanism-i-cut-you-choose">
        <Heading>I cut you choose</Heading>
        <FlexBox>
          <List>
            <ListItem>What do you need to get the most?</ListItem>
            <ListItem>Can I trick you into thinking something is more valuable?</ListItem>
          </List>
        </FlexBox>
      </Slide>

      <Slide id="game-quacks-1">
        <Heading>Quacks of Quedlinburg</Heading>
        <FlexBox>
          <Image src="images/quacks.jfif" width={700} />
        </FlexBox>
      </Slide>
      
      <Slide id="mechanism-push-your-luck">
        <Heading>Push your luck</Heading>
        <FlexBox>
          <List>
            <ListItem>Risk vs reward</ListItem>
            <ListItem>Player agency vs outcome randomness</ListItem>
          </List>
        </FlexBox>
      </Slide>

      <Slide id="game-el-dorado-1">
        <Heading>Quest for El Dorado</Heading>
        <FlexBox>
          <Image src="images/el-dorado.jpg" width={700} />
        </FlexBox>
      </Slide>
      
      <Slide id="mechanism-deck-building">
        <Heading>Deck building</Heading>
        <FlexBox>
          <List>
            <ListItem>Engine building with a built-in randomness</ListItem>
            <ListItem>Use the card to get points or to buy more cards?</ListItem>
          </List>
        </FlexBox>
      </Slide>

      <Slide id="game-scythe-1">
        <Heading>Scythe</Heading>
        <FlexBox>
          <Image src="images/scythe.jfif" width={700} />
        </FlexBox>
      </Slide>

      <Slide id="mechanism-area-control">
        <Heading>Area control</Heading>
        <FlexBox>
          <List>
            <ListItem>Access to resources / other areas</ListItem>
            <ListItem>Scoring for number of areas</ListItem>
          </List>
        </FlexBox>
      </Slide>

      <Slide id="game-yokohama-1">
        <Heading>Yokohama</Heading>
        <FlexBox>
          <Image src="images/yokohama.jfif" width={700} />
        </FlexBox>
      </Slide>

      <Slide id="mechanism-contracts">
        <Heading>Contracts</Heading>
        <FlexBox>
          <List>
            <ListItem>Gather and manage resources</ListItem>
            <ListItem>Fulfil contracts for points</ListItem>
          </List>
        </FlexBox>
      </Slide>

      <Slide id="game-santorini-1">
        <Heading>Santorini</Heading>
        <FlexBox>
          <Image src="images/santorini.jfif" width={700} />
        </FlexBox>
      </Slide>
      
      <Slide id="mechanism-full-information">
        <Heading>Abstract strategy</Heading>
        <FlexBox>
          <List>
            <ListItem>Full information</ListItem>
            <ListItem>Thinking several turns ahead</ListItem>
          </List>
        </FlexBox>
      </Slide>


      <Slide id="game-teotihuacan-1">
        <Heading>Teotihuacan</Heading>
        <FlexBox>
          <Image src="images/teotihuacan.jfif" width={700} />
        </FlexBox>
      </Slide>

      <Slide id="mechanism-rondel">
        <Heading>Rondel</Heading>
        <FlexBox>
          <List>
            <ListItem>Action selection with spacial limitations</ListItem>
            <ListItem>sequencing</ListItem>
          </List>
        </FlexBox>
      </Slide>

      <Slide id="game-fluxx-1">
        <Heading>Fluxx</Heading>
        <FlexBox>
          <Image src="images/fluxx.jfif" width={700} />
        </FlexBox>
      </Slide>

      <Slide id="mechanism-party-games">
        <Heading>Party games</Heading>
        <FlexBox>
          <List>
            <ListItem>Emphasis on randomness and fun</ListItem>
            <ListItem>Easy rules and quick playtime</ListItem>
          </List>
        </FlexBox>
      </Slide>

      <Slide id="game-pandemic-1">
        <Heading>Pandemic</Heading>
        <FlexBox>
          <Image src="images/pandemic.jfif" width={700} />
        </FlexBox>
      </Slide>

      <Slide id="cooperative">
        <Heading>Cooperative</Heading>
        <FlexBox>
          <List>
            <ListItem>Players vs the game</ListItem>
            <ListItem>Problem solving</ListItem>
            <ListItem>Team building</ListItem>
          </List>
        </FlexBox>
      </Slide>

      <Slide id="game-letter-jam-1">
        <Heading>Letter Jam</Heading>
        <FlexBox>
          <Image src="images/letter-jam.jfif" width={700} />
        </FlexBox>
      </Slide>

      <Slide id="game-just-one-1">
        <Heading>Just One</Heading>
        <FlexBox>
          <Image src="images/just-one.png" width={700} />
        </FlexBox>
      </Slide>      

      <Slide id="mechanism-word-games">
        <Heading>Word games</Heading>
        <FlexBox>
          <List>
            <ListItem>Language skills</ListItem>
            <ListItem>Associations</ListItem>
          </List>
        </FlexBox>
      </Slide>

      <Slide id="game-dixit-1">
        <Heading>Dixit</Heading>
        <FlexBox>
          <Image src="images/dixit.jfif" width={700} />
        </FlexBox>
      </Slide>

      <Slide id="mechanism-story-telling">
        <Heading>Story telling</Heading>
        <FlexBox>
          <List>
            <ListItem>Creativity</ListItem>
            <ListItem>Guessing how others think</ListItem>
          </List>
        </FlexBox>
      </Slide>

      <Slide id="game-secret-hitler-1">
        <Heading>Secret Hitler</Heading>
        <FlexBox>
          <Image src="images/secret-hitler.jfif" width={700} />
        </FlexBox>
      </Slide>
      
      <Slide id="mechanism-social-deduction">
        <Heading>Social deduction</Heading>
        <FlexBox>
          <List>
            <ListItem>Hidden roles</ListItem>
            <ListItem>Bluffing and deception</ListItem>
          </List>
        </FlexBox>
      </Slide>

      <Slide id="classic-board-games">
        <Heading>Classic board games</Heading>
        <List>
          <ListItem>Chess - perfect information, abstract strategy</ListItem>
          <ListItem>Backgammon - roll and move, abstract strategy</ListItem>
          <ListItem>Scrabble - hand management, word game</ListItem>
          <ListItem>Activity - acting, party game</ListItem>
        </List>
      </Slide>
      
      <Slide id="game-sorry-breakdown">
        <Heading> Sorry!</Heading>
        <FlexBox height="100%">
          <Image src="images/sorry.jpeg" width={500} />
          <List textColor="black">
            <ListItem>Theme: abstract</ListItem>
            <ListItem>Components: dies and meeples</ListItem>
            <ListItem>Mechanisms: roll and move, take that</ListItem>
          </List>
        </FlexBox>
      </Slide>
      
      <Slide id="game-monopoly-breakdown">
        <Heading>Monopoly</Heading>
        <FlexBox height="100%">
          <Image src="images/monopoly.jpg" width={500} />
          <List>
            <ListItem>Theme: economic</ListItem>
            <ListItem>Components: board, cards, dies and meeples</ListItem>
            <ListItem>Mechanisms: roll and move, set collection, player elimination, auctioning</ListItem>
          </List>
        </FlexBox>
      </Slide>            
      
      <Slide id="stoichkov-qoute">
        <FlexBox height="100%" flexDirection="column">
        <Quote>Sometimes win, sometime lun</Quote>
        <Text style={{textAlign:'right', width:'100%', marginTop:0, marginRight:'25%' }}>--Hristo Stoichkov</Text>
        </FlexBox>
      </Slide>
      
      <Slide id="thank-you">
        <FlexBox height="100%" flexDirection="column">
          <Heading>Thank you!</Heading>
          <Heading>Questions?</Heading>
        </FlexBox>
      </Slide>
    </Deck>
  );
};