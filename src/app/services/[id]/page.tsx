'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { serviceDetails } from '@/data/servicesData';

const ServicePage = () => {
  const { id } = useParams(); // Получаем id из URL

  // Убедимся, что id является строкой, прежде чем использовать parseInt
  const serviceId = Array.isArray(id) ? id[0] : id;
  const service = serviceId ? serviceDetails[parseInt(serviceId)] : null;

  if (!service) {
    return <div>Услуга не найдена</div>;
  }

  return (
    <div>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
    </div>
  );
};

export default ServicePage;
