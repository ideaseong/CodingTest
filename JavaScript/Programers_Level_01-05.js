function solution(numbers, hand) {
    const answer = '';
    const left = 10;
    const right = 12;
    
    for (number of numbers) {
        if (number === 0) {
            number = 11;
        }
        
        if (number % 3 === 1) {
            answer += "L";
            left = number;
        }
        else if (number % 3 === 2) {
            answer += "R";
            right = number;
        }
        else {
            const difL = Math.abs(number - left) ;
            const difR = Math.abs(right - number - 2) ;
            if (difL == difR) {
                if (hand === "left"){
                    answer += "L"; 
                    left = number;
                }
                else{
                    answer += "R"; 
                    right = number;
                }
            }
            else if (difL > difR) {
                answer += "R"; 
                right = number;
            }
            else {
                answer += "L"; 
                left = number;
            }
        }
    }
    
    return answer;
}