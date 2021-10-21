import React from 'react'
import { Table, Rate } from "antd";

function FeedbackTable(props) {

    const {feedbacks, students} = props


    const studentsMemo = {}

    function findStudentById(studentId) {

        return students.filter(std => std.user_id === studentId)[0]

    }

    const rowData = feedbacks?.map((feedback, index) => {
        
        let student = {}
        
        if (studentsMemo[feedback.student_id]) {
            student =  studentsMemo[feedback.student_id]
            // console.log(true)
            // console.log(studentsMemo)
        }else{
            student = findStudentById(feedback.student_id)
            studentsMemo[feedback.student_id] = student
            // console.log(false)
            // console.log(studentsMemo)
        }
        
        
        return {
            key: `${feedback.student_id}-${index}`,
            curriculumName: feedback.curriculum_name,
            studentId: feedback.student_id,
            studentName: student?.name,
            feedbackText: feedback.feedback,
            rating: feedback.rating,
            sessionDate: feedback.session_created_at
        }


    })

    const columns = [
        {
            title: 'Curriculum Name',
            key: 'curriculumName',
            dataIndex: "curriculumName"
        },
        {
            title: 'Rating',
            key: 'rating',
            dataIndex: "rating",
            render: rating => <Rate allowHalf disabled value={rating}/>
        },
        {
            title: 'Feedback',
            key: 'feedbackText',
            dataIndex: "feedbackText"
        },
        {
            title: 'Student Name',
            key: 'studentName',
            dataIndex: 'studentName',
        },
        {
            title: 'Date',
            key: 'sessionDate',
            dataIndex: 'sessionDate',
            render: dateString => new Date(Number(dateString)).toLocaleDateString('en-GB', {month: 'short', year: 'numeric', 'day': 'numeric'})
        }
    ]

    //TODO Use row data to show table
    return (
        <div>
            <Table columns={columns} dataSource={rowData}/>
        </div>
    )
}

export default FeedbackTable
