// utils/dateFormatter.ts
export function formatDate(date: string | Date): string {
    const parsedDate = new Date(date); // Ensure it's a Date object
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return parsedDate.toLocaleDateString(undefined, options); // Formats based on locale
}
