const Course = ({ course }) => {
    return (
        <>
            <Header header={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )
}

const Header = ({ header }) => {
    return (
        <h1>{header}</h1>
    )
}

const Content = ({ parts }) => {
    return (
        <>
            {parts.map(part =>
                <Part key={part.id} part={part} />
            )}
        </>
    )

}

const Part = ({ part }) => {
    return (
        <p >
            {part.name} {part.exercises}
        </p>
    )
}

const Total = ({ parts }) => {
    return (
        <p>total of {parts.reduce((acc, curValue) =>
            acc + curValue.exercises, 0,)
        } exercises</p>
    )
}

export default Course
