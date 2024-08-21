import { createSlice } from '@reduxjs/toolkit'

interface IPlayerState {
  currentSong: any
}

const initialState: IPlayerState = {
  currentSong: {
    name: '与我无关',
    id: 1413585838,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 30116848,
        name: '阿冗',
        tns: [],
        alias: []
      }
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: '',
    fee: 8,
    v: 28,
    crbt: null,
    cf: '',
    al: {
      id: 84664836,
      name: '与我无关',
      picUrl:
        'https://p1.music.126.net/x-jReyGkM5OTKUEtTqXGoA==/109951164597332931.jpg',
      tns: [],
      pic_str: '109951164597332931',
      pic: 109951164597332930
    },
    dt: 240000,
    h: {
      br: 320002,
      fid: 0,
      size: 9602656,
      vd: -36278,
      sr: 44100
    },
    m: {
      br: 192002,
      fid: 0,
      size: 5761611,
      vd: -33747,
      sr: 44100
    },
    l: {
      br: 128002,
      fid: 0,
      size: 3841088,
      vd: -32102,
      sr: 44100
    },
    sq: {
      br: 828995,
      fid: 0,
      size: 24869870,
      vd: -36272,
      sr: 44100
    },
    hr: null,
    a: null,
    cd: '01',
    no: 1,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 0,
    s_id: 0,
    mark: 8192,
    originCoverType: 1,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 28,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    single: 0,
    noCopyrightRcmd: null,
    mv: 0,
    rtype: 0,
    rurl: null,
    mst: 9,
    cp: 0,
    publishTime: 1577894400000
  }
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {}
})

export default playerSlice.reducer
