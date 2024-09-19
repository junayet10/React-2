import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Practise from './components/Practise'

function App() {
  
  let databaseTest = [
      {
        "image" : 'public/images/1.jpg' ,
        "name" : "Junayet" ,
        "email" : "junayet@gmail.com",
        "phone" : "013426" ,
        "skills" : ['html' , 'css' , 'javascript' , 'react'] ,
        "btn" : "submit"
      },
      {
        "image" : 'public/images/2.jpg' ,
        "name" : "Safi" ,
        "email" : "Safi@gmail.com",
        "phone" : "013426" ,
        "skills" : ['html' , 'css' , 'javascript' , 'react'] ,
        "btn" : "click here"
      },
      {
        "image" : 'public/images/3.jpg' ,
        "name" : "Tamim" ,
        "email" : "Tamim@gmail.com",
        "phone" : "013426" ,
        "skills" : ['html' , 'css' , 'javascript' , 'react'] ,
        "btn" : "Save"
      },
      {
        "image" : 'public/images/4.jpg' ,
        "name" : "Omar" ,
        "email" : "Omar@gmail.com",
        "phone" : "013426" ,
        "skills" : ['html' , 'css' , 'javascript' , 'react'] ,
        "btn" : "Download"
      }
  ]
  

  return (
    <>

    {
      databaseTest.map((item, index) => (

        <Practise img= {item['image']} name= {item['name']} email= {item['email']} phone= {item['phone']} skills={item['skills']} btn= {item['btn']}/>

      ))
    }

     

    </>
  )
}

export default App
