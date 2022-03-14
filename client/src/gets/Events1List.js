import React from 'react'


export const Events1List = ({ events1 }) => {


  return (
  <div className = "row">
    <div className = "col s12">



          { events1.map((event, index) => {
            return (
              <div className = "card z-depth-0 green lighten-5" style = {{marginTop:10, padding:10}}>

                <p className="pcl"><span className = "hspan">Название: </span>{event.name}</p>
                <p className="pcl"><span className = "hspan">Дата: </span>{event.date}</p>
                <p className="pcl"><span className = "hspan">Место: </span>{event.place}</p>

              </div>
            )
          })
        }


    </div>
  </div>

)



}
