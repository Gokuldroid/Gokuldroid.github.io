import React, { Component } from "react"
import { FiArrowUpRight } from "react-icons/fi"

const apps = [
  {
    name: "VLC Stream & remote",
    img: "/assets/apps/vlc_stream_remote.png",
    desc: "A Remote controller app for android that helps you to control VLC media player using your android phone",
    playStore:
      "https://play.google.com/store/apps/details?id=tuple.me.vlcremote",
    more: "",
  },
  {
    name: "Doodly : system cleaner",
    img: "/assets/apps/doodly.png",
    desc: "An utility app for android. (cache cleaner, app manager, duplicate files remover, QR scanner, etc...)",
    playStore: "https://play.google.com/store/apps/details?id=tuple.me.dtools",
    more: "",
  },
]

const App = ({ info, index }) => (
  <article className="app-project">
    <span className="app-number" aria-hidden="true">
      {String(index + 1).padStart(2, "0")}
    </span>
    <div className="app-art">
      <img className="app-icon" src={info.img} alt={info.name} />
    </div>
    <div className="app-copy">
      <p className="section-label">Android application</p>
      <h3>{info.name}</h3>
      <p>{info.desc}</p>
      <a href={info.playStore} target="_blank" rel="noopener noreferrer">
        Open in Play Store
        <FiArrowUpRight aria-hidden="true" />
      </a>
    </div>
  </article>
)

export default class AppList extends Component {
  render() {
    return (
      <div className="app-list">
        {apps.map((app, index) => (
          <App info={app} index={index} key={app.name} />
        ))}
      </div>
    )
  }
}
