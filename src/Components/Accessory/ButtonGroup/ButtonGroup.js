import React from 'react';
import Button from './Button/Button';
import ButtonArray from '../../../Data/ButtonArray'

const ButtonGroup = () => {
    
        // Get List Button
        let listButton = ButtonArray.map((btn,index) => {
            return <Button tabName={btn.tabName} NameButton={btn.showName} key={index} />
        })
    
        return (
            <div
            className="btn-pref btn-group btn-group-justified btn-group-lg"
            role="group"
            aria-label="..."
        >
            {listButton}
        </div>
        );
    
}

export default ButtonGroup;