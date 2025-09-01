import "./Header.scss"
import Logo from "@/components/Logo";

export default () => {
    return (
        <header className="header">
            <div className="header__inner container">
                <Logo loading={'eager'} className={'header__logo'}/>
            </div>
        </header>
    )
}