import React, { Component } from 'react'
import './styles.scss';

const apps = [
  {
    name: 'VLC Stream & remote',
    img: 'http://lorempixel.com/g/400/300',
    desc: 'A Remote controller app for android that helps you to control VLC media player using your android phone',
    playStore: 'https://play.google.com/store/apps/details?id=tuple.me.vlcremote',
    more: ''
  },
  {
    name: 'Doodly : system cleaner',
    img: 'http://lorempixel.com/g/400/300',
    desc: 'An utility app for android. (cache cleaner, app manager, duplicate files remover, QR scanner, etc...)',
    playStore: 'https://play.google.com/store/apps/details?id=tuple.me.dtools',
    more: ''
  },
  {
    name: 'SASS tutorial',
    img: 'http://lorempixel.com/g/400/300',
    desc: 'A tutorial app for SASS.Provides detailed lessons on the most popular css preprocessor.',
    playStore: 'https://play.google.com/store/apps/details?id=me.tuple.sassreference',
    more: ''
  }
];

function App(props) {
  return (
    <div className="card app border border-success col">
      <img class="card-img-top" src="http://lorempixel.com/g/400/300" alt={props.info.na}></img>
      <div class="card-header">
        {props.info.name}
      </div>
      <div className="card-body">
        <p className="card-text">{props.info.desc}</p>
      </div>
      <div class="card-body card-body--links">
        <a href={props.info.playStore} class="card-link">Open in Playstore</a>
        {/* <a href={props.info.more} class="card-link">More details</a> */}
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
