import React, { Component } from 'react'
import './styles.scss';

const apps = [
  {
    name: 'VLC Stream & remote',
    img: '/assets/apps/vlc_stream_remote.png',
    desc: 'A Remote controller app for android that helps you to control VLC media player using your android phone',
    playStore: 'https://play.google.com/store/apps/details?id=tuple.me.vlcremote',
    more: ''
  },
  {
    name: 'Doodly : system cleaner',
    img: '/assets/apps/doodly.png',
    desc: 'An utility app for android. (cache cleaner, app manager, duplicate files remover, QR scanner, etc...)',
    playStore: 'https://play.google.com/store/apps/details?id=tuple.me.dtools',
    more: ''
  },
  {
    name: 'SASS tutorial',
    img: '/assets/apps/sass.png',
    desc: 'A tutorial app for SASS.Provides detailed lessons on the most popular css preprocessor.',
    playStore: 'https://play.google.com/store/apps/details?id=me.tuple.sassreference',
    more: ''
  }
];

function App(props) {
  return (
    <div className="col-md-4 col-sm-12">
      <div className="card app border border-success ">
        <div className="card-img-container">
          <img className="card-img-top" src={props.info.img} alt={props.info.na}></img>
        </div>
        <div className="card-header">
          {props.info.name}
        </div>
        <div className="card-body">
          <p className="card-text">{props.info.desc}</p>
        </div>
        <div className="card-body card-body--links">
          <a href={props.info.playStore} className="card-link">Open in Playstore</a>
          {/* <a href={props.info.more} class="card-link">More details</a> */}
        </div>
      </div>
    </div>
  )
}


export default class index extends Component {
  render() {
    return (
      <div className="app-list container">
        <div className="row">
          {apps.map((app) => (<App info={app} />))}
        </div>
      </div>
    )
  }
}
