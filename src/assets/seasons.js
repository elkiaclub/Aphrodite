import {s5markers} from "./s5markers";
import {s6markers} from "./s6markers";
export const seasons = [
  {
    name: 'Season 1',
    worldDownloadUrl: 'https://mega.nz/file/LsczlYKR#MdStrFRgQWj43KppPFYxlg4i4ir5O1TX0WGwnIWUYJ4' // partial due to data corruption
  },
  {
    name: 'Season 2',
    worldDownloadUrl: 'https://mega.nz/file/agMyTAgC#hUBXWbejh2Cv-hnSsPyldX6F3BuDzpPt9iKL-91Kerc'
  },
  {
    name: 'Season 3',
    worldDownloadUrl: 'https://mega.nz/file/Ko0RgJCa#cssJoFqgLXr2JmWuMEsBKv0mGvoGBWSGAJNRJYNWAqI'
  },
  {
    name: 'Season 4',
    worldDownloadUrl: 'https://mega.nz/file/mgdiXIBZ#UkccTCVuTU0b-pKLFfBS9TTP8pTZd_ZdpJrnsDVt5t4',
    date: 'Ended June 22nd 2020 ',
  },
  {
    name: 'Season 5',
    date: 'Started June 24th 2020 - Ended June 11th 2021',
    worldDownloadUrl: 'https://mega.nz/file/gE0xjayS#iOil1rvKY8yhN9gzsUPqM2YoFfuKoLEhFiTWWkJ6xLU',
    dataUrl: '//olympus.elkia.club/s5mapData/web/data/',
    locations: s5markers,
  },
  {
    name: 'Season 6',
    description: 'Used a custom preset for wild floating islands that presented a very challenging terrain.',
    date: 'Started June 11th 2021 - Ended June 11th 2021',
    dataUrl: '//olympus.elkia.club/s6mapData/web/data/',
    worldDownloadUrl: 'https://mega.nz/file/II1W0ApR#Z8CfaunLHqlriJl_QuBznZRm8Dfn84U5mq7i3f95Yps',
    locations: s6markers,

  },
  {
    name: 'Season 7',
    description: '1.18 world generation!',
    date: 'Started December 3rd 2021 - Currently Active',
  }
]
