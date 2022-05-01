function solution(id_list, report, k) {
    const answer = new Array(id_list.length).fill(0);
    const report_list = {};
    
    id_list.map((user)=>{
        report_list[user] = []
    })
    
    report.map((rep)=>{
        const [reporter, reported] = rep.split(' ')
        if(!report_list[reported].includes(reporter)){
            report_list[reported].push(reporter)
        }        
    })
    
    for(const reported in report_list){
        if(report_list[reported].length >= k){
            report_list[reported].map((reporter)=>{
                answer[id_list.indexOf(reporter)] += 1
            })
        }
    }
    return answer;
}