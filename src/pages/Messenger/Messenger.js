import React, { useState, useEffect } from 'react'
import ListMessenger from '../../components/Messenger/ListMessenger/ListMessenger'
import MainMessenger from '../../components/Messenger/MainMessenger/MainMessenger'
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import './Messenger.scss'
export default function Messenger() {
    const { id } = useParams();
    let navigate = useNavigate();

    const defaultMess = [
        {
            id: 1,
            theme: '#ff7700',
            users: ['user', 'user1'],
            messengers: [
                { id: 1, user: 'user', content: 'hello there', time: '11:07 PM' },
                { id: 2, user: 'user1', content: 'hi', time: '11:08 PM' },
                { id: 3, user: 'user1', content: 'his', time: '11:08 PM' },
                { id: 4, user: 'user', content: 'how r you been ?', time: '11:09 PM' },
                { id: 5, user: 'user', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:10 PM' },
                { id: 6, user: 'user1', content: "hehe", time: '11:10 PM' },
            ]
        },
        {
            id: 2,
            theme: '#0084ff',
            users: ['user', 'user2'],
            messengers: [
                { id: 1, user: 'user', content: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.', time: '11:07 PM' },
                { id: 2, user: 'user2', content: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.', time: '11:08 PM' },
                { id: 3, user: 'user', content: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.?', time: '11:07 PM' },
                { id: 4, user: 'user2', content: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { id: 5, user: 'user2', content: "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { id: 6, user: 'user2', content: "6 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { id: 7, user: 'user', content: "7 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { id: 8, user: 'user2', content: "ok", time: '11:07 PM' },
            ]
        },
        {
            id: 3,
            theme: '#ff311e',
            users: ['user', 'user3'],
            messengers: [
                { id: 1, user: 'user', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.', time: '11:07 PM' },
                { id: 2, user: 'user3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.', time: '11:08 PM' },
                { id: 3, user: 'user', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.?', time: '11:07 PM' },
                { id: 4, user: 'user3', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { id: 5, user: 'user3', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { id: 6, user: 'user3', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { id: 7, user: 'user', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
            ]
        },
        {
            id: 4,
            theme: '#5e007e',
            users: ['user', 'user4'],
            messengers: [
                { user: 'user', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.', time: '11:07 PM' },
                { user: 'user4', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.', time: '11:08 PM' },
                { user: 'user', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.?', time: '11:07 PM' },
                { user: 'user4', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user4', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user4', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user4', content: "no prblm", time: '11:07 PM' },
            ]
        },
        {
            id: 5,
            theme: '#606060',
            users: ['user', 'user5'],
            messengers: [
                { user: 'user', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.', time: '11:07 PM' },
                { user: 'user5', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.', time: '11:08 PM' },
                { user: 'user', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.?', time: '11:07 PM' },
                { user: 'user5', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user5', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user5', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
            ]
        },
        {
            id: 6,
            theme: '#0084ff',
            users: ['user', 'user6'],
            messengers: [
                { user: 'user', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.', time: '11:07 PM' },
                { user: 'user6', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.', time: '11:08 PM' },
                { user: 'user', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.?', time: '11:07 PM' },
                { user: 'user6', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user6', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user6', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
            ]
        },
        {
            id: 7,
            theme: '#0084ff',
            users: ['user', 'user7'],
            messengers: [
                { user: 'user', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.', time: '11:07 PM' },
                { user: 'user7', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.', time: '11:08 PM' },
                { user: 'user', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.?', time: '11:07 PM' },
                { user: 'user7', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user7', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user7', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user7', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
            ]
        },
        {
            id: 8,
            theme: '#0084ff',
            users: ['user', 'user8'],
            messengers: [
                { user: 'user', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.', time: '11:07 PM' },
                { user: 'user8', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.', time: '11:08 PM' },
                { user: 'user', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.?', time: '11:07 PM' },
                { user: 'user8', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user8', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
            ]
        },
        {
            id: 9,
            theme: '#0084ff',
            users: ['user', 'user9'],
            messengers: [
                { user: 'user', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.', time: '11:07 PM' },
                { user: 'user9', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.', time: '11:08 PM' },
                { user: 'user', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.?', time: '11:07 PM' },
                { user: 'user', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user9', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user9', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
            ]
        },
        {
            id: 10,
            theme: '#0084ff',
            users: ['user', 'user10'],
            messengers: [
                { user: 'user', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.', time: '11:07 PM' },
                { user: 'user10', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.', time: '11:08 PM' },
                { user: 'user', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.?', time: '11:07 PM' },
                { user: 'user10', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user10', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
                { user: 'user', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis blandit. Mattis enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa.", time: '11:07 PM' },
            ]
        },

    ]

   

    const [messengers, setMessenger] = useState(defaultMess);

    useEffect(() => {
        const message = getMessageFromID();
        if (!message) {
            navigate('/')
        }
        return () => {
        }
    }, [])

    const getMessageFromID = () => {
        const message = messengers.find(m => m.id === (+id))
        return message
    }

    return (
        <div className="messenger-container">
            <ListMessenger mainUser={'user'} messengers={messengers} />
            {getMessageFromID() && <MainMessenger mainUser={'user'} messageFromID={getMessageFromID()} />}
        </div>
    )
}
