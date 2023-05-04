import React, { useContext } from 'react';
import { AllContext } from './TodoContext';

const Sidebar: React.FC = () => {
    const { alls, updateAll} = useContext(AllContext);

    const handleEdit = (index: number) => {
        const newAll = { ...alls[index], active: !alls[index].active };
        updateAll(index, newAll);
    };

    return (
        <div className='form-list'>
            <h2 id="Lt">Lista de Tareas</h2>
            <ul>
                {alls.map((all, index) => (
                    <li key={index}>
                        {all.title} - {all.active ? 'Activo' : 'Inactivo'}
                        <button className="btn" onClick={() => handleEdit(index)}>Editar estado</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;