import EuclidCircularBRegularTtf from './../assets/fonts/EuclidCircularB-Regular-WebS.ttf';
import EuclidCircularBRegularWoff2 from './../assets/fonts/EuclidCircularB-Regular-WebS.woff2';
import EuclidCircularBRegularWoff from './../assets/fonts/EuclidCircularB-Regular-WebS.woff';

import EuclidCircularBLightTtf from './../assets/fonts/EuclidCircularB-Light-WebS.ttf';
import EuclidCircularBLightWoff2 from './../assets/fonts/EuclidCircularB-Light-WebS.woff2';
import EuclidCircularBLightWoff from './../assets/fonts/EuclidCircularB-Light-WebS.woff';

import EuclidCircularBBoldTtf from './../assets/fonts/EuclidCircularB-Bold-WebS.ttf';
import EuclidCircularBBoldWoff2 from './../assets/fonts/EuclidCircularB-Bold-WebS.woff2';
import EuclidCircularBBoldWoff from './../assets/fonts/EuclidCircularB-Bold-WebS.woff';

// TODO find out how to type these font face rules properly
const euclidCircularB = {
  fontFamily: 'Font',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    url(${EuclidCircularBRegularWoff2}) format('woff2'),
    url(${EuclidCircularBRegularWoff}) format('woff'),
    url(${EuclidCircularBRegularTtf}) format('ttf')
  `,
};

const euclidCircularBLight = {
  fontFamily: 'Font',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 300,
  src: `
    url(${EuclidCircularBLightWoff2}) format('woff2'),
    url(${EuclidCircularBLightWoff}) format('woff'),
    url(${EuclidCircularBLightTtf}) format('ttf')
  `,
};

const euclidCircularBBold = {
  fontFamily: 'Font',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `
    url(${EuclidCircularBBoldWoff2}) format('woff2'),
    url(${EuclidCircularBBoldWoff}) format('woff'),
    url(${EuclidCircularBBoldTtf}) format('ttf')
  `,
};

export default [euclidCircularB, euclidCircularBLight, euclidCircularBBold];
