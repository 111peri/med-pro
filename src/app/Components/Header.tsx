"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { serviceDetails } from '@/data/servicesData'; 
import chevronIcon from "../../../public/chevronIcon.png";
import kg from "../../../public/kg.png";
import ru from "../../../public/ru.png";

// Интерфейс для услуги
interface ServiceDetails {
  title: any;
  image: any;
  description: any;
}

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState<ServiceDetails[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [activePage, setActivePage] = useState('Главная'); // Стейт для отслеживания активной страницы
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Управление бургер-меню

  // Фильтрация по поисковому запросу
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    setHasSearched(true);

    if (searchValue.trim() !== '') {
      const filtered = Object.values(serviceDetails).filter((service) =>
        service.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        service.description.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredServices(filtered);
    } else {
      setFilteredServices([]);
    }
  };

  // Обновление активной страницы
  const handleNavClick = (page: string) => {
    setActivePage(page);
  };

  // Преобразование объектов услуг в массив
  const filteredServicesArray = Object.values(filteredServices);

  return (
    
      <header className="container mx-auto  w-full font-gilroy mb-[42px] mt-[36px]">
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between w-full mt-[36px]">
          <div className="flex items-center ">
            <a href="/">
              <Image src="/logo.png" alt="Logo" width={72} height={72} />
            </a>
            <span className="text-[36px] font-Gilroy text-lightBlue pl-[12px] whitespace-nowrap">Med-Pro</span>
          </div>

          <nav className="hidden lg:flex space-x-6 ml-[85px] lg:w-[299px] lg:h-auto rounded-full bg-white justify-center items-center">
          <a
  href="/"
  className={`flex items-center justify-center text-[16px] w-[140px] h-[62px] pl-[10px] rounded-full transition-colors duration-500 ${
    activePage === 'Главная' ? 'text-black hover:bg-pink hover:text-white' : 'bg-white text-black hover:bg-pink hover:text-white'
  }`}
  onClick={() => handleNavClick('Главная')}
>
  Главная
</a>

            <a
              href="/services"
              className={`flex items-center justify-center text-[16px] w-[140px] h-[62px] pl-[12px] rounded-full transition-colors duration-500 ${
                activePage === 'Услуги' ? 'bg-pink text-white' : 'bg-white text-black hover:bg-pink hover:text-white'
              }`}
              onClick={() => handleNavClick('Услуги')}
            >
              Услуги
            </a>
            <a
              href="/about"
              className={`flex items-center justify-center text-[16px] w-[140px] h-[62px] pr-[15px] rounded-full transition-colors duration-500 ${
                activePage === 'О нас' ? 'bg-pink text-white' : 'bg-white text-black hover:bg-pink hover:text-white'
              }`}
              onClick={() => handleNavClick('О нас')}
            >
              О нас
            </a>
          </nav>

          <div className="relative flex items-center  mt-4 lg:mt-0 ml-[20px] mr-[12px]">
            <div className="absolute left-4">
              <Image src="/search.png" alt="Search Icon" width={22} height={22} />
            </div>
            <input
              type="text"
              placeholder="Найдите доктора или сервис"
              value={searchTerm}
              onChange={handleSearchChange}
              className="lg:w-[294px] lg:h-[62px] text-[16px] pl-[52px] border rounded-full"
            />
          </div>

          <div className="flex items-center mt-4  ">
            <div className=" md:flex items-center">
              <Image src={ru} alt="Russian Flag" width={51} height={31} className="border-2 border-lightBlue rounded-lg" />
              <Image src={kg} alt="Kyrgyz Flag" width={50} height={30} className="ml-[12px]" />
            </div>
            <button className="h-[40px] lg:h-[62px] text-white bg-lightBlue rounded-full flex items-center justify-center  lg:w-[192px]">
              Регистрация
              <div className="flex items-center justify-center bg-white ml-[12px] rounded-full w-[30px] lg:w-[50px] h-[30px] lg:h-[50px]">
                <Image src={chevronIcon} alt="Chevron Icon" width={24} height={24} />
              </div>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="flex flex-col items-center mt-4 space-y-4 md:hidden">
            <a href="/" className="text-black">Главная</a>
            <a href="/services" className="text-black">Услуги</a>
            <a href="/about" className="text-black">О нас</a>
          </nav>
        )}
     

      {/* Список услуг */}
      <div className="container mx-auto  mt-[20px]">
        {filteredServicesArray.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredServicesArray.map((service: ServiceDetails, index: number) => (
              <li key={index} className="border rounded-3xl p-6 shadow-lg">
                <Image src={service.image} alt={service.title} width={100} height={100} className="rounded-lg" />
                <h3 className="text-xl font-bold mt-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          hasSearched && searchTerm.trim() !== '' && <p className="text-[16px]">Не найдено услуг по вашему запросу.</p>
        )}
      </div>
      </header>
  );
};
 

export default Header;
