import React from 'react';
import {Container, Messages, InputWrapper, Input, InputIcon} from './styles';
import ChannelMessage, {Mention} from '../ChannelMessage';

const ChannelData: React.FC = () => {
    return (
    <Container>
        <Messages>
            <ChannelMessage 
               author="Nikaido"
               date="29/08/2021"
               content="Today is my birthday!" />
            <ChannelMessage 
               author="Yumeko"
               date="29/08/2021"
               content={
                   <>
                        <Mention>@Nikaido</Mention>, me carrega no HotS de novo, por favor!
                   </>
               }hasMention />
            <ChannelMessage 
               author="Lirin"
               date="29/08/2021"
               content="To choose a song, please type -s <SongName - Author>." isBot />
            <ChannelMessage 
               author="Tulhadore"
               date="29/08/2021"
               content="Vamos de Hearthstone?" />
            <ChannelMessage 
               author="Crow"
               date="29/08/2021"
               content="Subindo de level com meu rogue no Ragnarok!" />
            <ChannelMessage 
               author="PoisonySugar"
               date="29/08/2021"
               content={
                   <>
                        <Mention>@Nikaido</Mention>, Happy b-dayyy!!! ;*
                   </>
               }hasMention />
            <ChannelMessage 
               author="Manny"
               date="29/08/2021"
               content={
                   <>
                        <Mention>@Nikaido</Mention>, entrei no Hots. Vamos jogar uma partida ranqueada!!
                   </>
               }hasMention />
            <ChannelMessage 
               author="Brooke"
               date="29/08/2021"
               content={
                   <>
                        <Mention>@Tulhadore</Mention>, opa, já loguei!
                   </>
               }hasMention />
            <ChannelMessage 
               author="Akta"
               date="29/08/2021"
               content="E o RPG hoje?" />
            <ChannelMessage 
               author="Iggy"
               date="29/08/2021"
               content="Vamos iniciar a sessão hoje, às 19:30. Tragam suas fichas." />
            <ChannelMessage 
               author="Nikaido"
               date="29/08/2021"
               content="Aí, sim! 19:30 entrarei de novo. Já atualizei a ficha da minha ladina :D" />
            <ChannelMessage 
               author="Tulhadore"
               date="29/08/2021"
               content="Top!" />
        </Messages>
        <InputWrapper>
        <Input type="text" placeholder="Chat in #free chat" />
        <InputIcon/>
        </InputWrapper>
    </Container>
    );
};

export default ChannelData;