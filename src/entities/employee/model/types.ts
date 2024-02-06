export type Employee = {
    id: number;
    name: string;
    photo: string;
    phone: string;
    gender: 'Женщина' | 'Мужчина';
    position: string;
    stack: string[];
    birthdate: string;
    dateOfEmployment: string;
}

export type Position = 'Frontend-разработчик' |
'Backend-разработчик' |
'Аналитик' |
'Менеджер' |
'Дизайнер' 

export type Gender = 'Мужчина' | 'Женщина'

export type Stack = Array<'CSharp' | 
'React' | 
'Java' | 
'PHP' | 
'Figma' | 
'Word'>