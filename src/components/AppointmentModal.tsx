import React, { useState } from 'react';
import { ReservationData } from '../types';
import { LOCATION_DETAILS } from '../data/menuData';
import { X, Calendar, Clock, Users, CheckCircle2, Sparkles } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('2026-08-05');
  const [time, setTime] = useState('18:30');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [occasion, setOccasion] = useState('Casual Tasting');
  const [specialRequests, setSpecialRequests] = useState('');
  const [reservation, setReservation] = useState<ReservationData | null>(null);

  const timeSlots = [
    '12:00 PM',
    '01:30 PM',
    '05:00 PM',
    '06:30 PM',
    '08:00 PM',
    '09:30 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const resId = 'RES-' + Math.floor(100000 + Math.random() * 900000);
    const newRes: ReservationData = {
      id: resId,
      name,
      phone,
      email,
      guests,
      date,
      time,
      occasion,
      specialRequests,
      status: 'confirmed',
    };
    setReservation(newRes);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#f6faf6] text-[#181d1b] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#320003]/20 relative my-8 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#320003] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-[#ffddb4] font-body text-xs font-bold uppercase tracking-widest block mb-1">
            Flagship Venice Dining Room
          </span>
          <h3 className="font-anton text-3xl uppercase tracking-tight text-white">
            BOOK TABLE APPOINTMENT
          </h3>
          <p className="text-xs font-body text-white/80 mt-1">
            Reserve your spot for an immersive chef tasting experience on {LOCATION_DETAILS.address}
          </p>
        </div>

        {!reservation ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Guest Count */}
            <div>
              <label className="font-body text-xs font-bold uppercase text-[#320003] block mb-2 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#540b0e]" /> Party Size (Guests)
              </label>
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setGuests(num)}
                    className={`w-10 h-10 rounded-xl font-anton text-sm shrink-0 transition-all ${
                      guests === num
                        ? 'bg-[#320003] text-[#ffddb4] shadow-md scale-105'
                        : 'bg-[#eadfc6]/50 text-[#320003] hover:bg-[#eadfc6]'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-body text-xs font-bold uppercase text-[#320003] block mb-1 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#540b0e]" /> Reservation Date
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-white border border-[#320003]/20 rounded-xl p-2.5 text-xs font-body focus:outline-none focus:border-[#320003]"
                />
              </div>

              <div>
                <label className="font-body text-xs font-bold uppercase text-[#320003] block mb-1 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#540b0e]" /> Preferred Time
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-white border border-[#320003]/20 rounded-xl p-2.5 text-xs font-body focus:outline-none focus:border-[#320003]"
                >
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Guest Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#320003]/10">
              <div>
                <label className="font-body text-xs font-bold uppercase text-[#320003] block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Jordan Hayes"
                  className="w-full bg-white border border-[#320003]/20 rounded-xl p-2.5 text-xs font-body focus:outline-none focus:border-[#320003]"
                />
              </div>

              <div>
                <label className="font-body text-xs font-bold uppercase text-[#320003] block mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(310) 555-0199"
                  className="w-full bg-white border border-[#320003]/20 rounded-xl p-2.5 text-xs font-body focus:outline-none focus:border-[#320003]"
                />
              </div>
            </div>

            <div>
              <label className="font-body text-xs font-bold uppercase text-[#320003] block mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jordan@example.com"
                className="w-full bg-white border border-[#320003]/20 rounded-xl p-2.5 text-xs font-body focus:outline-none focus:border-[#320003]"
              />
            </div>

            <div>
              <label className="font-body text-xs font-bold uppercase text-[#320003] block mb-1">
                Special Requests / Dietary Notes
              </label>
              <textarea
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                placeholder="High chair needed, outdoor seating preferred, gluten allergy..."
                rows={2}
                className="w-full bg-white border border-[#320003]/20 rounded-xl p-2.5 text-xs font-body focus:outline-none focus:border-[#320003]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#320003] hover:bg-[#540b0e] text-[#ffddb4] py-4 rounded-full font-anton text-lg uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2"
            >
              CONFIRM APPOINTMENT
            </button>
          </form>
        ) : (
          /* Confirmation Ticket View */
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#320003] text-[#ffddb4] rounded-full flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-anton text-3xl text-[#320003] uppercase">RESERVATION CONFIRMED!</h4>
            <p className="font-anton text-xl text-[#540b0e] tracking-widest">{reservation.id}</p>
            <div className="bg-[#eadfc6]/70 p-4 rounded-2xl text-left font-body text-xs space-y-2 text-[#320003]">
              <p>
                <strong>Guest:</strong> {reservation.name} ({reservation.guests} People)
              </p>
              <p>
                <strong>Date & Time:</strong> {reservation.date} at {reservation.time}
              </p>
              <p>
                <strong>Location:</strong> SAR BURGER Venice Flagship, 73 Market St
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-full bg-[#320003] text-white py-3.5 rounded-full font-body font-bold text-xs uppercase"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
