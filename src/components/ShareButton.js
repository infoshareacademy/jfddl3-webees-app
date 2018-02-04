import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';

import styles, { webeesColors } from '../styles'

const ShareButton = () => (
    <div>
        <FloatingActionButton
            className="material-icons"
            style={styles.share}
            backgroundColor={webeesColors.darkGreen}
            onClick={() => window.open('http://www.facebook.com/sharer.php?u=http://app.webees.jfddl3.is-academy.pl')}
        >
            <ActionThumbUp />
        </FloatingActionButton>
    </div>
)
export default ShareButton;