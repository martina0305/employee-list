import React from 'react';
import Foto from '../Foto'
import BotonEmpleadoMes from '../BotonEmpleadoMes';
import Avatar from '../Foto';

const CardEmpleado = props => {
    const {
        employeeData,
        handleEmpleadoMesClick,
        empleadoDelMesID,
        handleRemoveEmployee,
        handleEditEmployee
    } = props

    const {name, sector, id, avatar, word} = employeeData
    const isMonthEmployee = empleadoDelMesID === id //Importante

    return (
        <div className={`employee-card ${isMonthEmployee ? 'bg-yellow' : ''}`}>
            <Avatar imageSrc={avatar}/>

            <div>
                <h2 className='is-size-3'>{name}</h2>
                <h3 className='is-family-monospace'>{sector}</h3>
                <h4 className='is-family-monospace'>{word}</h4>
            </div>

            <button className='button is-primary'
                onClick = { () => handleEditEmployee(id) }
            >
                <span className='icon is-small'>
                    <i className='fas fa-edit' />
                </span>
                <span>Editar</span>
            </button>


            <button
                className='button is-danger is-outlined'
                onClick = { () => handleRemoveEmployee(id) }
            >
                <span className='icon is-small'>
                    <i className='fas fa-times' />
                </span>
                <span>Eliminar</span>
            </button>
            {!isMonthEmployee && 
                <BotonEmpleadoMes employeeId={id} handleEmpleadoMesClick={handleEmpleadoMesClick}/>
            }
        </div>
    )
}

export default CardEmpleado