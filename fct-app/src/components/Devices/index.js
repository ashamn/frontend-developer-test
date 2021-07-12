import React, { useState, useEffect } from 'react';
import * as S from './style';
import { constants } from '../../constants';

import { device, notify } from '../../api/device';

export const Devices = (props) => {

    const [deviceCount, setDeviceCount] = useState(0);

    useEffect(() => {
        _connect();
        const intervalId = setInterval(() => {
            _connect();
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const rand = () => Math.floor(Math.random() * (20 - 2 + 1)) + 2;

    const renderCircles = () => {
        let i = 1;
        let spins = [];
        while (deviceCount > 0 && i <= deviceCount) {
            spins.push(<S.Spin time={rand} key={i} />);
            i++;
        }
        return spins;
    }

    const setNotify = () => {

        const { email, token } = props.credentials;
        const toSend = {
            url: 'notify',
            data: {
                email,
                name: constants.NAME,
                repoUrl: constants.REPO_URL,
                message: constants.MESSAGE
            },
            token: token
        }

        notify(toSend).then(data => {
            console.log('data', data);
        }).catch(err => console.log('error', err));
    }

    const _connect = () => {
        device('devices').then(data => {
            setDeviceCount(data.data.devices.length);
        });
    }

    return (
        <S.Container>
            <S.SpinWrapper>
                {renderCircles()}
            </S.SpinWrapper>
            <S.Counter>
                <span>{deviceCount}</span>
                <p>DEVICES</p>
                <p>ONLINE</p>
            </S.Counter>

            <S.Footer>
                <S.Button onClick={() => { setNotify() }} color="white">NOTIFY</S.Button>
                <S.Button onClick={() => { props.setLogout() }} color="dark">LOG OUT</S.Button>
            </S.Footer>
        </S.Container>
    )
}