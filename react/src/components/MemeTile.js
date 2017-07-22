import React from 'react';
import { Link } from 'react-router';

const MemeTile = (props) => {
  return (
    <div className="memes-tile small-5 medium-4 large-2 columns end">
      <img src={props.url} alt={props.alt} />
    </div>
  )
}

export default MemeTile;

// let memes = this.state.memes.map((meme, index) => {
//   return (
//     <MemeTile
//       key = {index + 1}
//       index = {index + 1}
//       url = {meme.embed_url}
//       alt = {meme.slug}
//     />
//   )
