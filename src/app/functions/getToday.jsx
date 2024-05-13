import { format } from "date-fns"

const today = new Date();

export const formattedToday = format(today, "EEEE, MMMM do");