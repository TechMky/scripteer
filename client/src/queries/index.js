export const QUERIES = {

    BASE_URL: 'https://pluto.attainu.com/',
    LOGIN: {
        "operationName": null,
        "variables": {
            "email": "yashasvi.sinha@attainu.com",
            "password": "attainu123",
            "appType": "UNI"
        },
        "query": "mutation ($email: String!, $password: String!, $appType: String!) {\n  login(data: {email: $email, password: $password, appType: $appType}) {\n    success\n    token\n    message\n    userId\n    userRoles\n    data {\n      name\n      email\n      phone\n      paymentDetailsId\n      __typename\n    }\n    __typename\n  }\n}\n"
    },
    INSTRUCTOR_PROFILE: {
        "operationName": null,
        "variables": {

        },
        "query": "{\n  userDetails {\n    success\n    message\n    data {\n      id\n      firstname\n      lastname\n      phone\n      email\n      linkedin_url\n      profile_pic\n      specialization\n      __typename\n    }\n    __typename\n  }\n}\n"
    },
    EVALUATE: { 
        "operationName": null, 
        "variables": { 
            "userId": 76743, 
            "testId": 290, 
            "feedback": "- Should have used an ORM for SQL", 
            "performanceScores": [{ "topic_id": 2, "topic_name": "Back-End", "max_mark": 100, "marks": 77 }], 
            "testType": "" 
        }, 
        "query": "mutation ($testId: Int!, $userId: Int!, $feedback: String, $testType: String, $reason: String, $performanceScores: [PerformanceScoresType]) {\n  evaluateTest(data: {testId: $testId, userId: $userId, feedback: $feedback, testType: $testType, reason: $reason, performanceScores: $performanceScores}) {\n    success\n    message\n    __typename\n  }\n}\n" 
    },
    BATCHES: {
        operationName: null,
        variables: {},
        query: "{\n  batches {\n    success\n    message\n    data {\n      course_id\n      batch_id\n      name\n      start_date\n      title\n      __typename\n    }\n    __typename\n  }\n}\n"
    }

}