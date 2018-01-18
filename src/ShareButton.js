import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';


const style = {
    margin: 12,
    position: "fixed",
    bottom: 0,
    right: 0
};
const ShareButton = () => (
    <div>
        <FloatingActionButton className="material-icons"
                              style={style}
                              onClick={() => window.open('http://www.facebook.com/sharer.php?u=http://app.fitcode.jfddl3.is-academy.pl')}
        >
            <ActionThumbUp/>
        </FloatingActionButton>
    </div>
)
export default ShareButton;