import React, { Component } from 'react';
import MemeTile from '../components/MemeTile';

class MemesIndexContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      memes: []
    };
  }

  componentDidMount() {
    // fetch('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=a56c181e09a24893a8e8954b2ac9336f')
      fetch('http://api.giphy.com/v1/gifs/feqkVgjJpYtjy?api_key=a56c181e09a24893a8e8954b2ac9336f')

    .then(response => {
      return response.json();
    })
    .then(body => {
      this.setState({ memes: body})
      console.log(body)
    })
  }

  // fetch('http://api.giphy.com/v1/gifs/random?api_key=a56c181e09a24893a8e8954b2ac9336f')

  render() {
    // let memes = this.state.memes.map((meme, index) => {
    //   return (
    //     <MemeTile
    //       key = {index + 1}
    //       index = {index + 1}
    //       url = {meme.embed_url}
    //       alt = {meme.slug}
    //     />
    //   )
    // })
    console.log(this.state.memes.data)

    let alt;
    let url;
    if ( this.state.memes.data !== undefined) {
      alt = this.state.memes.data.slug
      url = this.state.memes.data.images.original.url;
    } else {
      alt = ''
      url = ''
    }

    console.log(alt)
    console.log(url)

    return (
      <div>
        <h1>Memes</h1>
        <div className="row">
        <img src={`${url}`} alt={`${alt}`}/>
        </div>
      </div>
    )
  }
}

export default MemesIndexContainer;
