import { s1markers } from './s1markers'
import { s2markers } from './s2markers'
import { s3markers } from './s3markers'
import { s4markers } from './s4markers'
import { s5markers } from './s5markers'
import { s6markers } from './s6markers'

// TODO: Add start & end dates for each season
export const seasons = [
  // TODO: unfuck renders
  // {
  //   name: 'Season 1',
  //   worldDownloadUrl: 'https://mega.nz/file/LsczlYKR#MdStrFRgQWj43KppPFYxlg4i4ir5O1TX0WGwnIWUYJ4', // partial due to data corruption
  //   dataUrl: '//olympus.elkia.club/s1mapData/web/data/',
  //   locations: s1markers,
  // },
  // {
  //   name: 'Season 2',
  //   worldDownloadUrl: 'https://mega.nz/file/agMyTAgC#hUBXWbejh2Cv-hnSsPyldX6F3BuDzpPt9iKL-91Kerc',
  //   // dataUrl: '//olympus.elkia.club/s2mapData/web/data/',
  //   // locations: s2markers,
  // },
  // {
  //   name: 'Season 3',
  //   worldDownloadUrl: 'https://mega.nz/file/Ko0RgJCa#cssJoFqgLXr2JmWuMEsBKv0mGvoGBWSGAJNRJYNWAqI',
  //   dataUrl: '//olympus.elkia.club/s3mapData/web/data/',
  //   locations: s3markers,
  // },
  {
    name: 'Season 4',
    date: 'Ended June 22nd 2020 ',
    worldDownloadUrl: 'https://mega.nz/file/mgdiXIBZ#UkccTCVuTU0b-pKLFfBS9TTP8pTZd_ZdpJrnsDVt5t4',
    dataUrl: '//olympus.elkia.club/s4mapData/web/data/',
    locations: s4markers,
  },
  {
    name: 'Season 5',
    date: 'Started June 24th 2020 - Ended June 11th 2021',
    worldDownloadUrl: 'https://mega.nz/file/VcMwnLIb#2FaWJ-92DKC8fnhW0t7ALBhoU-IRk2BGbrIVYIfTmGM',
    dataUrl: '//olympus.elkia.club/s5mapData/web/data/',
    locations: s5markers,
  },
  {
    name: 'Season 6',
    date: 'Started June 11th 2021 - Ended June 11th 2021',
    // description: 'Used a custom preset for wild floating islands that presented a very challenging terrain.',
    worldDownloadUrl: 'https://mega.nz/file/II1W0ApR#Z8CfaunLHqlriJl_QuBznZRm8Dfn84U5mq7i3f95Yps',
    dataUrl: '//olympus.elkia.club/s6mapData/web/data/',
    locations: s6markers,
  },
  // todo: make a backup & render
  // {
  //   name: 'Season 7',
  //   date: 'Started December 3rd 2021 - Currently Active',
  //   // description: '1.18 world generation!',
  // }
]
