import React from 'react'


export const Events1List = ({ event1 }) => {


  return (
  <div className = "row">
    <div className = "col s12">



          { event1.map((event1, index) => {
            return (
              <div className = "card z-depth-0 green lighten-5" style = {{marginTop:10, padding:10}}>

                <p className="pcl"><span className = "hspan">Название: </span>{event1.name}</p>
                <p className="pcl"><span className = "hspan">Дата: </span>{event1.date}</p>
                <p className="pcl"><span className = "hspan">Место: </span>{event1.place}</p>

              </div>


            )
          }) }


    </div>
  </div>

)



}
