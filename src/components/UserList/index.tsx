import React from 'react';
import {Container, User, Avatar, Role} from './styles';

interface UserProps{
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''}/>
            <strong>{nickname}</strong>
            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return (
    <Container>
        <Role>Available - 1</Role>
        <UserRow nickname="Nikaido"/>

        <Role>Offline - 16</Role>
        <UserRow nickname="Lirin" isBot/>
        <UserRow nickname="Ackerman"/>
        <UserRow nickname="Akta"/>
        <UserRow nickname="Alessa"/>
        <UserRow nickname="Brooke"/>
        <UserRow nickname="Beanny"/>
        <UserRow nickname="Caiman"/>
        <UserRow nickname="Crow"/>
        <UserRow nickname="Gingery"/>
        <UserRow nickname="HellGirl"/>
        <UserRow nickname="Iggy"/>
        <UserRow nickname="Manny"/>
        <UserRow nickname="PoisonySugar"/>
        <UserRow nickname="Ruby"/>
        <UserRow nickname="Tulhadore"/>
        <UserRow nickname="Zorg"/>
    </Container>
    );
};

export default UserList;