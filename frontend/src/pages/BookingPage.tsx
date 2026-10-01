import { useEffect, useState } from 'react'

const monthNames = [
  'január',
  'február',
  'március',
  'április',
  'május',
  'június',
  'július',
  'augusztus',
  'szeptember',
  'október',
  'november',
  'december',
]

const dayNames = [
  'Hétfő',
  'Kedd',
  'Szerda',
  'Csütörtök',
  'Péntek',
  'Szombat',
  'Vasárnap',
]

const hours = Array.from({ length: 9 }, (_, index) => index + 8)

type PublicBooking = {
  date: string
  hour: number
}

function getMonday(date: Date) {
  const monday = new Date(date)
  monday.setHours(12, 0, 0, 0)
  monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7))
  return monday
}

function addDays(date: Date, days: number) {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

function getSlotKey(date: Date, hour: number) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}-${hour}`
}

function isBooked(bookedSlots: Set<string>, date: Date, hour: number) {
  return bookedSlots.has(getSlotKey(date, hour))
}

function formatWeekRange(start: Date, end: Date) {
  const startDate = `${monthNames[start.getMonth()]} ${start.getDate()}.`
  const endDate =
    start.getMonth() === end.getMonth()
      ? `${end.getDate()}.`
      : `${monthNames[end.getMonth()]} ${end.getDate()}.`

  return `${start.getFullYear()}. ${startDate} – ${endDate}`
}

function BookingPage() {
  const [weekStart, setWeekStart] = useState(() => getMonday(new Date()))
  const [bookedSlots, setBookedSlots] = useState<Set<string>>(new Set())

  useEffect(() => {
    fetch('/api/bookings')
      .then((response) => {
        if (!response.ok) {
          throw new Error('A foglalások betöltése sikertelen.')
        }
        return response.json() as Promise<PublicBooking[]>
      })
      .then((bookings) => {
        setBookedSlots(
          new Set(bookings.map((booking) => `${booking.date}-${booking.hour}`)),
        )
      })
      .catch(() => {
        setBookedSlots(new Set())
      })
  }, [])
  const days = Array.from({ length: 7 }, (_, index) =>
    addDays(weekStart, index),
  )
  const weekEnd = days[6]

  const changeWeek = (weeks: number) => {
    setWeekStart((current) => addDays(current, weeks * 7))
  }

  return (
    <main className="subpage booking-page">
      <h1>IDŐPONTFOGLALÁS</h1>
      <p className="booking-intro">
        Az időpontfoglaláshoz keress bizalommal üzenetben vagy telefonon:{' '}
        <a href="tel:+36306941936">(30) 694 1936</a>
      </p>

      <div className="week-navigation">
        <button
          type="button"
          aria-label="Előző hét"
          onClick={() => changeWeek(-1)}
        >
          ‹
        </button>
        <h2>{formatWeekRange(weekStart, weekEnd)}</h2>
        <button
          type="button"
          aria-label="Következő hét"
          onClick={() => changeWeek(1)}
        >
          ›
        </button>
      </div>

      <div className="calendar-scroll">
        <table className="booking-calendar">
          <thead>
            <tr>
              <th scope="col">Időpont</th>
              {days.map((day, index) => (
                <th scope="col" key={day.toISOString()}>
                  <span>{dayNames[index]}</span>
                  <small>
                    {String(day.getMonth() + 1).padStart(2, '0')}.
                    {String(day.getDate()).padStart(2, '0')}.
                  </small>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hours.map((hour) => (
              <tr key={hour}>
                <th scope="row">
                  {String(hour).padStart(2, '0')}:00–
                  {String(hour + 1).padStart(2, '0')}:00
                </th>
                {days.map((day) => {
                  const booked = isBooked(bookedSlots, day, hour)
                  return (
                    <td
                      className={booked ? 'booked' : ''}
                      key={`${day.toISOString()}-${hour}`}
                    >
                      {booked && <span>FOGLALT</span>}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mobile-booking-days">
        {days.map((day, dayIndex) => (
          <section className="mobile-booking-day" key={day.toISOString()}>
            <div className="mobile-day-name">
              <strong>{dayNames[dayIndex]}</strong>
              <span>
                {String(day.getMonth() + 1).padStart(2, '0')}.
                {String(day.getDate()).padStart(2, '0')}.
              </span>
            </div>
            <div className="mobile-time-slots">
              {hours.map((hour) => (
                <button
                  type="button"
                  className={isBooked(bookedSlots, day, hour) ? 'booked' : ''}
                  disabled={isBooked(bookedSlots, day, hour)}
                  key={hour}
                >
                  <span>
                    {String(hour).padStart(2, '0')}:00–
                    {String(hour + 1).padStart(2, '0')}:00
                  </span>
                  {isBooked(bookedSlots, day, hour) && <small>Foglalt</small>}
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}

export default BookingPage
