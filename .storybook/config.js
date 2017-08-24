import 'moment-timezone';
import moment from 'moment';
import {configure, setAddon} from '@storybook/react';
import infoAddon, {setDefaults} from '@storybook/addon-info';
import '../scss/styles.scss';

moment.tz.setDefault('Asia/Seoul');

setDefaults({inline: true, header: false, maxPropsIntoLine: 1});
setAddon(infoAddon);

function loadStories() {
    require('./stories/SectionCover');
    require('./stories/Countdown');
    require('./stories/SpeakerCard');
    require('./stories/SpeakerCardList');
}

configure(loadStories, module);
