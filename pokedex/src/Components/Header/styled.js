import styled from 'styled-components';
import {Nav} from "react-bootstrap";


export const NavLink = styled(Nav)`
    color: #ffd500;
    font-family: 'Press Start 2P', cursive;;
    font-size: 1.5em;
    padding-left: 30px;
    @media (min-device-width: 320px) and (max-device-width: 420px) {
        font-size: 1.2em;
        padding-left: 0px;
    }
`
export const NavLinkHome = styled(Nav)`
    color: #ffd500;
    font-family: "Pokemon Solid";
    font-size: 3.5em;
    margin-bottom: 20px;
    padding-left: 30px;
    @media (min-device-width: 320px) and (max-device-width: 420px) {
        font-size: 3em;
        padding-left: 0px;
    }
`