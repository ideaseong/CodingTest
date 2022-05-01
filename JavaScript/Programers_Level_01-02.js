function solution(lottos, win_nums) {
    var answer = [];
    const corrects = lottos.filter(lotto => win_nums.includes(lotto)).length;
    const zeros = lottos.filter(lotto => lotto === 0).length;
    const max = (corrects + zeros) >= 2 ? 7 - (corrects + zeros) : 6;
    const min = corrects >= 2 ? 7 - corrects : 6;
    answer = [max, min]
    return answer;
}