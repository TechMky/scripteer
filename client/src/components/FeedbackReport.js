import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../context/AppContext'
import { getAllStudents, getInstructorFeedback } from '../queries/service'
import { decode } from "jsonwebtoken";
import FeedbackTable from './FeedbackTable';

function FeedbackReport() {

    const {activeBatch, token} = useContext(AppContext)

    const [students, setStudents] = useState([])
    
    const [feedbacks, setFeedbacks] = useState([])
    
    useEffect(() => {
        
        
        const getAllStudentsPromise = getAllStudents(activeBatch)
        
        const instructorId = decode(token, {complete: true}).payload.userId
        const getInstructorFeedbackPromise = getInstructorFeedback(instructorId, activeBatch)

        Promise.all([getAllStudentsPromise, getInstructorFeedbackPromise]).then(valuesArray => {
            const [students, feedbacks] = valuesArray;
            setStudents(students.students)
            setFeedbacks(feedbacks.feedbacks)
           
        })
        
        return () => {
            setStudents([])
            setFeedbacks([])
        }
    }, [activeBatch, setStudents, token])

    return (
        <>
          <FeedbackTable students={students} feedbacks={feedbacks} />            
        </>
    )
}

export default FeedbackReport
