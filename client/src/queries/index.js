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
    },
    USER_PROFILE: {
        "operationName": null,
        "variables": {},
        "query": "{\n  userDetails {\n    success\n    message\n    data {\n      id\n      firstname\n      lastname\n      phone\n      email\n      linkedin_url\n      profile_pic\n      specialization\n      subscription_plan\n      __typename\n    }\n    __typename\n  }\n}\n"
    },
    INSTRUCTOR_FEEDBACK: {
        "operationName": null,
        "variables": {
            "batch_id": 17,
            "instructor_id": 93044
        },
        "query": "query ($batch_id: Int!, $instructor_id: Int!) {\n  instFeedback(batch_id: $batch_id, instructor_id: $instructor_id) {\n    success\n    message\n    data {\n      curriculum_name\n      attendance_id\n      rating\n      feedback\n      student_id\n      session_created_at\n      attendances_at\n      __typename\n    }\n    __typename\n  }\n}\n"
    },
    ALL_STUDENTS: {
        "operationName": null,
        "variables": {
            "batch_id": 17
        },
        "query": "query ($batch_id: Int!, $test_id: Int) {\n  getAllStudents(batch_id: $batch_id, test_id: $test_id) {\n    success\n    message\n    data {\n      user_id\n      name\n      email\n      roll_number\n      is_active\n      submission_url {\n        github_url\n        deployed_url\n        hackerrank\n        hackerearth\n        project_report\n        google_drive\n        __typename\n      }\n      status\n      result\n      scores {\n        topic_id\n        topic_name\n        marks\n        max_mark\n        __typename\n      }\n      plag_result {\n        percent\n        url\n        __typename\n      }\n      plag_false_positive\n      feedback_for_plag\n      plag_completed_at\n      plag_error\n      __typename\n    }\n    __typename\n  }\n}\n"
    }

}