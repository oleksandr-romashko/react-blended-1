import formatDistanceToNow from "date-fns/formatDistanceToNow";

export const formatDateToNow = dateString =>
  formatDistanceToNow(new Date(dateString), { addSuffix: true });
