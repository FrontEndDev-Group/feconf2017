import React from 'react';
import Head from 'next/head';
import moment from 'moment';
import data from '../data';
import Section from '../components/Section';
import Placard from '../components/Placard';
import Countdown from '../components/Countdown';
import SpeakerCard from '../components/SpeakerCard';
import SpeakerCardList from '../components/SpeakerCardList';
import Schedule from '../components/Schedule';
import GoogleMaps from '../components/GoogleMaps';

const {event, introduction, speakers, schedule, location, sponsors} = data;

const IndexPage = (props) => (
    <div className="wrap index">
        <Head>
            <title>Welcome to FEConf 2017 - FEConf Korea</title>
            <meta name="description" content="FEConf 2017 컨퍼런스 행사의 일정 및 스피커 그리고 각 세션을 소개합니다. 올해 처음 열리는 FEConf! 많은 관심과 성원 부탁드립니다."/>
            <meta name="keywords" content="프론트엔드,프론트엔드개발자,프론트엔드개발자그룹,개발자,프로그래머,마크업,디자이너,컨퍼런스,이벤트,서울,마루180,FrontEnd,Developer,Programmer,Markup,Designer,Conference,Event,Seoul,MARU180"/>
        </Head>
        <div className="index__inner">
            <Section className="index__hero" tag="header">
                <h1 className="index__title blind">{event.title}</h1>
                <Countdown eventTime={moment(event.time).unix()}/>
                <div className="index__poster">
                    <img src="../static/img/img-hero.png" alt="FEConf 2017 포스터 이미지"/>
                    <img src="../static/img/img-astronaut.png" aria-hidden="true"/>
                </div>
            </Section>
            <Placard className="index__introduction" title={introduction.title} subTitle={introduction.subTitle}>
                <div dangerouslySetInnerHTML={{__html: introduction.message}}/>
            </Placard>
            <Section className="index__speakers" title={speakers.title} subTitle={speakers.subTitle}>
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
            </Section>
            <Section className="index__schedule" title={schedule.title} subTitle={schedule.subTitle}>
                <div className="index__background">
                    <img src="../static/img/img-meteor.png" aria-hidden="true"/>
                    <img src="../static/img/img-astronaut2.png" aria-hidden="true"/>
                </div>
                <Schedule schedule={schedule.list}/>
            </Section>
            <Placard className="index__location" title={location.title} subTitle={location.subTitle}>
                <p className="index__place">MARU180</p>
                <p className="index__spot">@Gangnam</p>
                <p className="index__addr">서울 강남구 역삼로 180(역삼동, 790-6)</p>
            </Placard>
            <GoogleMaps lat={location.position[0]} lng={location.position[1]}/>
            <Section className="index__sponsors" title={sponsors.title} subTitle={sponsors.subTitle}>
                <ul className="index__sponsor-list">
                    <li className="index__sponsor-item">
                        <img src="../static/img/logo-lezhin.png" alt="레진엔터테인먼트 대표 이미지"/>
                        <span className="blind">레진엔터테인먼트</span>
                    </li>
                    <li className="index__sponsor-item">
                        <img src="../static/img/logo-naver.png" alt="네이버 대표 이미지"/>
                        <span className="blind">네이버</span>
                    </li>
                </ul>
            </Section>
            <Section className="index__footer" tag="footer">
                <img src="../static/img/logo-feconf.png" alt="FEConf 2017 대표 이미지"/>
            </Section>
        </div>
    </div>
);

export default IndexPage;
