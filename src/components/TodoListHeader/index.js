import React from 'react';
import { FlexBox } from '../../globalStyles';
import { Heading } from './TodoListHeader.elements';

const Header = () => {
    return (
        <FlexBox justifyContent="space-between">
            <Heading>TODO</Heading>
        </FlexBox>
    );
}
 
export default Header;