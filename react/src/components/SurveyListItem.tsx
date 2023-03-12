import React from 'react'
import TButton from './core/TButton'
import {BiPencil} from "react-icons/bi"
import {BsBoxArrowUpRight} from "react-icons/bs"
import {FaTrashAlt} from "react-icons/fa"

interface Props{
    survey:any,
    key:Number,
    onDeleteClick:(id:Number)=>void
};

function SurveyListItem(props: Props) {
  return (
    <div className="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]">
      <img
        src={props.survey.image_url}
        alt={props.survey.title}
        className="w-full h-48 object-cover"
      />
      <h4 className="mt-4 text-lg font-bold">{props.survey.title}</h4>
      <div
        dangerouslySetInnerHTML={{ __html: props.survey.description }}
        className="overflow-hidden flex-1"
      ></div>

      <div className="flex justify-between items-center mt-3">
        <TButton to={`/surveys/${props.survey.id}`}  color="indigo" >
          <BiPencil className="w-5 h-5 mr-2 "/>
          Edit
        </TButton>
        <div className="flex items-center">
          <TButton href={`/view/survey/${props.survey.slug}`} circle link to={undefined} >
            <BsBoxArrowUpRight className="w-5 h-5" />
          </TButton>

          {props.survey.id && (
            <TButton onClick={ev => props.onDeleteClick(props.survey.id)} circle link color="red" to={undefined} >
              <FaTrashAlt className="w-5 h-5" />
            </TButton>
          )}
        </div>
      </div>
    </div>
  )
}

export default SurveyListItem