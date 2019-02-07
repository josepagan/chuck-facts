import React, { Component } from 'react';
import { css } from '@emotion/core'
import { ClipLoader } from 'react-spinners'
import './App.css';
import axios from 'axios'



const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;


class App extends Component {
  state = {list:[],
    joke:null}
  componentDidMount(){
    axios.get("https://api.chucknorris.io/jokes/categories")
      .then((data)=>this.setState({list: data.data}))
  }
  
  handleClick = genre => () => {
    console.log(genre)
    axios.get(`https://api.chucknorris.io/jokes/random?category=${genre}`)
      .then((data)=>this.setState({joke:{...data}}))
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
          loading={true}
        />
        <Header clickytoTop={this.handleClick} data={this.state.list}/> 
       {this.state.joke ? <JokeDisplay {...this.state.joke.data} /> : null
}       </div>
    );
  }
}

const Header = ({data, clickytoTop})=> (
  <div clasName="footer">
    {data.map((genre)=>
      <GenreButton clicky={clickytoTop} genre={genre}/>
    )}
    </div>
)

const GenreButton = ({clicky, genre}) => 
  <div className="genreButton"
    onClick={clicky(genre)}>{genre}</div>


  const JokeDisplay = ({value}) =>{
    console.log(value)
    return(
      <div>
        <h1>{value}</h1>
      </div>
    )
  }























export default App;
