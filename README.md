# alarmclock
demonstrating an example of Reacts useEffect and useState hooks concept

The useEffect hook is like an alarm clock, and the dependencies array `[time]` is like the time it is set to "ring" or execute.
When the component renders, the alarm clock is set to "ring" after the initial render.
When the alarm "rings," the code within the useEffect hook is executed, which in this case logs a message and updates the displayed time.
The `time` state represents the current time. When it's updated, the alarm clock is "reset" to ring again, simulating an endless loop.
