import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import api from '../../services/api';

import './styles.css';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

    function createNewConnection() {
        api.post('/connections', {
            user_id: teacher.id,
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>{teacher.bio}</p>

            <div className="teacher-schedule">
                <div className="day-schedule">
                    <div className="label-schedule">
                        <p>Dia</p>
                        <h4> Segunda </h4>
                    </div>
                    <div className="label-schedule">
                        <p>Horário</p>
                        <h4>8h - 18h</h4>
                    </div>                    
                </div>

                <div className="day-schedule">
                    <div className="label-schedule">
                        <p>Dia</p>
                        <h4>Segunda</h4>
                    </div>
                    <div className="label-schedule">
                        <p>Horário</p>
                        <h4>8h - 18h</h4>
                    </div>                    
                </div>

                <div className="day-schedule">
                    <div className="label-schedule">
                        <p>Dia</p>
                        <h4>Segunda</h4>
                    </div>
                    <div className="label-schedule">
                        <p>Horário</p>
                        <h4>8h - 18h</h4>
                    </div>                    
                </div>

                <div className="day-schedule">
                    <div className="label-schedule">
                        <p>Dia</p>
                        <h4>Segunda</h4>
                    </div>
                    <div className="label-schedule">
                        <p>Horário</p>
                        <h4>8h - 18h</h4>
                    </div>                    
                </div>

                <div className="day-schedule">
                    <div className="label-schedule">
                        <p>Dia</p>
                        <h4>Segunda</h4>
                    </div>
                    <div className="label-schedule">
                        <p>Horário</p>
                        <h4>8h - 18h</h4>
                    </div>                    
                </div>
            </div>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {teacher.cost}</strong>
                </p>
                <a 
                    target="black"
                    onClick={createNewConnection} 
                    href={`http://wa.me/${teacher.whatsapp}`}
                >
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </a>

            </footer>
        </article>
    );
}

export default TeacherItem;