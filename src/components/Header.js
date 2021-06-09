import Button from './button'

const Header = () => {
    
    const click = () => {
        console.log('click');
    }
    
    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button text='Add' color='green' click={click}/>
        </header>
    )
}

export default Header
