/* eslint-disable @next/next/no-img-element */

import { NextPage } from 'next';
import React from 'react';
import { Task } from '../types/Task';
import moment from 'moment';

type ItemProps = {
    task: Task,
    selectTaskToEdit(t: Task): void
}

export const Item: NextPage<ItemProps> = ({ task, selectTaskToEdit }) => {

    const geDataText = (finishDate: string | undefined, previsionDate: string) => {
        if (finishDate) {
            return `Concluído em: ${moment(finishDate).format('DD/MM/yyyy')}`;
        }
        return `Previsão em: ${moment(previsionDate).format('DD/MM/yyyy')}`;
    }

    return (
        <div className={"container-item" + (task.finishDate ? "" : " ativo")}
            onClick={_ => task.finishDate ? null : selectTaskToEdit(task)}>
            <img className='img' src={task.finishDate ? 'img/checked.svg' : 'img/not-checked.svg'}
                alt={task.finishDate ? 'Atividade concluída' : 'Atividade ativa'} />
            <div>
                <p className={task.finishDate ? "Concluída" : ""}>{task.name}</p>
                <span>{geDataText(task.finishDate, task.previsionDate)}</span>
            </div>
        </div>
    );
}