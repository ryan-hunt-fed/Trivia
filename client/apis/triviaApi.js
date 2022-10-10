import  request  from "superagent";

export function getTriviaDataApi() {
    return request.get('https://opentdb.com/api.php?amount=50')
    .then((resp) => {
        console.log(resp.body, 'from api')
        return resp.body.results
    })

}