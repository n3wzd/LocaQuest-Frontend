const formatDateLetter = (dateStr: string): string => {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date string");
    }

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    };
  
    const formattedDate = new Intl.DateTimeFormat('ko-KR', options).format(date);
    const [year, month, day] = formattedDate.split('.');
    return `${year}년${month}월${day}일`;
}

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  const formattedDate = date.toISOString().split('T')[0];
  return formattedDate;
}

const getToday = () => formatDate((new Date()).toString());

const getDateFromToday = (day: number) => {
  const date = new Date();
  date.setDate(date.getDate() + day);
  return formatDate(date.toString());
}

export default { 
  formatDateLetter: formatDateLetter,
  formatDate: formatDate,
  getToday: getToday,
  getDateFromToday: getDateFromToday,
};
