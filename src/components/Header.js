import airbnb from '../imgs/airbnblogo.png'

export default function Header(){
    return (
        <header className='Heder'>
            <nav>
                <img className='abnb-logo' src={airbnb} />
            </nav>
        </header>
    )
}