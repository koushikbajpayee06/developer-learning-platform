import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import {Line} from 'rc-progress'
import Footer from '../../components/student/Footer'

const MyEnrollments = () => {
  const {enrolledCourses, calculateCourseDuration} = useContext(AppContext)
  const [progress, setProgress] = useState([
    {lectureCompleted: 4, totalLecture: 10},
    {lectureCompleted: 2, totalLecture: 8},
    {lectureCompleted: 0, totalLecture: 12},    
    {lectureCompleted: 8, totalLecture: 10},
    {lectureCompleted: 10, totalLecture: 10},
    {lectureCompleted: 6, totalLecture: 10},
    {lectureCompleted: 1, totalLecture: 10},
    {lectureCompleted: 10, totalLecture: 10},
    {lectureCompleted: 3, totalLecture: 10},
    {lectureCompleted: 10, totalLecture: 10},
  ])

  const navigate = useNavigate()
  return (
    <>
      <div className='md:px-36 px-8 pt-10'>
        <h1 className='text-2xl font-semibold'>My Enrollments</h1>
        <div className='overflow-x-auto'>
            <table className='md:table-auto table-fixed w-full  border mt-10'>
            <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden'>
                <tr >
                  <th className='px-4 py-3 font-semibold truncate'>Course</th>
                  <th className='px-4 py-3 font-semibold truncate'>Duration</th>
                  <th className='px-4 py-3 font-semibold truncate'>Completed</th>
                  <th className='px-4 py-3 font-semibold truncate'>Status</th>
                </tr> 
            </thead>
            <tbody className='text-gray-700'>
              {
                enrolledCourses.map((course,index)=>(
                  <tr key={index} className='border-b border-gray-500/20'>
                    <td className='md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3'>
                      <img src={course.courseThumbnail} alt={course.courseName} className='w-14 sm:w-24 md:w:28' />
                      <div className='flex-1'>
                        <p className='mb-1 max-sm:text-sm'>{course.courseTitle}</p>
                        <Line strokeWidth={2} percent={progress[index] ? (progress[index].lectureCompleted / progress[index].totalLecture * 100) : 0} className='bg-gray-300 rounded-full'/>
                      </div>
                    </td>
                    <td className='px-4 py-3 max-sm:hidden'>
                      {calculateCourseDuration(course)}
                    </td>
                    <td className='px-4 py-3 max-sm:hidden'>
                      {progress[index] && `${progress[index].lectureCompleted} / ${progress[index].totalLecture}`} <span>Lectures</span>
                    </td>
                    <td className='px-4 py-3 max-sm:text-right'>
                      <button onClick={()=>navigate(`/player/`+course._id)} className='px-3 cursor-pointer sm:px-5 py-1.5 sm:py-2 bg-blue-600 max-sm:text-xs text-white'>
                        {progress[index] && progress[index].lectureCompleted === progress[index].totalLecture ? "Completed" : "Continue"}
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
            </table>
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default MyEnrollments
