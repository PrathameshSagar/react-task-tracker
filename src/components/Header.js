import Button from './button'

const Header = ({addToggle,value}) => {
    
    
    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button text={`${!value?'Add':'close'}`} color={`${!value?'green':'red'}`} click={addToggle}/>
        </header>
    )
}

export default Header
