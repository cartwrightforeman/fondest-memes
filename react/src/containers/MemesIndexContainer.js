import React, { Component } from 'react';
import MemeTile from '../components/MemeTile';

class MemesIndexContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      memes: [],
      imageURL: 'why'
    };

    this.handleClick = this.handleClick.bind(this)
    this.sendToRails = this.sendToRails.bind(this)
  }

  componentDidMount() {
    // fetch('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=a56c181e09a24893a8e8954b2ac9336f')
    // fetch('http://api.giphy.com/v1/gifs/random?api_key=a56c181e09a24893a8e8954b2ac9336f')
    fetch('http://api.giphy.com/v1/gifs/random?rating=g&api_key=a56c181e09a24893a8e8954b2ac9336f')
    // fetch('http://api.giphy.com/v1/gifs/feqkVgjJpYtjy?api_key=a56c181e09a24893a8e8954b2ac9336f')

    .then(response => {
      return response.json();
    })
    .then(body => {
      this.setState({ memes: body })
      console.log(body)
    })
  }

  sendToRails() {
    let data = {
      meme: {
        url: this.state.imageURL
      }
    };
    let jsonStringData = JSON.stringify(data);

    fetch('/api/v1/static_pages', {
      method: 'POST',
      body: jsonStringData
    })
    .then(response => response.json())
    .then(body => {
      console.log(body)
      console.log('yo, the button, the send to rails, the send to... blaurugn!')
    })
  }

//   sendToRails(formPayload){
//   fetch('/api/v1/static_pages', {
//     method: 'POST',
//     body: JSON.stringify(formPayload)
//   }).then(response => {
//     let newGif = response.json()
//     return newGif
//   }).then(newGif => {
//     debugger;
//     this.setState({ gifs: [...this.state.gifs, newGif] })
//   })
// }

  handleClick() {
    //will send the email
    this.setState({ imageURL: this.state.memes.data.images.original.url})
    this.sendToRails()
  }

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

    // works with single image
    // let alt;
    // let url;
    // if ( this.state.memes.data !== undefined) {
    //   alt = this.state.memes.data.slug
    //   url = this.state.memes.data.images.original.url;
    // } else {
    //   alt = ''
    //   url = ''
    // }

    let alt;
    let url;
    if ( this.state.memes.data !== undefined) {
      // alt = this.state.memes.data.slug
      console.log(this.state.memes.data)
      url = this.state.memes.data.image_original_url;
    } else {
      alt = ''
      url = ''
    }

    return (
      <div>
        <h1>Memes</h1>
        <div className="row">
          <div className="col meme">
            <img src={`${url}`} alt={`${alt}`} className="z-depth-2"/> <br></br>
            <a className="waves-effect waves-light btn" href='/memes'>New Fondness</a>
            <a className="waves-effect waves-light btn" onClick={this.handleClick}>Fondest Meme</a>
          </div>
        </div>
      </div>
    )
  }
}

export default MemesIndexContainer;
