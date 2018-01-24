import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
    marginRight: 20,
};

/**
 * Default size and `mini` FABs, in primary (default), `secondary` and `disabled` colors.
 */
const FloatingActionButtonExampleSimple = (props) => (
    <div>
        <FloatingActionButton
            mini={true}
            style={style}
            onClick={props.onBtnClick}
        >
            <ContentAdd />
        </FloatingActionButton>
    </div>
);

export default FloatingActionButtonExampleSimple;