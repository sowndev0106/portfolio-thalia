import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';

interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
    image: string | null;
}

const ModalBanner: React.FC<IModalProps> = ({ isOpen, onClose, image }) => {

    if (!isOpen || !image) return null;

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-black bg-opacity-85 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden  text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 md:max-w-screen-lg"
                    >
                        <div className="relative">
                            <button
                                onClick={onClose}
                                className="absolute top-1 right-1 text-white hover:text-[#7E47FC]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <img className="h-auto w-auto p-10" src={image} alt="" />
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};

export default ModalBanner;