const Header = ({name}) => {
    return(
    <div>
    <h1>{name}</h1>
    </div>
    )
  }
  
  const Part = ({part,exercises}) => {
    return(
      <div>
        <p>
          {part} - : {exercises}
        </p>
      </div>
    )
  }
  
  const Content = ({parts}) => {
    return(
    <div>
      {parts.map((part,index)=>(
        <Part key={index} part={part.name} exercises={part.exercises} />
      ))}
    </div>
    )
  }
  
  const Total = ({parts}) => {
    return(
      <div>
        <p>
          <h3>
            Total exercises:{parts.map(part=>part.exercises).reduce((sum,exercises)=>sum+exercises,0)}
          </h3>
          <p>-------------------------------------------</p>
        </p>
      </div>
    )
  }
  
  const Course= ({courses}) =>{
    return (
      <div>
        {courses.map((course)=>(
          <div key={course.id}>
          <Header name={course.name} />
          <Content parts={course.parts}/>
          <Total parts = {course.parts} />
          </div>
        ))}
      </div>
    )
  
  }

  export default Course