import { navigate } from 'gatsby';
import React, { useEffect } from 'react';

let keyCode = null;
const MyLink = ({ to, state, children }) => {
    const isBrowser = typeof window !== 'undefined';
    useEffect(() => {
        if (isBrowser) {
            window.document.onkeydown = function (evt) {
                keyCode = evt.keyCode;
            };
    
            window.document.onkeyup = function (evt) {
                keyCode = null;
            };
        }
    }, [])
    const redirectToLink = (e) => {
        if (isBrowser) {
            window.localStorage.setItem('my_state', JSON.stringify(state))
            if (keyCode == 17) {
                window.open(`${window.location.origin}${to}`);
            } else {
                navigate(to)
            }
        }
    }

    return (
        <div onClick={(e) => redirectToLink(e)}>
            {children}
        </div>
    );
};

export default MyLink;