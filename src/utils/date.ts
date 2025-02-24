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

const getDiffDate = (startFormatDate: string, endFormatDate: string) => {
  const date1 = new Date(endFormatDate);
  const date2 = new Date(startFormatDate);
  const diffTime = Math.abs(date1.getTime() - date2.getTime());
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

const getToday = () => formatDate((new Date()).toString());

const getDayOfWeek = () => (new Date()).getDay();

const getDateFromToday = (day: number) => {
  const date = new Date();
  date.setDate(date.getDate() + day);
  return formatDate(date.toString());
}

export default { 
  formatDateLetter: formatDateLetter,
  formatDate: formatDate,
  getToday: getToday,
  getDayOfWeek: getDayOfWeek,
  getDiffDate: getDiffDate,
  getDateFromToday: getDateFromToday,
};
