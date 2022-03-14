import React from 'react'


export const Events2List = ({ event2 }) => {


  return (
  <div className = "row">
    <div className = "col s12">

          { event2.map((event2, index) => {
            return (
              <div className = "card z-depth-0 green lighten-5" style = {{marginTop:10, padding:10}}>
                <p className="pcl"><span className = "hspan">Название: </span>{event2.name}</p>
                <p className="pcl"><span className = "hspan">Дата: </span>{event2.date}</p>
                <p className="pcl"><span className = "hspan">Место: </span>{event2.place}</p>

              </div>
            )
          }) }


    </div>
  </div>

)



}
