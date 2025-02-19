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
  return `${year}-${month}-${day}`;
}
  
export default { 
  formatDateLetter: formatDateLetter,
  formatDate: formatDate
};
