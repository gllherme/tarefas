import React from 'react'
import propTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button
                text={showAdd ? 'Fechar' : 'Adicionar'}
                color={showAdd ? 'red' : 'green'}
                onClick={onAdd}
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Tarefas',
}

Header.propTypes = {
    tite: propTypes.string,
}
export default Header
