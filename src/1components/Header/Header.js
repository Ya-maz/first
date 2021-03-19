import H from './Header.module.css'

function Header(){
    return (
        <div className={H.header}>
            <div>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqqoR1LEm17-DETncFQJlOkd14EaLYTjNHcwac60C6O9vhlVt92LBrNl5zkCGAiI1_Iwo&usqp=CAU '} />
            </div>
            <div className={H.name}>New social</div>
        </div>
    )
}
export default Header;