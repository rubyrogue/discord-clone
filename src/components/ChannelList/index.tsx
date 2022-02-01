import React from 'react';
import {Container, Category, AddCategoryIcon} from './styles';
import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
    return (
    <Container>
        <Category>
            <span>Text Channels</span>
            <AddCategoryIcon/>
        </Category>
        <ChannelButton channelName="free chat"/>
        <ChannelButton channelName="hots"/>
        <ChannelButton channelName="RPG"/>
        <ChannelButton channelName="hearthstone"/>
    </Container>
    );
};

export default ChannelList;