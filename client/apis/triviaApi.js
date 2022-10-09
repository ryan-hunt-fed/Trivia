import  request  from "superagent";

export function getTriviaDataApi() {
    return request.get('https://the-trivia-api.com/api/questions?limit=10')
    .then((resp) => {
        console.log(resp.body, 'from api')
        return resp.body
    })

}