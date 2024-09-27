import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface AppointmentFormProps {
  onClose: () => void;
  isOpen: boolean; // Проп для управления видимостью окна
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onClose, isOpen }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Запись отправлена:', { name, phone, email });
    onClose(); // Закрываем модальное окно после отправки формы
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
        <div className="fixed inset-0 bg-black opacity-30"></div>

        <div className="min-h-screen px-4 text-center">
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative inline-block w-full max-w-[800px] h-auto p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">

              {/* Кнопка закрытия (крестик) */}
              <button onClick={onClose} className="absolute top-4 right-4 text-gray hover:text-gray-400">
                &#10007;
              </button>

              <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 mb-4">
                Запись на консультацию
              </Dialog.Title>

              {/* Форма с полями */}
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-[20px]">
                  <input
                    type="text"
                    placeholder="Имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-400 px-3 py-2 w-full rounded-xl"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border border-gray-400 px-3 py-2 w-full rounded-xl"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-400 px-3 py-2 w-full rounded-xl"
                    required
                  />

                  <button
                    type="submit"
                    className="bg-lightBlue text-white px-4 py-2 rounded-xl mt-4"
                  >
                    Записаться
                  </button>
                </div>
              </form>

            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AppointmentForm;
