export interface DoctorDetail {
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  description: string;
  image: string;
  education: string;
  treatmentApproach: string;
  workExperience: string;
  skills: string;
  icon: string;
  evaluation: string; 
}

export interface ReviewDetail {
  name: string;
  content: string;
  avatar: string; 
  rating?: number; 
}

export const doctorData: { [key: number]: DoctorDetail } = {
  1: {
    name: 'Ганижанова Айым',
    specialty: 'Кардиолог',
    experience: '6 лет опыта',
    rating: 4.1,
    evaluation: '/doctor/star.png', 
    description: 'Доктор Ганижанова Айым опытный кардиолог и специалист по питанию, стремится к здоровью пищеварительной системы и индивидуальному подходу к лечению. Обладает богатым опытом, использует новейшие достижения для обеспечения комплексного и эффективного ухода.',
    image: '/doctor/doc.png',
    education: 'Доктор Ганижанова Айым имеет степень доктора медицинских наук и сертификаты в области кардиологии, что демонстрирует её стремление оставаться в авангарде достижений в своей специальности.',
    treatmentApproach: 'Доктор Ганижанова уделяет особое внимание индивидуальному подходу, разрабатывая персонализированные планы лечения на основе истории болезни, образа жизни и предпочтений пациентов. Она создает поддерживающую среду, в которой пациенты активно участвуют в принятии важных решений о своём медицинском обслуживании.',
    workExperience: 'Доктор Ганижанова обладает более пятилетним опытом в успешной диагностике и лечении различных сердечно-сосудистых заболеваний, что позволяет ей заслуженно наслаждаться признанием благодаря выдающимся результатам своей практики.',
    skills: 'Доктор Ганижанова владеет эндоскопией, колоноскопией, оценкой питания и передовыми методами лечения. Она предлагает услуги для улучшения здоровья сердечно-сосудистой системы и общего состояния здоровья.',
    icon: '/doctor/docSite.png',
  }
};

export const reviews: { [key: number]: ReviewDetail[] } = {
  1: [
    { 
      name: 'Мухамед Ганижанов',
      avatar: '/mission/client3.png',
      content: 'Большое спасибо Айым Ганижанова за работу и помощь! Всего за два приема помогла разрешить мою проблему, дала работающие инструменты, как себе помочь, помогла прийти к тому, что сама я не могла до этого понять. Очень чуткий, внимательный и слушающий психолог!' 
    },
    { 
      name: 'Мухаммад Ганижанов',
      avatar: '/mission/client1.png',
      content: 'Большое спасибо Айым Ганижанова за работу и помощь! Всего за два приема помогла разрешить мою проблему, дала работающие инструменты, как себе помочь, помогла прийти к тому, что сама я не могла до этого понять. Очень чуткий, внимательный и слушающий психолог!.' 
    },
    { 
      name: 'Мухаммад Ганижанов',
      avatar: '/mission/client2.png',
      content: 'Большое спасибо Айым Ганижанова за работу и помощь! Всего за два приема помогла разрешить мою проблему, дала работающие инструменты, как себе помочь, помогла прийти к тому, что сама я не могла до этого понять. Очень чуткий, внимательный и слушающий психолог!.' 
    }
  ]
};
