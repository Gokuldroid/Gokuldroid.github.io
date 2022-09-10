import React, { Component } from "react"
import "./styles.scss"

const apps = [
  {
    name: "VLC Stream & remote",
    img: "/assets/apps/vlc_stream_remote.png",
    desc:
      "A Remote controller app for android that helps you to control VLC media player using your android phone",
    playStore:
      "https://play.google.com/store/apps/details?id=tuple.me.vlcremote",
    more: "",
  },
  {
    name: "Doodly : system cleaner",
    img: "/assets/apps/doodly.png",
    desc:
      "An utility app for android. (cache cleaner, app manager, duplicate files remover, QR scanner, etc...)",
    playStore: "https://play.google.com/store/apps/details?id=tuple.me.dtools",
    more: "",
  },
  {
    name: "SASS tutorial",
    img: "/assets/apps/sass.png",
    desc:
      "A tutorial app for SASS.Provides detailed lessons on the most popular css preprocessor.",
    playStore:
      "https://play.google.com/store/apps/details?id=me.tuple.sassreference",
    more: "",
  },
]

function App(props) {
  return (
    <div className="row card flex-row mb-3 app">
        <div className="col-3">
          <div className="app-image-container p-3">
            <img
              className="app-image p-5"
              src={props.info.img}
              alt={props.info.na}
            ></img>
          </div>
        </div>
        <div className="col-9 card-body app-info">
          <div className="card-header">{props.info.name}</div>
          <div className="card-body">
            <p className="card-text">{props.info.desc}</p>
          </div>
          <div className="card-body card-body--links">
            <a href={props.info.playStore} className="card-link">
              Open in Playstore
            </a>
          </div>
        </div>
    </div>
  )
}

export default class index extends Component {
  render() {
    return (
      <div className="app-list container">
        {apps.map(app => (
          <App info={app} key={app.name} />
        ))}
      </div>
    )
  }
}
