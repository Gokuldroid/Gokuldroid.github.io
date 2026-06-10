import React, { Component } from "react"

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
  {
    name: "SASS tutorial",
    img: "/assets/apps/sass.png",
    desc: "A tutorial app for SASS.Provides detailed lessons on the most popular css preprocessor.",
    playStore:
      "https://play.google.com/store/apps/details?id=me.tuple.sassreference",
    more: "",
  },
]

const App = ({ info }) => (
  <div className="card-surface flex flex-col overflow-hidden sm:flex-row">
    <div className="flex shrink-0 items-center justify-center bg-accent-soft p-6 sm:w-44">
      <img className="h-24 w-24 object-contain" src={info.img} alt={info.name} />
    </div>
    <div className="flex flex-1 flex-col p-5">
      <p className="font-semibold text-accent">{info.name}</p>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {info.desc}
      </p>
      <a
        href={info.playStore}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 self-start text-sm font-medium text-accent transition-colors hover:text-accent-strong"
      >
        Open in Play Store →
      </a>
    </div>
  </div>
)

export default class AppList extends Component {
  render() {
    return (
      <div className="flex flex-col gap-4">
        {apps.map(app => (
          <App info={app} key={app.name} />
        ))}
      </div>
    )
  }
}
