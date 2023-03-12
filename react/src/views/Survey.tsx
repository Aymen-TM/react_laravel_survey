import React from 'react'
import TButton from '../components/core/TButton'
import PageComponent from '../components/PageComponent'
import SurveyListItem from '../components/SurveyListItem'
import { useStateContext } from '../contexts/ContextProvider'


type Props = {

}

const onDeleteClick = (id:Number)=>{
  console.log("Delete");
  
}

const Survey = (props: Props) => {
      const {surveys} = useStateContext()
  return (
    <PageComponent title='Surveys' buttons={(<TButton color="green" to="/survey/create" >Create new</TButton>)}>
      <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
        surveys.map((survey)=>(
          <SurveyListItem survey={survey} key={survey.id} onDeleteClick={onDeleteClick} />
        ))
        }
      </div>
    </PageComponent>
  )
}

export default Survey