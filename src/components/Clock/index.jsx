import React, { useEffect, useState } from 'react';

function CountdownTimer({ targetDate }) {
    const calculateTimeLeft = () => {
        const difference = targetDate - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return { difference, timeLeft }; // Return both difference and timeLeft
    };

    const [timeData, setTimeData] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeData(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const { difference, timeLeft } = timeData; // Destructure timeData

    return (
        <div>
            {difference > 0 ? (
                <div className="flex items-center gap-[17px] text-center">
                    <div>
                        <span>Days</span>
                        <p className="text-[32px] font-semibold">{timeLeft.days}</p>
                    </div>
                    <span className="text-[var(--primary)] text-4xl">:</span>
                    <div>
                        <span>Hours</span>
                        <p className="text-[32px] font-semibold">{timeLeft.hours}</p>
                    </div>
                    <span className="text-[var(--primary)] text-4xl">:</span>
                    <div>
                        <span>Minutes</span>
                        <p className="text-[32px] font-semibold">{timeLeft.minutes}</p>
                    </div>
                    <span className="text-[var(--primary)] text-4xl">:</span>
                    <div>
                        <span>Seconds</span>
                        <p className="text-[32px] font-semibold">{timeLeft.seconds}</p>
                    </div>
                </div>
            ) : (
                <p>Countdown expired!</p>
            )}
        </div>
    );
}

export default CountdownTimer;
