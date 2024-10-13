import React from 'react';
import { eventData } from './eventData.js'; 

export default function Eventscard() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className='mb-12 container min-h-screen h-auto pt-[80px] md:pb-0 pb-[50px] flex md:flex-row md:justify-around md:items-start flex-col justify-start items-center gap-[20px] '>
                <EventsCard />
            </main>
        </div>
    );
}

const EventsCard = () => {
    return (
        <div className="container mx-auto p-6 max-w-[1440px] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {eventData.map((event, index) => (
                <div
                    key={index}
                    className="bg-black rounded-md shadow-md p-4 flex flex-col justify-between 
                    hover:shadow-lg transition-shadow duration-300 
                    hover:scale-105 transform transition-all duration-500 ease-in-out 
                    hover:shadow-[0_0_15px_rgba(255,255,255,0.9)]"
                >
                    <h3 className="text-base font-semibold mb-2 text-white text-center">
                        {event['Events Name']}
                    </h3>
                    <p className="text-white mb-1 text-sm">
                        <strong>Date:</strong> {event['Start date']} - {event['End date']}
                    </p>
                    <p className="text-white mb-1 text-sm">
                        <strong>Description:</strong> {event.Description}
                    </p>
                    <p className="text-white mb-1 text-sm">
                        <strong>Prize Pool:</strong> {event['Prize Pool']}
                    </p>

                    <div className="event-links text-blue-500 text-sm">
                        {event['Registration Link'] && (
                            <p className="mb-1">
                                <strong>Registration: </strong>
                                <a
                                    href={event['Registration Link']}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-colors duration-200 ease-in-out hover:underline hover:text-yellow-300"
                                >
                                    Register Here
                                </a>
                            </p>
                        )}
                        {event['Rule Book'] && (
                            <p className="mb-1">
                                <strong>Rule Book: </strong>
                                <a
                                    href={event['Rule Book']}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-colors duration-200 ease-in-out hover:underline hover:text-yellow-300"
                                >
                                    View Rule Book
                                </a>
                            </p>
                        )}
                        {event['Whatsapp links'] && (
                            <p className="mb-1">
                                <strong>Whatsapp Group: </strong>
                                <a
                                    href={event['Whatsapp links']}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-colors duration-200 ease-in-out hover:underline hover:text-yellow-300"
                                >
                                    Join Whatsapp Group
                                </a>
                            </p>
                        )}
                    </div>

                    <p className="text-white mb-1 text-sm">
                        <strong>Contact:</strong> {event.POC}
                    </p>
                    <p className="text-white text-sm">
                        <strong>Club:</strong> {event.Club || 'Not Mentioned'}
                    </p>
                </div>
            ))}
        </div>
    );
};
