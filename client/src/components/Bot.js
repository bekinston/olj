import React, {useContext, useEffect, useState} from 'react'
import {Events1Show} from '../gets/Events1Show'
import {Events2Show} from '../gets/Events2Show'
import {SubjectsShow} from '../gets/SubjectsShow'
import {Subject0Show} from '../gets/Subject0Show'


export class Bot extends React.Component {
          constructor(props) {
            super(props)
            this.state = {
              visible:"hidden",
              button:"Помощь",
              currentStep: 1,
              destination:"",
              desctination2:""
            }
          }

          visibleHandler = () => {
            if(this.state.visible == "hidden"){
              this.setState({
                visible:"visible",button:"Скрыть", currentStep: 1
              })
            }
            else{
              this.setState({
                visible:"hidden",button:"Помощь"
              })
            }
          }

          ondest1 = () => {
            let currentStep = this.state.currentStep
            currentStep = 3
            this.setState({
              currentStep: currentStep,
              destination2:"1"
            })
          }

          ondest2 = () => {
            let currentStep = this.state.currentStep
            currentStep = 3
            this.setState({
              currentStep: currentStep,
              destination2:"2"
            })
          }


          ontake1 = () => {
            let currentStep = this.state.currentStep
            currentStep = 2

            this.setState({
              currentStep: currentStep,
              destination:"предметы"
            })

            console.log(this.state.destination)
          }

          ontake2 = () => {
            let currentStep = this.state.currentStep
            currentStep = 2
            this.setState({
              currentStep: currentStep,
              destination: 'добавить/убрать'
            })
          }

          ontake3 = () => {
            let currentStep = this.state.currentStep
            currentStep = 2
            this.setState({
              currentStep: currentStep,
              destination: 'мероприятия'
            })
          }


      render() {

        return (
          <div>

          <div className = "right"><div className = "chat">
            <div className = {this.state.visible}>
              <p className = "center phead" style = {{padding:10}}>Онлайн ассистент</p>
              <div className = "chatbody">
              <FirstStep
                currentStep={this.state.currentStep}
                desctination={this.state.destination}
                ontake1 = {this.ontake1}
                ontake2 = {this.ontake2}
                ontake3 = {this.ontake3}

              />
              <SecondStep
                currentStep={this.state.currentStep}
                destination={this.state.destination}
                destination2={this.state.destination2}
                ondest1={this.ondest1}
                ondest2={this.ondest2}
              />
              <ThirdStep
                destination={this.state.destination}
                currentStep={this.state.currentStep}
                destination2={this.state.destination2}
              />
              </div>



            </div>
            <button className = "button action" onClick={this.visibleHandler}>{this.state.button}</button>
          </div></div>




          </div>
        );
      }
    }

    class FirstStep extends React.Component {

        render() {

          if (this.props.currentStep !== 1) {
            return null
          }
          return(
            <div>
              <center><button className = "button2 center" onClick={this.props.ontake1}>Данные о предмете</button></center>
              <center><button className = "button2 center" onClick={this.props.ontake2}>Добавить/Убрать предмет</button></center>
              <center><button className = "button2 center" onClick={this.props.ontake3} style={{marginBottom:20}}>Мероприятия</button></center>
            </div>
          );
        }
    }
    class SecondStep extends React.Component {

        render() {

            if (this.props.currentStep !== 2) {
                return null
            }

            if(this.props.destination == 'предметы'){
              return(

                <div>
                <h5 className = "center head">Предметы</h5>
                <SubjectsShow/>
                </div>
              )
            }

            if(this.props.destination == 'добавить/убрать'){
              return(

                <div>
                <h5 className = "center head">Добавить</h5>
                <Subject0Show/>
                </div>
              )
            }

            if(this.props.destination == 'мероприятия'){
              return(
                <div>
                  <center><button className = "button2 center" onClick={this.props.ondest1} >Развлекательные</button></center>
                  <center><button className = "button2 center" onClick={this.props.ondest2}>Учебные</button></center>
                </div>

              )
            }

        }
    }


    class ThirdStep extends React.Component {
        render() {
          if (this.props.currentStep !== 3) {
            return null
          }

          if(this.props.destination == 'мероприятия' && this.props.destination2 == '1'){
            return(
              <div>
              <h5 className = "center head">развлекательные мероприятия</h5>
                <Events1Show/>
              </div>

            )
          }

          if(this.props.destination == 'мероприятия' && this.props.destination2 == '2'){
            return(
              <div>
              <h5 className = "center head">учебные мероприятия</h5>
                <Events2Show/>
              </div>
            )
          }

        }
    }
