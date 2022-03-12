export const minutesToHours = (min) => {
    const hours = Math.trunc(min / 60);
    const minutes = min % 60;

    return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
}