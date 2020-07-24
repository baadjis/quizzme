export const shuffleQuestions = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

export const dateFormat = (milliseconds:number):string =>{

  var hours   = Math.floor(milliseconds / 3600);
  var minutes = Math.floor((milliseconds - (hours * 3600)) / 60);
  var seconds = milliseconds - (hours * 3600) - (minutes * 60);

  // round seconds
  seconds = Math.round(seconds * 100) / 100

  var result= (hours < 10 ? "0" + hours : hours);
      result += ":" + (minutes < 10 ? "0" + minutes : minutes);
      result += ":" + (seconds  < 10 ? "0" + seconds : seconds);
  return result.toString();
  
}