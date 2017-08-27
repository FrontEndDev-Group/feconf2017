import React from 'react';
import {storiesOf} from '@storybook/react';
import data from '../../data';
import Section, {SectionHeader, SectionBody} from '../../components/Section';
import SpeakerCard from '../../components/SpeakerCard';
import SpeakerCardList from '../../components/SpeakerCardList';

const {introduction, speakers} = data;

storiesOf('Section', module)
    .addWithInfo('Default', '', () =>  (
        <Section style={{padding: '100px 0'}}>
            <SectionHeader title={speakers.title} subTitle={speakers.subTitle}/>
            <SectionBody>
                <SpeakerCardList>
                    {speakers.list.map((speaker, index) =>
                        <SpeakerCard
                            key={index}
                            picture={speaker.picture}
                            name={speaker.name}
                            company={speaker.company}
                            desc={speaker.desc}
                        />
                    )}
                </SpeakerCardList>
            </SectionBody>
        </Section>
    ))
    .addWithInfo('Card', '', () =>  (
        <Section style={{padding: '100px 0'}}>
            <SectionHeader type="card" title={speakers.title} subTitle={speakers.subTitle}>
                <div dangerouslySetInnerHTML={{__html: introduction.message}}/>
            </SectionHeader>
            <SectionBody>
                <SpeakerCardList>
                    {speakers.list.map((speaker, index) =>
                        <SpeakerCard
                            key={index}
                            picture={speaker.picture}
                            name={speaker.name}
                            company={speaker.company}
                            desc={speaker.desc}
                        />
                    )}
                </SpeakerCardList>
            </SectionBody>
        </Section>
    ));
