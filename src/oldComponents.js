
  const Header = ({clickytoTop, data})=> (
    <div clasName="footer">
      {data.map((genre)=>
        <div className="genreButton" onClick={clickytoTop(genre)}>
          {genre} 
      </div>)}</div>
  )
class GenreButton extends Component {
  handleClick = () =>{
    this.props.clicky(this.props.genre)
  }
  render(){
    return(
      <div className="genreButton" onClick={this.handleClick}>{this.props.genre}</div>
    )
  }
}
